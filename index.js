const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
 let myimg1=document.querySelector('.image')
 let i=0;
 myimg1.src=images[i];
 let button1 = document.querySelector('.nextsidebar')
    button1.addEventListener("click", function()
    {           
        i++
         if (i === images.length)
         {
            i = 0;
         }       
      myimg1.src = images[i]
    } )
let button2 = document.querySelector('.prevsidebar')
    button2.addEventListener("click", function()
    {  
        if(i>0)
        {    
      myimg1.src = images[--i]
         }
      } )
let button0 = document.querySelector('#button-0')
    button0.addEventListener('click',function()
    {
      myimg1.src=images[0]
   } )
let button0_1 = document.querySelector('#button-1')
    button0_1.addEventListener('click',function(){
      myimg1.src=images[1]
   } )
let button0_2 = document.querySelector('#button-2')
    button0_2.addEventListener('click',function(){
      myimg1.src=images[2]
   } )
let button0_3 = document.querySelector('#button-3')
    button0_3.addEventListener('click',function(){
      myimg1.src=images[3]
   } )
let button0_4 = document.querySelector('#button-4')
    button0_4.addEventListener('click',function(){
      myimg1.src=images[4]
   } )
let button0_5 = document.querySelector('#button-5')
    button0_5.addEventListener('click',function(){
      myimg1.src=images[5]
      console.log(i)
      i=-1;
      console.log(i)
      
   } )
   
 /* Part of the challenge and fun of this assignment is that you get to solve the problem in your own way. That said, here are some helpful hints to get you started in your planning.

You will need some way to keep track of what 
image is currently showing. The easiest way to do this is 
probably just keeping a variable that tracks 
the array index of the current image.
Start with the first image showing by default. 
This is a great first task to tackle.
When you want to reference an element on the page,
 look at its attributes and find one you can use to 
 select it with querySelector.
Each of the → buttons and '○' buttons will need a click 
event listener added to them. We recommend putting in a 
console.log() statement just to ensure each click is firing 
correctly before moving on.
The → buttons either advance the current index or back it 
up by one. Make sure when you're adding or subtracting 
from your current index that it doesn't go below zero 
or outside the bounds of the array!
The '○' buttons jump straight to an index in the array.
 Remember, array indexes start at 0, not 1! 
 Therefore, your first '○' button should set the image to 
 the 0 index of the array in order to display the first 
 image.When you want to do something to multiple elements,
  you can select them as an array with querySelectorAll 
  and then loop over the array. This is a solid strategy
   for setting the '●' buttons back to '○'.
*/