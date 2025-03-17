document.addEventListener("DOMContentLoaded", function() {
    let filterSection = document.getElementById("filterSection");
    let filterHeader = document.querySelector(".filter-header");
    let filterIcon = document.getElementById("filter-icon").querySelector("i");

    filterHeader.addEventListener("click", function() {
        if (filterSection.style.display === "none" || filterSection.style.display === "") {
            filterSection.style.display = "block";
            filterIcon.style.transform = "rotateX(180deg)";
        } else {
            filterSection.style.display = "none";
            filterIcon.style.transform = "rotate(0deg)";
        }
    });
});
