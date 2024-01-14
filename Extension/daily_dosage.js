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

    var drugButton = document.getElementById("drug_button"); //copy lines 2-13 for every dropdown menu
    var drugContent = document.getElementById("drug_content");

    drugButton.addEventListener("click", function(){
        toggleDropdown("drug")
    });
    
    drugContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            selectOptionDrug(event.target.dataset.option); //make a new function for each drop down menu
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            var ageDropdown = document.getElementById("age"); //make a list of all dropdowns here and close all of them
            var drugDropdown = document.getElementById("drug");
            ageDropdown.classList.remove("open"); //call the remove function for every single dropdown variable
            drugDropdown.classList.remove("open");
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
    var drug_dropdown_button = document.getElementById("drug_button");
    var drug_dropdown_content = document.getElementById("drug_content");

    if(age == '0-4')
    {
        drug_dropdown_button.innerHTML = 'Select an Option';
        drug_dropdown_content.innerHTML = '<a href="#" data-option="Budesonide Nebules">Budesonide Nebules</a>  <a href="#" data-option="Fluticasone MDI">Fluticasone MDI</a>';
    }
    else if(age == '5-11')
    {
        drug_dropdown_button.innerHTML = 'Select an Option';
        drug_dropdown_content.innerHTML = '<a href="#" data-option="Beclomethasone MDI">Beclomethasone MDI</a>  <a href="#" data-option="Budesonide DP">Budesonide DP</a> <a href="#" data-option="Budesonide Nebules">Budesonide Nebules</a> <a href="#" data-option="Ciclesonide MDI">Ciclesonide MDI</a> <a href="#" data-option="Flunisolide MDI">Flunisolide MDI</a> <a href="#" data-option="Fluticasone MDI">Fluticasone MDI</a> <a href="#" data-option="Fluticasone DPI">Fluticasone DPI</a> <a href="#" data-option="Mometasone DPI">Mometasone DPI</a>';
    }
    else if(age == '12+')
    {
        drug_dropdown_button.innerHTML = 'Select an Option';
        drug_dropdown_content.innerHTML = '<a href="#" data-option="Beclomethasone MDI">Beclomethasone MDI</a>  <a href="#" data-option="Budesonide DP">Budesonide DP</a> <a href="#" data-option="Ciclesonide MDI">Ciclesonide MDI</a> <a href="#" data-option="Flunisolide MDI">Flunisolide MDI</a> <a href="#" data-option="Fluticasone MDI">Fluticasone MDI</a> <a href="#" data-option="Fluticasone DPI">Fluticasone DPI</a> <a href="#" data-option="Mometasone DPI">Mometasone DPI</a>';
    }
}

function selectOptionDrug(option) {
    var dropdownButton = document.getElementById("drug_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("drug"); // Close the dropdown after selecting an option

    lowmessage = "";
    medmessage = "";
    highmessage = "";

    switch (option) {
        case "Beclomethasone MDI":
            if(age == '5-11')
            {
                lowmessage += "Low: 80 - 160 mcg(1 - 2 40 mcg puffs 2x per day or 1 80 mcg puff 2x per day).";
                medmessage += "Med: > 160 - 320 mcg(3 - 4 40 mcg puffs 2x per day or 2 80 mcg puffs 2x per day).";
                highmessage += "High: > 320 mcg(>= 3 80 mcg puffs 2x per day.";
            }
            else if(age == '12+')
            {
                lowmessage += "Low: 80 - 240 mcg(1 - 3 40 mcg puffs 2x per day or 1 80 mcg puff in the am and 1 8p mcg puff in the pm).";
                medmessage += "Med: > 240 - 480 mcg(4 - 6 40 mcg puffs 2x per day or 2 - 3 puffs 2x per day).";
                highmessage += "High: > 480 mcg(>= 4 puffs 2x per day).";
            }
            break;
        case "Budesonide DPI":
            if(age == '5-11')
            {
                lowmessage += "Low: 180 - 360 mcg(1 - 2 90 mcg inhales 2x per day).";
                medmessage += "Med: > 360 - 720 mcg(3 - 4 90 mcg inhales 2x per day or 2 180 mcg inhles 2x per day).";
                highmessage += "High: > 720 mcg(>= 3 180 mcg inhales 2x per day).";
            }
            else if(age == '12+')
            {
                lowmessage += "Low: 180 - 540 mcg(1 - 3 90 mcg inhales 2x per day or 1 180 mcg puff am and 2 180 mcg puffs pm).";
                medmessage += "Med: > 540 - 1080 mcg(2 - 3 180 mcg inhales 2x per day).";
                highmessage += "High: > 1080 mcg(>= 4 inhales 2x per day).";
            }
        case "Budesonide Nebules":
            if(age == '0-4')
            {
                lowmessage += "Low: 0.25 - 0.5 mg(1 - 2 0.25 mg nebs per day or 1 0.5 mg neb per day).";
                medmessage += "Med: > 0.5 - 1.0 mg(2 0.5 mg nebs per day or 1 1.0 mg neb per day).";
                highmessage += "High: > 1.0 mg(3 0.5 mg nebs per day or 2 1.0 mg nebs per day).";
            }
            else if(age == '5-11')
            {
                lowmessage += "Low: 0.5 mg(1 0.25 mg neb 2x per day or 1 0.5 mg neb per day).";
                medmessage += "Med: 1.0 mg(1 0.5 mg neb 2x per day or 1 1.0 mg neb per day).";
                highmessage += "High: 2.0 mg(1 1.0 mg neb 2x per day).";
            }
        case "Ciclesonide MDI":
            if(age == '5-11')
            {
                lowmessage += "Low: 80 - 160 mcg(1 - 2 80 mcg puffs per day or 1 160 mcg puff per day).";
                medmessage += "Med: > 160 - 320 mcg(1 80 mcg puff am and 2 80 mcg puffs pm per day or 1 160 mcg puff 2x per day).";
                highmessage += "High: > 320 mcg(>= 3 80 mcg puffs 2x per day or >= 2 160 mcg puffs 2x per day).";
            }
            else if(age == '12+')
            {
                lowmessage += "Low: 160 - 320 mcg(1 - 2 80 mcg puffs 2x per day).";
                medmessage += "Med: > 320 - 640 mcg(3 - 4 80 mcg puffs 2x per day or 2 160 mcg puffs 2x per day).";
                highmessage += "High: > 640 mcg(>= 3 160 mcg puffs 2x per day).";
            }
        case "Flunisolide MDI":
            if(age == '5-11')
            {
                lowmessage += "Low: 160 mcg(1 80 mcg puff 2x per day).";
                medmessage += "Med: 320-480 mcg(2-3 puffs 2x/day).";
                highmessage += "High: >= 480 mcg(>= 4 puffs 2x/day";
            }
            else if(age == '12+') 
            {
                
            }
    }
}