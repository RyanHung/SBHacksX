document.addEventListener("DOMContentLoaded", function () {
    var ageButton = document.getElementById("age_button"); //copy lines 2-13 for every dropdown menu
    var ageContent = document.getElementById("age_content");

    ageButton.addEventListener("click", function(){
        toggleDropdown("age");
    });
    
    ageContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
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
            event.preventDefault();
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
            event.preventDefault();
            selectOptionAwakenings(event.target.dataset.option);
        }
    });

    var interferenceButton = document.getElementById("interference_button");
    var interferenceContent = document.getElementById("interference_content");

    interferenceButton.addEventListener("click", function(){
        toggleDropdown("interference");
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
            selectOptionLung(event.target.dataset.option);
        }
    });

    var questionnaireButton = document.getElementById("questionnaire_button");
    var questionnaireContent = document.getElementById("questionnaire_content");

    questionnaireButton.addEventListener("click", function(){
        toggleDropdown("questionnaire");
    });
    
    questionnaireContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            selectOptionQuestionnaire(event.target.dataset.option);
        }
    });

    var exacerbationsButton = document.getElementById("exacerbations_button");
    var exacerbationsContent = document.getElementById("exacerbations_content");

    exacerbationsButton.addEventListener("click", function(){
        toggleDropdown("exacerbations");
    });
    
    exacerbationsContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            selectOptionExacerbations(event.target.dataset.option);
        }
    });


    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            var ageDropdown = document.getElementById("age"); //make a list of all dropdowns here and close all of them
            var symptomsDropdown = document.getElementById("symptoms");
            var awakeningsDropdown = document.getElementById("awakenings");
            var interferenceDropdown = document.getElementById("interference");
            var sabaDropdown = document.getElementById("saba");
            var lungDropdown = document.getElementById("lung");
            var questionnaireDropdown = document.getElementById("questionnaire");
            var exacerbationsDropdown = document.getElementById("exacerbations");
            ageDropdown.classList.remove("open"); //call the remove function for every single dropdown variable
            symptomsDropdown.classList.remove("open");
            awakeningsDropdown.classList.remove("open");
            interferenceDropdown.classList.remove("open");
            sabaDropdown.classList.remove("open");
            lungDropdown.classList.remove("open");
            questionnaireDropdown.classList.remove("open");
            exacerbationsDropdown.classList.remove("open");
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
        case '12 Years or Older':
            age = '12+';
            break;
    }

    agemodify()
}

