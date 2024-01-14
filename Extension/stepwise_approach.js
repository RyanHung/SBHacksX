document.addEventListener("DOMContentLoaded", function () {
    var ageButton = document.getElementById("age_button"); //copy lines 2-13 for every dropdown menu
    var ageContent = document.getElementById("age_content");

    ageButton.addEventListener("click", function(){
        toggleDropdown("age")
    });
    
    ageContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectOptionAge(event.target.dataset.option); //make a new function for each drop down menu
        }
    });

    var symptomsButton = document.getElementById("steps_button");
    var symptomsContent = document.getElementById("steps_content");

    symptomsButton.addEventListener("click", function(){
        toggleDropdown("steps")
    });
    
    symptomsContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectOptionSteps(event.target.dataset.option);
        }
    });


    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            var ageDropdown = document.getElementById("age"); //make a list of all dropdowns here and close all of them
            var symptomsDropdown = document.getElementById("steps");
            // var 
            ageDropdown.classList.remove("open"); //call the remove function for every single dropdown variable
            symptomsDropdown.classList.remove("open");
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
function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.classList.toggle("open");

    var dropdownContent = document.getElementById(id + "_content");
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

var steps;

function selectOptionSteps(option) {
    var dropdownButton = document.getElementById("steps_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("steps"); // Close the dropdown after selecting an option

    switch (option) {
        case 'Step 1':
            steps = "Step 1";
            break;
        case 'Step 2':
            steps = 'Step 2';
            break;
        case 'Step 3':
            steps = 'Step 3';
            break;
        case 'Step 4':
            steps = "Step 4";
            break;
        case 'Step 5':
            steps = 'Step 5';
            break;
        case 'Step 6':
            steps = 'Step 6';
            break;
    }

}