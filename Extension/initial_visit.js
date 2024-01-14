document.addEventListener("DOMContentLoaded", function () {

    var ageButton = document.getElementById("age_button"); //copy lines 2-13 for every dropdown menu
    var ageContent = document.getElementById("age_content");

    ageButton.addEventListener("click", function(){
        toggleDropdown("age")
        event.preventDefault();
    });
    
    ageContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectOptionAge(event.target.dataset.option); //make a new function for each drop down menu
        }
    });

    var symptomsButton = document.getElementById("symptoms_button");
    var symptomsContent = document.getElementById("symptoms_content");

    symptomsButton.addEventListener("click", function(){
        toggleDropdown("symptoms")
    });
    
    symptomsContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            selectOptionSymptoms(event.target.dataset.option);
        }
    });

    var awakeningsButton = document.getElementById("awakenings_button");
    var awakeningsContent = document.getElementById("awakenings_content");

    awakeningsButton.addEventListener("click", function(){
        toggleDropdown("awakenings")
    });
    
    awakeningsContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            selectOptionAwakenings(event.target.dataset.option);
        }
    });

    var interferenceButton = document.getElementById("interference_button");
    var interferenceContent = document.getElementById("interference_content");

    interferenceButton.addEventListener("click", function(){
        toggleDropdown("interference")
    });
    
    interferenceContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            selectOptionInterference(event.target.dataset.option);
        }
    });


    var sabaButton = document.getElementById("saba_button");
    var sabaContent = document.getElementById("saba_content");

    sabaButton.addEventListener("click", function(){
        toggleDropdown("saba");
    });
    
    sabaContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            selectOptionSaba(event.target.dataset.option);
        }
    });

    var lungButton = document.getElementById("lung_button");
    var lungContent = document.getElementById("lung_content");

    lungButton.addEventListener("click", function(){
        toggleDropdown("lung");
    });
    
    lungContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            selectOptionSaba(event.target.dataset.option);
        }
    });


    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            var ageDropdown = document.getElementById("age"); //make a list of all dropdowns here and close all of them
            var symptomsDropdown = document.getElementById("symptoms");
            var awakeningsDropDown = document.getElementById("awakenings");
            var interferenceDropdown =  document.getElementById("interference");
            var sabaDropdown = document.getElementById("saba");
            var lungDropdown = document.getElementById("lung");
            ageDropdown.classList.remove("open"); //call the remove function for every single dropdown variable
            symptomsDropdown.classList.remove("open");
            awakeningsDropDown.classList.remove("open");
            interferenceDropdown.classList.remove("open");
            sabaDropdown.classList.remove("open");
            lungDropdown.classList.remove("open");
        }
    });

    var goBackButton = document.getElementById('goBackButton');
    
    if (goBackButton) {
        goBackButton.addEventListener('click', goBack);
    }

    function goBack() {
        window.history.back();
    }

    var submitButton = document.getElementById('submitButton');
    
    if (submitButton) {
        submitButton.addEventListener('click', submit);
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

    var symptoms_dropdown_button = document.getElementById("symptoms_button");
    var symptoms_dropdown_content = document.getElementById("symptoms_content");

    if(age == '0-4')
    {
        symptoms_dropdown_button.innerHTML = 'Select an Option';
        symptoms_dropdown_content.innerHTML = '<a href="#" data-option="&lt;= 2 days per week">&lt;= 2 days per week</a><a href="#" data-option="> 2 days per week">> 2 days per week</a><a href="#" data-option="Daily">Daily</a><a href="#" data-option="Throughout the day">Throughout the day</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '5-11')
    {
        symptoms_dropdown_button.innerHTML = 'Select an Option';
        symptoms_dropdown_content.innerHTML = '<a href="#" data-option="&lt;= 2 days per week">&lt;= 2 days per week</a><a href="#" data-option="> 2 days per week">> 2 days per week</a><a href="#" data-option="Daily">Daily</a><a href="#" data-option="Throughout the day">Throughout the day</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '12+')
    {
        symptoms_dropdown_button.innerHTML = 'Select an Option';
        symptoms_dropdown_content.innerHTML = '<a href="#" data-option="&lt;= 2 days per week">&lt;= 2 days per week</a><a href="#" data-option="> 2 days per week">> 2 days per week</a><a href="#" data-option="Daily">Daily</a><a href="#" data-option="Throughout the day">Throughout the day</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }

    var awakenings_dropdown_button = document.getElementById("awakenings_button");
    var awakenings_dropdown_content = document.getElementById("awakenings_content");

    if(age == '0-4')
    {
        awakenings_dropdown_button.innerHTML = 'Select an Option';
        awakenings_dropdown_content.innerHTML = '<a href="#" data-option="0 Times">0 Times</a> <a href="#" data-option="1-2 times per month">1-2 times per month</a><a href="#" data-option="3-4x per month">3-4x per month</a><a href="#" data-option="Over 1x per week">Over 1x per week</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '5-11')
    {
        awakenings_dropdown_button.innerHTML = 'Select an Option';
        awakenings_dropdown_content.innerHTML = '<a href="#" data-option="<= 2 times per month"><= 2 times per month</a> <a href="#" data-option="3-4x/month">3-4x/month</a><a href="#" data-option=">1x/week but not nightly">>1x/week but not nightly</a><a href="#" data-option="Often 7x/week">Often 7x/week</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '12+')
    {
        awakenings_dropdown_button.innerHTML = 'Select an Option';
        awakenings_dropdown_content.innerHTML = '<a href="#" data-option="<= 2 times per month"><= 2 times per month</a> <a href="#" data-option="3-4x/month">3-4x/month</a><a href="#" data-option=">1x/week but not nightly">>1x/week but not nightly</a><a href="#" data-option="Often 7x/week">Often 7x/week</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }

    var interference_dropdown_button = document.getElementById("interference_button");
    var interference_dropdown_content = document.getElementById("interference_content");

    if(age == '0-4')
    {
        interference_dropdown_button.innerHTML = 'Select an Option';
        interference_dropdown_content.innerHTML = '<a href="#" data-option="None">None</a> <a href="#" data-option="Minor Limitation">Minor Limitation</a><a href="#" data-option="Some Limitation">Some Limitation</a><a href="#" data-option="Extremely Limited">Extremely Limited</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '5-11')
    {
        interference_dropdown_button.innerHTML = 'Select an Option';
        interference_dropdown_content.innerHTML = '<a href="#" data-option="None">None</a> <a href="#" data-option="Minor Limitation">Minor Limitation</a><a href="#" data-option="Some Limitation">Some Limitation</a><a href="#" data-option="Extremely Limited">Extremely Limited</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '12+')
    {
        interference_dropdown_button.innerHTML = 'Select an Option';
        interference_dropdown_content.innerHTML = '<a href="#" data-option="None">None</a> <a href="#" data-option="Minor Limitation">Minor Limitation</a><a href="#" data-option="Some Limitation">Some Limitation</a><a href="#" data-option="Extremely Limited">Extremely Limited</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }

    var saba_dropdown_button = document.getElementById("saba_button");
    var saba_dropdown_content = document.getElementById("saba_content")

    saba_dropdown_button.innerHTML = 'Select an Option';
    saba_dropdown_content.innerHTML = '<a href="#" data-option="<= 2 days per week"><= 2 days per week</a> <a href="#" data-option="> 2 days per week">> 2 days per week</a><a href="#" data-option="Daily">Daily</a><a href="#" data-option="Several times per day">Several times per day</a> <a href="#" data-option="Not applicable">Not applicable</a>';

    var lung_dropdown_button = document.getElementById("lung_button");
    var lung_dropdown_content = document.getElementById("lung_content");

    if(age == '0-4')
    {
        lung_dropdown_button.innerHTML = 'Select an Option';
        lung_dropdown_content.innerHTML = '<a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '5-11')
    {
        lung_dropdown_button.innerHTML = 'Select an Option';
        lung_dropdown_content.innerHTML = '<a href="#" data-option="FEV1 > 80%, FVC > 85%">FEV1 > 80%, FVC > 85%</a> <a href="#" data-option="FEV1 > 80%, FVC > 80%">FEV1 > 80%, FVC > 80%</a> <a href="#" data-option="FEV1 = 60 - 80%, FVC = 75 - 80%">FEV1 = 60 - 80%, FVC = 75 - 80%</a><a href="#" data-option="FEV1 < 60%, FVC < 75%">FEV1 < 60%, FVC < 75%</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '12+')
    {
        lung_dropdown_button.innerHTML = 'Select an Option';
        lung_dropdown_content.innerHTML = '<a href="#" data-option="FEV1 > 80%, FVC is Normal">FEV1 > 80%, FVC is Normal</a> <a href="#" data-option="FEV1 = 60 - 80%, FVC is reduced 5%">FEV1 = 60 - 80%, FVC is reduced 5%</a><a href="#" data-option="FEV1 < 60%, FVC is reduced >5%">FEV1 < 60%, FVC is reduced >5%</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }
}

var symptomSeverity = -1;
var awakeningsSeverity = -1;
var interferenceSeverity = -1;
var sabaSeverity = -1;
var lungSeverity = -1;

function selectOptionSymptoms(option) {
    var dropdownButton = document.getElementById("symptoms_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("symptoms"); // Close the dropdown after selecting an option

    switch (option) {
        case '&lt;= 2 days per week':
            symptomSeverity = 0;
            break;
        case "> 2 days per week":
            symptomSeverity = 1
            break;
        case "Daily":
            symptomSeverity = 2;
            break;
        case "Throughout the day":
            symptomSeverity = 3;
            break;
        case "Not applicable":
            symptomSeverity = -1;
            break;
    }

}

function selectOptionAwakenings(option) {
    var dropdownButton = document.getElementById("awakenings_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("awakenings"); // Close the dropdown after selecting an option

    switch (option) {
        case '&lt;= 2 days per week':
            awakeningsSeverity = 0;
            break;
        case "<=2 times per month":
            awakeningsSeverity = 0;
            break;
        case "3-4x/month":
            awakeningsSeverity = 1;
            break;
        case "1x/week but not nightly":
            awakeningsSeverity = 2;
            break;

        case "Often 7x/week":
            awakeningsSeverity = 3;
            break;
        case "3-4x per month":
            awakeningsSeverity = 2;
            break;
        case "1-2 times per month":
            awakeningsSeverity= 1;
            break;
        case "Over 1x per week":
            awakeningsSeverity= 3;
            break;
        case "Not applicable":
            awakeningsSeverity = -1;
            break;
    }

}

function selectOptionInterference(option) {
    var dropdownButton = document.getElementById("interference_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("interference"); // Close the dropdown after selecting an option

    switch (option) {
        case 'None':
            interferenceSeverity= 0;
            break;
        case "Minor Limitation":
            interferenceSeverity= 1;
            break;
        case "Some Limitation":
            interferenceSeverity= 2;
            break;
        case "Extremely Limited":
            interferenceSeverity= 3;
            break;
        case "Not applicable":
            interferenceSeverity = -1;
    }

}

function selectOptionSaba(option) {
    var dropdownButton = document.getElementById("saba_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("saba"); // Close the dropdown after selecting an option

    switch (option) {
        case '<= 2 days per week':
            sabaSeverity= 0;
            break;
        case '> 2 days per week':
            sabaSeverity= 1;
            break;
        case 'Several times per day':
            sabaSeverity = 3;
            break;
        case "Daily":
            sabaSeverity= 2;
            break;
        case "Not applicable":
            sabaSeverity = -1;
            break;
    }

}

function selectOptionLung(option) {
    var dropdownButton = document.getElementById("lung_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("lung"); // Close the dropdown after selecting an option

    switch (option) {
        case 'FEV1 > 80%, FVC > 85%':
            if(age == '5-11')
            {
                lungSeverity = 0;
                break;
            }
        case 'FEV1 > 80%, FVC > 80%':
            if(age == '5-11')
            {
                lungSeverity = 1;
                break;
            }
        case 'FEV1 = 60 - 80%, FVC = 75 - 80%':
            if(age == '5-11')
            {
                lungSeverity = 2;
                break;
            }
        case 'FEV1 < 60%, FVC < 75%':
            if(age == '5-11')
            {
                lungSeverity = 3;
                break;
            }
        case 'FEV1 > 80%, FVC is Normal':
            if(age == '5-11')
            {
                lungSeverity = 0.5;
                break;
            }
        case 'FEV1 = 60 - 80%, FVC is reduced 5%':
            if(age == '5-11')
            {
                lungSeverity = 2;
                break;
            }
        case 'FEV1 < 60%, FVC is reduced >5%':
            if(age == '5-11')
            {
                lungSeverity = 3;
                break;
            }
        case "Not applicable":
            lungSeverity = -1;
            break;
    }

}

function submit()
{
    var message = "";

    var count = 0;

    var weight = 0;
    if(symptomSeverity > -1)
    {
        weight += symptomSeverity;
        count += 1;
    }
    if(awakeningsSeverity > -1)
    {
        weight += awakeningsSeverity;
        count += 1;
    }
    if(interferenceSeverity > -1)
    {
        weight += interferenceSeverity;
        count += 1;
    }
    if(sabaSeverity > -1)
    {
        weight += sabaSeverity;
        count += 1;
    }
    if(lungSeverity > -1)
    {
        weight += lungSeverity;
        count += 1;
    }

    severity = weight * 1.0 / count;

    message += "The patient in question has a severity rating of " + severity * 3.3333 + " on a scale from 0 to 10. ";

    if(count > 0)
    {

        if(severity <= 2.5)
        {
            message += "Step 1 is recommended. ";
        }
        else if(severity <= 5)
        {
            message += "Step 2 is recommended. ";

        }
        else if(severity <= 7.5)
        {
            if(age == '0-4' || age == '12+')
            {
                message += "Step 3 is recommended. ";
            }
            else if(age == '5-11')
            {
                message += "Step 3(Medium Dose ICS Option) is recommended. ";
            }

            message += "Consider a short course of oral systemic corticosteoroids. ";
        }
        else
        {
            if(age == '0-4')
            {
                message += "Step 3 is recommended. ";
            }
            else if(age == '5-11')
            {
                message += "Step 3(Medium-Dose ICS option) or Step 4 is recommended. ";
            }
            else if(age == '12+')
            {
                message += "Step 4 or 5 is recommended. ";
            }
        }

        message += "In 2 – 6 weeks, depending on severity, assess level of asthma control achieved and adjust therapy as needed. For children 0 – 4 years old, if no clear benefit is observed in 4 – 6 weeks, consider adjusting therapy or alternate diagnoses.";
    }
    else
    {
        message = "Not enough information. Please provide at least one point of context."
    }

    var text = document.getElementById("output-message");
    text.innerHTML = message;
}