function agemodify()
{
    var symptoms_dropdown_button = document.getElementById("symptoms_button");
    var symptoms_dropdown_content = document.getElementById("symptoms_content");

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
    var awakenings_dropdown_content = document.getElementById("awakenings_content");

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

    var interference_dropdown_button = document.getElementById("interference_button");
    var interference_dropdown_content = document.getElementById("interference_content");

    interference_dropdown_button.innerHTML = 'Select an Option';
    interference_dropdown_content.innerHTML = '<a href="#" data-option="None">None</a> <a href="#" data-option="Some limitation">Some limitation</a><a href="#" data-option="Extremely limited">Extremely limited</a><a href="#" data-option="Not applicable">Not applicable</a>';

    var saba_dropdown_button = document.getElementById("saba_button");
    var saba_dropdown_content = document.getElementById("saba_content");

    saba_dropdown_button.innerHTML = 'Select an Option';
    saba_dropdown_content.innerHTML = '<a href="#" data-option="<= 2 days per week"><= 2 days per week</a> <a href="#" data-option="> 2 days per week">> 2 days per week</a><a href="#" data-option="Several times per day">Several times per day</a><a href="#" data-option="Not applicable">Not applicable</a>';

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
        lung_dropdown_content.innerHTML = '<a href="#" data-option="FEV1 > 80%, FVC > 80%">FEV1 > 80%, FVC > 80%</a> <a href="#" data-option="FEV1 = 60 - 80%, FVC = 75 - 80%">FEV1 = 60 - 80%, FVC = 75 - 80%</a><a href="#" data-option="FEV1 < 60%, FVC < 75%">FEV1 < 60%, FVC < 75%</a><a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '12+')
    {
        lung_dropdown_button.innerHTML = 'Select an Option';
        lung_dropdown_content.innerHTML = '<a href="#" data-option="FEV1 > 80%">FEV1 > 80%</a> <a href="#" data-option="FEV1 = 60 - 80%"> FEV1 = 60 - 80%</a><a href="#" data-option="FEV1 < 60%">FEV1 < 60%</a><a href="#" data-option="Not applicable">Not applicable</a>';
    }

    var questionnaire_dropdown_button = document.getElementById("questionnaire_button");
    var questionnaire_dropdown_content = document.getElementById("questionnaire_content");

    if(age == '0-4')
    {
        questionnaire_dropdown_button.innerHTML = 'Select an Option';
        questionnaire_dropdown_content.innerHTML = '<a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '5-11')
    {
        questionnaire_dropdown_button.innerHTML = 'Select an Option';
        questionnaire_dropdown_content.innerHTML = '<a href="#" data-option="Not applicable">Not applicable</a>';
    }
    if(age == '12+')
    {
        questionnaire_dropdown_button.innerHTML = 'Select an Option';
        questionnaire_dropdown_content.innerHTML = '<a href="#" data-option="ATAQ = 0, ACQ <= 0.75, ACT >= 20">ATAQ = 0, ACQ <= 0.75, ACT >= 20</a> <a href="#" data-option="ATAQ = 1 - 2, ACQ >= 1.5, ACT = 16 - 19">ATAQ = 1 - 2, ACQ >= 1.5, ACT = 16 - 19</a> <a href = "#" data-option="ATAQ = 3 - 4, ACT <= 15">ATAQ = 3 - 4, ACT <= 15</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }

    var exacerbations_dropdown_button = document.getElementById("exacerbations_button");
    var exacerbations_dropdown_content = document.getElementById("exacerbations_content");

    if(age == '0-4')
    {
        exacerbations_dropdown_button.innerHTML = 'Select an Option';
        exacerbations_dropdown_content.innerHTML = '<a href="#" data-option="0 - 1/year">0 - 1/year</a> <a href="#" data-option="2 - 3/year">2 - 3/year</a> <a href="#" data-option="> 3/year">> 3/year</a> <a href="#" data-option="Not applicable">Not applicable</a>';
    }
    else if(age == '5-11')
    {
        exacerbations_dropdown_button.innerHTML = 'Select an Option';
        exacerbations_dropdown_content.innerHTML = '<a href="#" data-option="0 - 1/year">0 - 1/year</a> <a href="#" data-option=">= 2/year">>= 2/year</a> <a href="#" data-option="Not applicable">Not applicable</a>';

    }
    if(age == '12+')
    {
        exacerbations_dropdown_button.innerHTML = 'Select an Option';
        exacerbations_dropdown_content.innerHTML = '<a href="#" data-option="0 - 1/year">0 - 1/year</a> <a href="#" data-option=">= 2/year">>= 2/year</a> <a href="#" data-option="Not applicable">Not applicable</a>';    
    }

}

var symptomSeverity = -1;
var awakeningsSeverity = -1;
var interferenceSeverity = -1;
var sabaSeverity = -1;
var lungSeverity = -1;
var questionnaireSeverity = -1;
var exacerbationsSeverity = -1;

function selectOptionSymptoms(option) {
    var dropdownButton = document.getElementById("symptoms_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("symptoms"); // Close the dropdown after selecting an option

    switch (option) {
        case '<= 2 days per week':
            if(age == '0-4' || age == '12+')
            {
                symptomSeverity = 0;
            }
            break;
        case '< 2 days per week':
            if(age == '0-4' || age == '12+')
            {
                symptomSeverity = 1;
            }
            break;
        case '<= 2 days per week but not more than once on each day':
            if(age == '5-11')
            {
                symptomSeverity = 0;
            }
            break;
        case '> 2 days per week or multiple times on <= 2 days per week':
            if(age == '5-11')
            {
                symptomSeverity = 1;
            }
            break;
        case '<= 2 days per week':
            if(age == '12+')
            {
                symptomSeverity = 1;
            }
            break;
        case "Throughout the day":
            symptomSeverity = 2;
            break;
        case "Not Applicable":
            symptomSeverity = -1;
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
                awakeningsSeverity = 0;
            }
            break;
        case '> 1x per month':
            if(age == '0-4')
            {
                awakeningsSeverity = 1;
            }
            break;
        case '> 1x per week':
            if(age == '0-4')
            {
                awakeningsSeverity = 2;
            }
            break;
        case '>= 2x per month':
            if(age == '5-11')
            {
                awakeningsSeverity = 1;
            }
            break;
        case '>= 2x per week':
            if(age == '5-11')
            {
                awakeningsSeverity = 2;
            }
            break;
        case '<= 2x per month':
            if(age == '12+')
            {
                awakeningsSeverity = 0;
            }
            break;
        case '1 - 3x per week':
            if(age == '12+')
            {
                awakeningsSeverity = 1;
            }
            break;
        case '>= 4x per week':
            if(age == '12+')
            {
                awakeningsSeverity = 2;
            }
            break;
        case "Not Applicable":
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
            interferenceSeverity = 0;
            break;
        case 'Some limitation':
            interferenceSeverity = 1;
            break;
        case 'Extremely limited':
            interferenceSeverity = 2;
            break;
        case "Not Applicable":
            interferenceSeverity = -1;
            break;
    }

}

function selectOptionSaba(option) {
    var dropdownButton = document.getElementById("saba_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("saba"); // Close the dropdown after selecting an option

    switch (option) {
        case '<= 2 days per week':
            sabaSeverity = 0;
            break;
        case '> 2 days per week':
            sabaSeverity = 1;
            break;
        case 'Several times per day':
            sabaSeverity = 2;
            break;
        case "Not Applicable":
            sabaSeverity = -1;
            break;
    }

}

function selectOptionLung(option) {
    var dropdownButton = document.getElementById("lung_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("lung"); // Close the dropdown after selecting an option

    switch (option) {
        case 'FEV1 > 80%, FVC > 80%':
            if(age == '5-11')
            {
                lungSeverity = 0;
            }
            break;
        case 'FEV1 = 60 - 80%, FVC = 75 - 80%':
            if(age == '5-11')
            {
                lungSeverity = 1;
            }
            break;
        case 'FEV1 < 60%, FVC < 75%':
            if(age == '5-11')
            {
                lungSeverity = 2;
            }
            break;
        case 'FEV1 > 80%':
            if(age == '12+')
            {
                lungSeverity = 0;
            }
            break;

        case 'FEV1 = 60 - 80%':
            if(age == '12+')
            {
                lungSeverity = 1;
            }
            break;

        case 'FEV1 < 60%':
            if(age == '12+')
            {
                lungSeverity = 2;
            }
            break;

        case 'Not applicable':
            lungSeverity = -1;
            break;
    }

}

function selectOptionQuestionnaire(option) {
    var dropdownButton = document.getElementById("questionnaire_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("questionnaire"); // Close the dropdown after selecting an option

    switch (option) {
        case 'ATAQ = 0, ACQ <= 0.75, ACT >= 20':
            if(age == '12+')
            {
                questionnaireSeverity = 0;
            }
            break;
        case 'ATAQ = 1 - 2, ACQ >= 1.5, ACT = 16 - 19':
            if(age == '12+')
            {
                questionnaireSeverity = 1;
            }
            break;
        case 'ATAQ = 3 - 4, ACT <= 15':
            if(age == '12+')
            {
                questionnaireSeverity = 2;
            }
            break;
        case "Not Applicable":
            questionnaireSeverity = -1;
            break;
    }

}

function selectOptionExacerbations(option) {
    var dropdownButton = document.getElementById("exacerbations_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("exacerbations"); // Close the dropdown after selecting an option

    switch (option) {
        case '0 - 1/year':
            exacerbationsSeverity = 0;
            break;
        case '2 - 3/year':
            if(age == '0-4')
            {
                exacerbationsSeverity = 1;
            }
            break;
        case '> 3/year':
            if(age == '0-4')
            {
                exacerbationsSeverity = 2;
            }
            break;
        case '>= 2/year':
            if(age =='5-11' || age == '12+')
            {
                exacerbationsSeverity = 1.5;
            }
        case "Not Applicable":
            exacerbationsSeverity = -1;
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
    if(questionnaireSeverity > -1)
    {
        weight += questionnaireSeverity;
        count += 1;
    }
    if(exacerbationsSeverity > -1)
    {
        weight += exacerbationsSeverity;
        count += 1;
    }

    severity = weight * 1.0 / count;

    message += "The patient in question has a severity rating of " + (severity * 5).toFixed(2) + " on a scale from 0 to 10. ";

    if(count > 0)
    {

        if(severity <= 3.33)
        {
            message += "Maintain current step. Regular follow-up every 1-6 months. Consider step down if well controlled for at least 3 months. "
        }
        else if(severity <= 6.66)
        {
            if(age == '0-4')
            {
                message += "Step up 1 step. ";
            }
            else if(age == '5-11')
            {
                message += "Step up at least 1 step. ";
            }
            else if(age == '12+')
            {
                message += "Step up 1 step. ";
            }

            message += "Reevaluate in 2 - 6 weeks to achieve control. For children 0 - 4 years, if no clear benefit observed in 4 - 6 weeks, consider adjusting therapy or alternative diagnoses. ";

        }
        else
        {
            message += "Consider short course of oral cortisteroids. Step up 1 - 2 steps. Reevaluate in 2 weeks to achieve control. ";
        }

        if(severity > 0.66)
        {
            message += "Before step up in treatment, review adherence to medication, inhaler technique, and environmental control. If alternative treatment was used, discontinue and use preferred treatment for that step. For side effects, consider alternative treatment options. ";
        }
    }
    else
    {
        message = "Not enough information. Please provide at least one point of context."
    }

    var text = document.getElementById("output-message");
    text.innerHTML = message;
    text.style.visibility = 'visible';
}