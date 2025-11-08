const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem")

const product = [
{
    id: 1,
    title: "Nike Air Force 1 Mid '07 LX",
    price: 6 + "," + 499,
    desc: 'Once upon a midnight dreary, this Air Force 1 looked extra eerie. Shadows crept from beneath the "AIR" while ghoulish green accents added Halloween flair. And that black leather upper with reflective-design coating … well, it lets others know they better beware. You get the idea.',

    colors: [
        {
            code: "black",
            img: "img/air.png",
        },
        { 
            code: "darkblue",
            img: "img/air2.png",
        },
    ]
},


]

let choosenProduct = product [0]



const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc")



menuItems.forEach((item, index)=>{
   item.addEventListener("click", ()=>{
    //change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;


  

    //assigning new colors
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;

         });
    });
});




currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});


currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor= "white";
            size.style.color= "black";
        });
        size.style.backgroundColor= "black";
        size.style.color= "white";

    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})