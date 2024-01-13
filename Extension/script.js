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

  // Replace 'YOUR_API_KEY' with your actual API key
  const apiKey = "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";

  // Check if the question is not empty
  if (question.trim() !== "") {
    try {
    // Make an HTTP request to the ChatGPT API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        messages: [
            {
                role: "assistant", content: "You are a helpful assistant providing medical advice for patients asking for help"
            },
            {
                role: 'user', content: question
            }
        ]
      })
    });

    if (!response.ok) {
        throw new Error('Request failed');
    }
    const data = await response.json();

    // Handle the response from ChatGPT
    const chatGPTResponse = data.choices[0].message.content;

    // Display the response in an alert for simplicity (you can customize this)
    alert(`ChatGPT says: ${chatGPTResponse}`);
    }
    catch(error) {
      console.error('Error:', error);
      alert('An error occurred while contacting ChatGPT. Please try again.');
    }
  } else {
    alert('Please enter a question before asking ChatGPT.');
  }
}
