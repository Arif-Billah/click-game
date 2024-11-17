// Write your code here
const stats = document.querySelector(".stats");

//let val = stats.textContent;
//alert(val);
const btnstart = document.querySelector("button[name=start]");
const btnclick = document.querySelector("button[name=click]");
let count = 0;
btnstart.addEventListener('click',()=>{
    count = 0;
    stats.textContent= count;
    btnclick.removeAttribute('disabled');
    startCounting();
});

const startCounting = ()=>{   
    
    setTimeout(()=>{
       
      if(isWin()){
          stats.textContent = "You Are Win!"
          btnclick.setAttribute('disabled',true);
      }else{
        stats.textContent = 'You Failed'
        btnclick.setAttribute('disabled',true);
      }
     
    
    },3000);
    //Counting();
}


    btnclick.addEventListener('click',()=>{
        
        count ++;
        stats.textContent= count;

    });


let winScore = 10;

const isWin = ()=>{
  if(count< winScore){
   
   return false;
  }else {
  
    return true;
  }
}
