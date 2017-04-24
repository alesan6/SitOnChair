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

// application dropdown lists - hide&visible

var arrowBtn1 = document.getElementById("arrow1");
var typeList1 = document.getElementById("panel1");
var clickCounter1 = 0;
var arrowBtn2 = document.getElementById("arrow2");
var typeList2 = document.getElementById("panel2");
var clickCounter2 = 0;
var arrowBtn3 = document.getElementById("arrow3");
var typeList3 = document.getElementById("panel3");
var clickCounter3 = 0;
var sectionApp = document.querySelector(".application");


arrowBtn1.addEventListener("click", function (){
    clickCounter2 += 1;

    if (clickCounter2 %2 !==0) {
        typeList1.style.visibility="visible";
    } else {
        typeList1.style.visibility="hidden";
    }
});
arrowBtn2.addEventListener("click", function (){
    clickCounter2 += 1;

    if (clickCounter2 %2 !==0) {
        typeList2.style.visibility="visible";
    } else {
        typeList2.style.visibility="hidden";
    }
});
arrowBtn3.addEventListener("click", function (){
    clickCounter3 += 1;

    if (clickCounter3 %2 !==0) {
        typeList3.style.visibility="visible";
    } else {
        typeList3.style.visibility="hidden";
    }
});
// sectionApp.addEventListener("click", function (){
//     if (typeList1.style.visibility="visible") {
//     typeList1.style.visibility="hidden";
//     }
//     // typeList2.style.visibility="hidden";
//     // typeList3.style.visibility="hidden";
// });


//calculator

var panelLeftTitle = document.querySelector(".panel_left .title");
var panelLeftColor = document.querySelector(".panel_left .color");
var panelLeftPattern = document.querySelector(".panel_left .pattern");
var panelLeftTransport = document.querySelector(".panel_left .transport");
var panelRightTitleValue = document.querySelector(".panel_right .valueRight");
var panelRightColorValue = document.querySelector(".panel_right .color");
var panelRightPatternValue = document.querySelector(".panel_right .pattern");
var panelRightransportValue = document.querySelector(".panel_right .transport");
var checkTransport = document.querySelector("#transport");
var sumElement = document.querySelector(".sum strong");


function calculateSum() {
    var summary = 0;
    var sumArray = [parseInt(panelRightTitleValue.innerHTML), parseInt(panelRightColorValue.innerHTML),
        parseInt(panelRightPatternValue.innerHTML), parseInt(panelRightransportValue.innerHTML)];

    for (var i = 0; i < sumArray.length; i++) {
        if (!isNaN(sumArray[i])) {
            summary += sumArray[i]
        }
        sumElement.innerHTML = summary;
    }
}

for (var i = 0; i < typeList1.children.length; i++) {
    typeList1.children[i].addEventListener('click', function() {
        panelLeftTitle.innerHTML = this.innerHTML;
        panelRightTitleValue.innerHTML = this.dataset.price;
        calculateSum();
    });
}

for (var i = 0; i < typeList2.children.length; i++) {
    typeList2.children[i].addEventListener('click', function() {
        panelLeftColor.innerHTML = this.innerHTML;
        panelRightColorValue.innerHTML = this.dataset.color;
        calculateSum();
    });
}

for (var i = 0; i < typeList3.children.length; i++) {
    typeList3.children[i].addEventListener('click', function() {
        panelLeftPattern.innerHTML = this.innerHTML;
        panelRightPatternValue.innerHTML = this.dataset.pattern;
        calculateSum();
    });
}

checkTransport.addEventListener('click', function() {
    if (checkTransport.checked == true) {
        panelLeftTransport.innerHTML = this.nextElementSibling.innerHTML;
        panelRightransportValue.innerHTML = this.dataset.transportPrice;
    } else {
        panelLeftTransport.innerHTML = "";
        panelRightransportValue.innerHTML = "";
    }
    calculateSum();
});

});
