document.addEventListener("DOMContentLoaded", function () {
    // Get the trigger element by its class
    var tooltipTrigger = document.querySelector(".tooltip-trigger");

    // Get the tooltip element by its id
    var tooltip = document.getElementById("tooltip");

    // Add event listeners for mouseover and mouseout to the trigger element
    tooltipTrigger.addEventListener("mouseover", function () {
        // Set the tooltip content based on the data-tooltip attribute
        var tooltipContent = tooltipTrigger.getAttribute("data-tooltip");
        tooltip.textContent = tooltipContent;

        // Show the tooltip
        tooltip.style.display = "block";
    });

    tooltipTrigger.addEventListener("mouseout", function () {
        // Hide the tooltip on mouseout
        tooltip.style.display = "none";
    });
});
