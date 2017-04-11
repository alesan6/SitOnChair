document.addEventListener("DOMContentLoaded", function(){

// navigation dropdown menu
    var navDropdown = document.querySelector(".submenu");
    console.log(navDropdown);
    var subcontent = document.getElementById("subcontent");
    navDropdown.classList.add("invisibility");

    subcontent.addEventListener("mouseover", function() {

        navDropdown.classList.toggle('invisibility');

    });

    subcontent.addEventListener("mouseout", function() {
        navDropdown.classList.toggle('invisibility');

    });

// hidding opacity frame in section 2.


});
