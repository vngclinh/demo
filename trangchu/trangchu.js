document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});

function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const pagination = document.querySelector(".pagination");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!slides.length || !pagination || !prevBtn || !nextBtn) {
    console.error("Lỗi: Một số phần tử không tìm thấy. Kiểm tra HTML!");
    return;
  }

  let currentIndex = 0;

  // Tạo số trang động
  for (let i = 0; i < slides.length; i++) {
    let page = document.createElement("span");
    page.classList.add("page-number");
    page.textContent = i + 1;
    page.addEventListener("click", () => goToSlide(i));
    pagination.appendChild(page);
  }

  const pageNumbers = document.querySelectorAll(".page-number");

  function updateSlide() {
    document.querySelector(".slides").style.transform = `translateX(-${
      currentIndex * 100
    }%)`;
    pageNumbers.forEach((num, index) => {
      num.classList.toggle("active-page", index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlide();
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  updateSlide();

  // Tự động chạy slide mỗi 3 giây
  let slideInterval = setInterval(nextSlide, 3000);

  document
    .querySelector(".slider")
    .addEventListener("mouseenter", () => clearInterval(slideInterval));

  document.querySelector(".slider").addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 3000);
  });
}
