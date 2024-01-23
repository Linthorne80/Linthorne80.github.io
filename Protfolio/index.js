document.addEventListener("DOMContentLoaded", function() {
    var dropdownButton = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");
  
    dropdownButton.addEventListener("click", function() {
      dropdownContent.classList.toggle("active");
    });
  
    dropdownContent.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent the click event from reaching the document
    });
  
    document.addEventListener("click", function() {
      dropdownContent.classList.remove("active"); // Close dropdown when clicking outside
    });
  });
  