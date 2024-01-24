document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.dropbtn');
  const menuContent = document.querySelector('.dropdown-content');

  menuButton.addEventListener('click', function () {
      menuContent.classList.toggle('show');
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function (event) {
      if (!event.target.matches('.dropbtn')) {
          if (menuContent.classList.contains('show')) {
              menuContent.classList.remove('show');
          }
      }
  });
});

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}
