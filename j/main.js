


const baseURL = 'i/';
const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const flowers = ['fl1.jpg', 'fl2.jpg', 'fl3.jpg', 'fl4.jpg'];
const paras = document.querySelector('.para');
let index = 0;

nxt.onclick = function(e){
  e.preventDefault();

  //write a conditional so that the images wrap back to the beginning image.
  index = index + 1;
  if(index >= flowers.length ) {
    index = 0;
  }

  slide.src = baseURL + flowers[index];
 
  console.log(index);
  paras.innerHTML =`Slide ${index+1}`;

  
}

//Add a previous button event listener
prev.onclick = function(e){
    e.preventDefault();
   
   //write a conditional so that the images wrap back to the beginning image.
    
    if( index <= 0){
      index = flowers.length ;
    }

    index =  index - 1;
    slide.src = baseURL + flowers[index];
    console.log(slide.src);
  
    paras.innerHTML =`Slide ${index+1}`;

}
  
