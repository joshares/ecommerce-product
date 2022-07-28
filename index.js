'use strict';
const smallOne = document.querySelectorAll('.one')
const smallTwo = document.querySelectorAll('.two')
const smallThree = document.querySelectorAll('.three')
const smallFour = document.querySelectorAll('.four')
const bigImage = document.querySelectorAll('.big-image')
const up = document.querySelector('.up-1')

const emptyCart = document.querySelector('.empty-cart')
const smallButt = document.querySelector('.small-butt')
const smallDivTwo = document.querySelector('.small-div2')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const button = document.querySelector('.buttonx')
const smallDiv = document.querySelector('.small-div')
const zero = document.querySelector('.zero')
const buttonValue = document.querySelectorAll('.button-value')
const cart = document.querySelector('.cart-1')
const overlay = document.querySelector('.overlay')
const result = document.querySelector('.result')
const clear = document.querySelector('.clear')
console.log(buttonValue)

const main = document.querySelector('.main')
const hiddenPart = document.querySelector('.div-hide')
const next = document.querySelectorAll('.next')
const previous = document.querySelectorAll('.previous')
const close = document.querySelector('.close')
const bigImg = document.querySelectorAll('.big-img')
const del = document.querySelector('.delete')
const menu = document.querySelector('.menu')
const closeTwo = document.querySelector('.close-2')
const half = document.querySelector('.half')
console.log( menu, closeTwo)

closeTwo.addEventListener('click',function(){
  half.style.display = 'none'
  overlay.classList.toggle('hidden')
  console.log('no')
})

menu.addEventListener('click', function(){
   half.style.display = 'block'
   overlay.classList.toggle('hidden')
   console.log('yes')
  //  bigImg.style.display = 'block'
  })

const images = [
  '/images/image-product-1.jpg',
  '/images/image-product-2.jpg',
  '/images/image-product-3.jpg',
  '/images/image-product-4.jpg'
]
const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;

for(const nex of next){
  nex.addEventListener('click',() =>{
  for (const img of bigImg){
    currentImage++;
  
     if(currentImage > lastImage){
       currentImage = 0;
     }
    img.src = images[currentImage]
  }
})
}
for(const prev of previous){
  prev.addEventListener('click',() =>{
   for (const img of bigImg){
    currentImage--;
  
     if(currentImage < 0){
       currentImage = 3;
     }
    img.src = images[currentImage]
  }

})
}

for (let i = 0; i < smallOne.length; i++){
 smallOne[i].addEventListener('click',function(){
 for (const img of bigImage){
  img.src = './images/image-product-1.jpg'
 console.log('yes')
 }
})

}
for (let i = 0; i < smallTwo.length; i++){
 smallTwo[i].addEventListener('click',function(){
 for (const img of bigImage){
  img.src = './images/image-product-2.jpg'
 console.log('yes')
 }
})

}
for (let i = 0; i < smallThree.length; i++){
 smallThree[i].addEventListener('click',function(){
 for (const img of bigImage){
  img.src = './images/image-product-3.jpg'
 console.log('yes')
 }
})

}
for (let i = 0; i < smallFour.length; i++){
 smallFour[i].addEventListener('click',function(){
 for (const img of bigImage){
  img.src = './images/image-product-4.jpg'
 console.log('yes')
 }
})

}

 for (let i = 0; i < bigImage.length; i++) {
  bigImage[i].addEventListener('click', function(){
   hiddenPart.classList.toggle('hidden')
   overlay.classList.toggle('hidden')
  //  bigImg.style.display = 'block'
  })
 }

// next.addEventListener('click',function() {
// })
close.addEventListener('click', function() {
 hiddenPart.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
})

// let count = 1
plus.addEventListener('click', function() {

 fixTwo()
  
})
minus.addEventListener('click', function() {
  
   fix()
})

button.addEventListener('click', function(){
 zero.classList.toggle('hidden')
})

cart.addEventListener('click',function(){

 
//for(const button of buttonValue){
  smallDiv.classList.toggle('hidden')
  clear.classList.toggle('hidden')
  // console.log(sum)
  // }
// })


// const fix = function(){
//   for(const button of buttonValue){
//     const sum = button.textContent

//   }
 })

 
  const fix = function(){
    for(const button of buttonValue){
   button.textContent--
    const sum = button.textContent * 125
    result.textContent = `$${sum} `
  }
    for(const button of buttonValue){
      if(button.textContent < 1){
        emptyCart.classList.remove('hidden')
         smallDivTwo.classList.add('hidden')
         smallButt.classList.add('hidden')
        // console.log(clear)
      }else if (button.textContent >= 1) {
        // console.log('better')
        emptyCart.classList.add('hidden')
        smallDivTwo.classList.remove('hidden')
        smallButt.classList.remove('hidden')
      }
    }
   }
  fix()

  const fixTwo = function(){
console.log( smallDivTwo)
    for(const button of buttonValue){
   button.textContent++
   const sum = button.textContent * 125
    result.textContent = `$${sum} `
    
  }
    
    for(const button of buttonValue){
      if(button.textContent < 1){
       emptyCart.classList.remove('hidden')
      smallDivTwo.classList.add('hidden')
         smallButt.classList.add('hidden')
        // console.log(clear)
      }else if (button.textContent >= 1) {
        emptyCart.classList.add('hidden')
        // console.log('better')
        smallDivTwo.classList.remove('hidden')
        smallButt.classList.remove('hidden')
      }
    }
   }
   fixTwo()

  //  
