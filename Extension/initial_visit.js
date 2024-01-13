document.addEventListener("DOMContentLoaded", function () {
    var dropdownButton = document.getElementById("dropdownButton");
    var dropdownContent = document.getElementById("myDropdownContent");

    dropdownButton.addEventListener("click", toggleDropdown);
    
    dropdownContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectOption(event.target.dataset.option);
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdown = document.getElementById("myDropdown");
            dropdown.classList.remove("open");
        }
    });
});
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("open");

    var dropdownContent = document.getElementById("myDropdownContent");
    dropdownContent.style.width = dropdown.offsetWidth + "px";
}

function selectOption(option) {
    var dropdownButton = document.getElementById("dropdownButton");
    dropdownButton.innerText = option;
    toggleDropdown(); // Close the dropdown after selecting an option
}