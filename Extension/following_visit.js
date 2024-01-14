document.addEventListener("DOMContentLoaded", function () {
    var ageButton = document.getElementById("age_button"); //copy lines 2-13 for every dropdown menu
    var ageContent = document.getElementById("age_content");

    ageButton.addEventListener("click", function(){
        toggleDropdown("age");
    });
    
    ageContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectOptionAge(event.target.dataset.option); //make a new function for each drop down menu
        }
    });

    var symptomsButton = document.getElementById("symptoms_button");
    var symptomsContent = document.getElementById("symptoms_content");

    symptomsButton.addEventListener("click", function(){
        toggleDropdown("symptoms");
    });
    
    symptomsContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectOptionSymptoms(event.target.dataset.option);
        }
    });

    var awakeningsButton = document.getElementById("awakenings_button");
    var awakeningsContent = document.getElementById("awakenings_content");

    awakeningsButton.addEventListener("click", function(){
        toggleDropdown("awakenings");
    });
    
    awakeningsContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectOptionAwakenings(event.target.dataset.option);
        }
    });


    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            var ageDropdown = document.getElementById("age"); //make a list of all dropdowns here and close all of them
            var symptomsDropdown = document.getElementById("symptoms");
            var awakeningsDropdown = document.getElementById("awakenings");
            ageDropdown.classList.remove("open"); //call the remove function for every single dropdown variable
            symptomsDropdown.classList.remove("open");
            awakeningsDropdown.classList.remove("open");
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
        case '12 Years or Older':
            age = '12+';
            break;
    }

    agemodify()
}

function agemodify()
{
    var symptoms_dropdown_button = document.getElementById("symptoms_button");
    var symptoms_dropdown_content = document.getElementById("symptoms_content")

    if(age == '0-4')
    {
        symptoms_dropdown_button.innerHTML = 'Select an Option';
        symptoms_dropdown_content.innerHTML = '<a href="#" data-option="<= 2 days per week"><= 2 days per week</a> <a href="#" data-option="> 2 days per week"> > 2 days per week</a><a href="#" data-option="Throughout the day">Throughout the day</a><a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '5-11')
    {
        symptoms_dropdown_button.innerHTML = 'Select an Option';
        symptoms_dropdown_content.innerHTML = '<a href="#" data-option="<= 2 days per week but not more than once on each day"><= 2 days per week but not more than once on each day</a> <a href="#" data-option="> 2 days per week or multiple times on <= 2 days per week">> 2 days per week or multiple times on <= 2 days per week</a><a href="#" data-option="Throughout the day">Throughout the day</a><a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '12+')
    {
        symptoms_dropdown_button.innerHTML = 'Select an Option';
        symptoms_dropdown_content.innerHTML = '<a href="#" data-option="<= 2 days per week"><= 2 days per week</a> <a href="#" data-option="> 2 days per week"> > 2 days per week</a><a href="#" data-option="Throughout the day">Throughout the day</a><a href="#" data-option="Not applicable">Not applicable</a>';
    }

    var awakenings_dropdown_button = document.getElementById("awakenings_button");
    var awakenings_dropdown_content = document.getElementById("awakenings_content")

    if(age == '0-4')
    {
        awakenings_dropdown_button.innerHTML = 'Select an Option';
        awakenings_dropdown_content.innerHTML = '<a href="#" data-option="<= 1x per month"><= 1x per month</a> <a href="#" data-option="> 1x per month"> >= 1x per month</a><a href="#" data-option="> 1x per week"> > 1x per week</a><a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '5-11')
    {
        awakenings_dropdown_button.innerHTML = 'Select an Option';
        awakenings_dropdown_content.innerHTML = '<a href="#" data-option="<= 1x per month"><= 1x per month</a> <a href="#" data-option=">= 2x per month"> >= 2x per month</a> <a href="#" data-option=">= 2x per week"> >= 2x per week</a><a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '12+')
    {
        awakenings_dropdown_button.innerHTML = 'Select an Option';
        awakenings_dropdown_content.innerHTML = '<a href="#" data-option="<= 2x per month"><= 2x per month</a> <a href="#" data-option="1 - 3x per week">> 1 - 3x per week</a><a href="#" data-option=">= 4x per week"> >= 4x per week</a><a href="#" data-option="Not applicable">Not applicable</a>';
    }

    var awakenings_dropdown_button = document.getElementById("awakenings_button");
    var awakenings_dropdown_content = document.getElementById("awakenings_content")
}

var weight = 0;
var weightcount = 0;

function selectOptionSymptoms(option) {
    var dropdownButton = document.getElementById("symptoms_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("symptoms"); // Close the dropdown after selecting an option

    switch (option) {
        case '<= 2 days per week':
            if(age == '0-4' || age == '12+')
            {
                weightcount += 1;
            }
            break;
        case '< 2 days per week':
            if(age == '0-4' || age == '12+')
            {
                weight += 1;
                weightcount += 1;
            }
            break;
        case '<= 2 days per week but not more than once on each day':
            if(age == '5-11')
            {
                weightcount += 1;
            }
            break;
        case '> 2 days per week or multiple times on <= 2 days per week':
            if(age == '5-11')
            {
                weight += 1;
                weightcount += 1;
            }
            break;
        case '<= 2 days per week':
            if(age == '12+')
            {
                weightcount += 1;
            }
            break;
        case "Throughout the day":
            weight += 2;
            weightcount += 1;
            break;
        case "Not Applicable":
            break;
    }

}

function selectOptionAwakenings(option) {
    var dropdownButton = document.getElementById("awakenings_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("awakenings"); // Close the dropdown after selecting an option

    switch (option) {
        case '<= 1x per month':
            if(age == '0-4' || age == '5-11')
            {
                weightcount += 1;
            }
            break;
        case '> 1x per month':
            if(age == '0-4')
            {
                weight += 1;
                weightcount += 1;
            }
            break;
        case '> 1x per week':
            if(age == '0-4')
            {
                weight += 2;
                weightcount += 1;
            }
            break;
        case '>= 2x per month':
            if(age == '5-11')
            {
                weight += 1;
                weightcount += 1;
            }
            break;
        case '>= 2x per week':
            if(age == '5-11')
            {
                weight += 2;
                weightcount += 1;
            }
            break;
        case '<= 2x per month':
            if(age == '12+')
            {
                weightcount += 1;
            }
            break;
        case '1 - 3x per week':
            if(age == '12+')
            {
                weight += 1;
                weightcount += 1;
            }
            break;
        case '>= 4x per week':
            if(age == '12+')
            {
                weight += 2;
                weightcount += 1;
            }
            break;
        case "Not Applicable":
            break;
    }

}