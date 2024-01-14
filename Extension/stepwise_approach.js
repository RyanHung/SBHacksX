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

    var stepsButton = document.getElementById("steps_button");
    var stepsContent = document.getElementById("steps_content");

    stepsButton.addEventListener("click", function(){
        event.preventDefault();
        toggleDropdown("steps")
    });
    
    stepsContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectOptionSteps(event.target.dataset.option);
            outputTreatment(event.target.dataset.option);
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

    agemodify();

}

function agemodify()
{
    var steps_dropdown_button = document.getElementById("steps_button");
    var steps_dropdown_content = document.getElementById("steps_content")

    steps_dropdown_button.innerHTML = 'Select an Option';
    steps_dropdown_content.innerHTML = 
    '<a href="#" data-option="Step 1">Step 1</a><a href="#" data-option="Step 2">Step 2</a><a href="#" data-option="Step 3">Step 3</a><a href="#" data-option="Step 4">Step 4</a><a href="#" data-option="Step 5">Step 5</a><a href="#" data-option="Step 6">Step 6</a>'
}

var steps;
// tooltip for saba, ics, laba, ltra
const treatments = ["SABA as needed", "low-dose ICS", "medium-dose ICS", "LABA", "montelukast", "oral corticosteroids", "high-dose ICS", "cromolyn", "LTRA", 
"theophylline", "zileuton", "consider omalizumab for patients who have allergies", "consider subcutaneous allergen immunotherapy for patients who have persistent, allergic asthma"];

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



function outputTreatment(option) {
    // Get the HTML element by its ID
    var preferredTreatment = document.getElementById("treatment_preferred");
    var alternativeTreatment = document.getElementById("treatment_alternative")

    // Reset the output content
    preferredTreatment.innerText = "";
    alternativeTreatment.innerText = "";


    if (age == "0-4") {
        switch (option) {
            case 'Step 1':
                preferredTreatment.innerText = "SABA as Needed";
                alternativeTreatment.innerText = "";
                break;
            case 'Step 2':
                preferredTreatment.innerText = "Low-Dose ICS";
                alternativeTreatment.innerText = "Cromolyn or Montelukast";
                break;
            case 'Step 3':
                preferredTreatment.innerText = "Medium-Dose ICS";
                alternativeTreatment.innerText = "";
                break;
            case 'Step 4':
                preferredTreatment.innerText = "Medium-Dose ICS + Either LABA or Montelukast";
                alternativeTreatment.innerText = "";
                break;
            case 'Step 5':
                preferredTreatment.innerText = "High-dose ICS + Either LABA or Montelukast";
                alternativeTreatment.innerText = "";
                break;
            case 'Step 6':
                preferredTreatment.innerText = "High-Dose ICS + Either LABA or MonteLukast + Oral Corticosteroids";
                alternativeTreatment.innerText = "";
                break;
        }
    } else if (age == "5-11") {
        switch (option) {
            case 'Step 1':
                preferredTreatment.innerText = "SABA As Needed";
                alternativeTreatment.innerText = "";
                break;
            case 'Step 2':
                preferredTreatment.innerText = "Low Dose ICS";
                alternativeTreatment.innerText = "Cromolyn, LTRA, or Theophylline";
                break;
            case 'Step 3':
                preferredTreatment.innerText = "Low Dose ICS + Either LABA, LTRA or Theophylline OR Medium-Dose ICS";
                alternativeTreatment.innerText = "";
                break;
            case 'Step 4':
                preferredTreatment.innerText = "Medium Dose ICS + LABA";
                alternativeTreatment.innerText = "Medium Dose ICS + Either LTRA or Theophylline";
                break;
            case 'Step 5':
                preferredTreatment.innerText = "High-Dose ICS + LABA";
                alternativeTreatment.innerText = "High-Dose ICS + either LTRA or Theophylline";
                break;
            case 'Step 6':
                preferredTreatment.innerText = "High-Dose ICS + LABA + Oral Corticosteroids";
                alternativeTreatment.innerText = "High-Dose ICS + Either LTRA or Theophylline + Oral Corticosteroids";
                break;
        }
    } else if (age == "12+ years") {
        switch (option) {
            case 'Step 1':
                preferredTreatment.innerText = "SABA as needed";
                alternativeTreatment.innerText = "";
                break;
            case 'Step 2':
                preferredTreatment.innerText = "Low-Dose ICS";
                alternativeTreatment.innerText = "Cromolyn, LTRA, or Theophylline";
                break;
            case 'Step 3':
                preferredTreatment.innerText = "Low-Dose ICS + LABA or Medium-Dose ICS";
                alternativeTreatment.innerText = "Low-Dose ICS + Either LTRA, theophylline, or Zileuton";
                break;
            case 'Step 4':
                preferredTreatment.innerText = "Medium-Dose ICS + LABA";
                alternativeTreatment.innerText = "Medium-Dose ICS + Either LTRA, Theophylline, or Zileuton";
                break;
            case 'Step 5':
                preferredTreatment.innerText = "High-Dose ICS + LABA and Consider Omalizumab for Patients who have Allergies";
                alternativeTreatment.innerText = "";
                break;
            case 'Step 6':
                preferredTreatment.innerText = "High-Dose ICS + LABA + Oral Corticosteroid and Consider Omalizumab for Patients who have Allergies";
                alternativeTreatment.innerText = "";
                break;
        }
    } else {
        // Handle the case when age doesn't match any condition
        preferredTreatment.innerText = "Invalid Selection";
        alternativeTreatment.innerText = "";
    }
}
    