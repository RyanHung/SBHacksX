document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class 'tooltip-trigger'
    var tooltipTriggers = document.querySelectorAll(".tooltip-trigger");

    // Iterate through each tooltip trigger element
    tooltipTriggers.forEach(function (trigger) {
        // Get the corresponding tooltip element by its ID
        var tooltipId = trigger.getAttribute("data-tooltip-id");
        var tooltip = document.getElementById(tooltipId);

        // Add event listeners for mouseover and mouseout to the trigger element
        trigger.addEventListener("mouseover", function () {
            // Set the tooltip content based on the data-tooltip attribute
            var tooltipContent = trigger.getAttribute("data-tooltip");
            tooltip.textContent = tooltipContent;

            // Show the tooltip
            tooltip.style.display = "block";
        });

        trigger.addEventListener("mouseout", function () {
            // Hide the tooltip on mouseout
            tooltip.style.display = "none";
        });
    });
});
