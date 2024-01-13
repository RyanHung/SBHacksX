import {openai, completion} from '../index.js';

document.addEventListener("DOMContentLoaded", function () {
    var treatmentButton = document.getElementById("treatment_button"); //copy lines 2-13 for every dropdown menu
    var treatmentContent = document.getElementById("treatment_content");

    treatmentButton.addEventListener("click", function(){
        toggleDropdown("treatment")
    });
    
    treatmentContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectOptionTreatment(event.target.dataset.option); //make a new function for each drop down menu
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            var treatmentDropdown = document.getElementById("treatment"); //make a list of all dropdowns here and close all of them
            treatmentDropdown.classList.remove("open"); //call the remove function for every single dropdown variable
        }
    });
});
function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.classList.toggle("open");

    var dropdownContent = document.getElementById(id + "_content");
    dropdownContent.style.width = dropdown.offsetWidth + "px";
}

function selectOptionTreatment(option) {
    var dropdownButton = document.getElementById("treatment_button"); //make sure id matches drop down menu
    dropdownButton.innerText = option;
    toggleDropdown("treatment"); // Close the dropdown after selecting an option

    switch (option) {
        case 'initial':
            // Redirect to initial treatment
            window.location.href = 'asthma_initial_visit.html';
            break;
        case 'following':
            // Redirect to following treatment
            window.location.href = 'asthma_following_visit.html';
            break;
        case 'stepwise':
            // Redirect to stepwise approach
            window.location.href = 'asthma_stepwise_approach.html';
            break;
        case 'dosage':
            // Redirect to dosages
            window.location.href = 'asthma_daily_dosage.html';
            break;
    }

}

document.getElementById("gptButton").addEventListener("click", askChatGPT);

async function askChatGPT() {
    // Get the user's question from the textarea
    const question = document.getElementById("question").value;
    const gptresponse = completion.choices[0];
    alert(`ChatGPT says: ${gptresponse}`);
}
