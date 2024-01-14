document.addEventListener("DOMContentLoaded", function () {
    var ageButton = document.getElementById("age_button"); //copy lines 2-13 for every dropdown menu
    var ageContent = document.getElementById("age_content");

    ageButton.addEventListener("click", function(){
        toggleDropdown("age")
    });
    
    ageContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            selectOptionAge(event.target.dataset.option); //make a new function for each drop down menu
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            var ageDropdown = document.getElementById("age"); //make a list of all dropdowns here and close all of them
            ageDropdown.classList.remove("open"); //call the remove function for every single dropdown variable
        }
    });

    var goBackButton = document.getElementById('goBackButton');
    
    if (goBackButton) {
        goBackButton.addEventListener('click', goBack);
    }

    function goBack() {
        window.history.back();
    }
});
function closeAllDropdowns() {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for(var i = 0; i < dropdowns.length; i++)
    {
        dropdowns[i].style.display = 'none';   
    }
}

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    var dropdownContent = document.getElementById(id + "_content");
    if(dropdownContent.style.display == 'block')
    {
        closeAllDropdowns();
    }
    else
    {
        closeAllDropdowns();
        dropdownContent.style.display = 'block';
    }

    
    dropdownContent.style.width = dropdown.offsetWidth + "px";
}

var age;

function selectOptionAge(option) {
    var dropdownButton = document.getElementById("age_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("age"); // Close the dropdown after selecting an option

    switch (option) {
        case '0 - 4 Years':
            age = "0-4";
            break;
        case '5 - 11 Years':
            age = '5-11';
            break;
        case '12+ Years':
            age = '12+';
            break;
    }

}
