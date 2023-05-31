document.addEventListener("DOMContentLoaded", function() {
    
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
   
    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
  
        
        var dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('show');
      });
    });
  
    
    document.addEventListener("click", function(event) {
      if (!event.target.classList.contains('dropdown-toggle')) {
        var openDropdownMenus = document.querySelectorAll('.dropdown-menu.show');
        openDropdownMenus.forEach(function(menu) {
          menu.classList.remove('show');
        });
      }
    });
  });