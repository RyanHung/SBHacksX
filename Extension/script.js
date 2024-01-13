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

// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.scripting.executeScript()(null, {
		file: 'scripts/payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('pagetitle').innerHTML = message;
});