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

// hidding opacity frames in section 2.

var boxes = document.getElementsByClassName("image-box");

for (var i=0; i<boxes.length;i++){

    boxes[i].addEventListener("mouseover", function(){
        var opacityFrames = document.querySelector(".image-box").children;
        this.children[0].classList.toggle('invisibility');
    })

    boxes[i].addEventListener("mouseout", function(){
        var opacityFrames = document.querySelector(".image-box").children;
        this.children[0].classList.toggle('invisibility');
    })
}

// slider

var leftArrow = document.querySelector(".arrow-left");
var rightArrow = document.querySelector(".arrow-right");
var galleryList = document.querySelectorAll("ul.gallery li");

var indexOfPicture = 0;

galleryList[indexOfPicture].classList.toggle('visibility');

leftArrow.addEventListener("click", function (){

    galleryList[indexOfPicture].classList.toggle('visibility');
    indexOfPicture--;
    if (indexOfPicture < 0) {
        indexOfPicture = galleryList.length-1;
    }
    galleryList[indexOfPicture].classList.toggle('visibility');
});


rightArrow.addEventListener("click", function (){

    galleryList[indexOfPicture].classList.toggle('visibility');
    if (indexOfPicture === galleryList.length-1) {
        indexOfPicture = -1;
    }
    indexOfPicture++;
    galleryList[indexOfPicture].classList.toggle('visibility');
});

});
