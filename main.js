let minu = document.querySelector(".minu");
let images = document.querySelectorAll(".meal");
let prevImg = document.querySelectorAll(".slider .cont i")[0];
let nextImg = document.querySelectorAll(".slider .cont i")[1];
let currentMeal = 0;
let foodSliders = document.querySelectorAll(".slider .slide");
let currentSlide = 0;
let prevSl = document.querySelectorAll(".holder i")[0];
let nextSl = document.querySelectorAll(".holder i")[1];
let clients = document.querySelectorAll(".rate .box");
let bolets = document.querySelectorAll(".bolet span");
// main formating when we open the page
formatImg();
formatsliders();
formatClients();

// to format the minu
minu.addEventListener("click",function(){
    minu.classList.toggle("open");
    document.querySelector(".mor-links").classList.toggle("open");
    document.querySelector(".mor-links div").classList.toggle("open");
})
document.querySelectorAll(".mor-links div a").forEach(function(ele){
    ele.addEventListener("click",function(){
    document.querySelector(".mor-links").classList.toggle("open");
    document.querySelector(".mor-links div").classList.toggle("open");
    minu.classList.remove("open");
    })
})

//to orgnize the meals image slider
currentMeal = 0;
function formatImg(){
    for(let i = 0 ; i<images.length;i++){
        images[i].classList.remove("show");
    }
    images[currentMeal].classList.add("show");
    let imgNum = document.querySelector(".slider .num");
    imgNum.textContent = `0${currentMeal+1}`;
    localStorage.setItem("currentMeal",currentMeal);
}
prevImg.addEventListener("click",function(){
    --currentMeal;
    if(currentMeal < 0){
        currentMeal = images.length-1;
    }
    formatImg();
})
nextImg.addEventListener("click",function(){
    ++currentMeal;
        if(currentMeal > images.length-1){
        currentMeal = 0;
    }
    formatImg();
})

// to orgnize the food slides
function formatsliders(){
    // for(let i = 0 ; i<foodSliders.length;i++){
    //     foodSliders[i].classList.remove("move");
    // }
    // for(let i = 0 ; i<foodSliders.length;i++){
    //     if(foodSliders[i].classList.contains("active")){
    //        foodSliders[i].classList.add("move")
    //     }
    // }
    for(let i = 0 ; i<foodSliders.length;i++){
        foodSliders[i].classList.remove("active");
    }
    foodSliders[currentSlide].classList.add("active");

}
prevSl.addEventListener("click",function(){
    --currentSlide;
    if(currentSlide < 0){
        currentSlide = foodSliders.length-1;
    }
    formatsliders();
})
nextSl.addEventListener("click",function(){
    ++currentSlide;
    if(currentSlide > foodSliders.length-1){
        currentSlide = 0;
    }
    formatsliders();
})
// to orginaze the rate clirnts
bolets.forEach(function(ele,index){
    ele.addEventListener("click",function(){
        bolets.forEach(function(e){
            e.classList.remove("active");
        });
        ele.classList.add("active");
        clients.forEach(function(ele){
            ele.classList.remove("active");
        })
        clients[index].classList.add("active");
    })
})
function formatClients (){
bolets[0].classList.add("active");
clients[0].classList.add("active");
}


// format the auto move foe the meal photos
setInterval(function(){
    currentMeal++;
    if(currentMeal > images.length-1){
    currentMeal = 0;
    }
    formatImg();
},5000);