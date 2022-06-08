const bouton = document.querySelector(".rules-btn");
const asideRules = document.querySelector("aside");
const closeRules = document.querySelector(".close-rules");//un point avant car une classe (comme en css)


bouton.addEventListener('click', function() 
{
   // asideRules.classList.add("aside-click");
   asideRules.style.opacity = 1;
    asideRules.style.zIndex = 1;   
  });
  
closeRules.addEventListener('click', function()
{
    //asideRules.classList.remove("aside-click");
    asideRules.style.opacity = 0;
    asideRules.style.zIndex = -1; 
}) 

const hands = document.querySelectorAll(".option-container");
const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const playerSelection = document.querySelector(".player-pick-text");
const houseSelection = document.querySelector(".house-pick-text");
const results = document.querySelector(".annouce-winner");

hands.forEach((hand) =>{
    hand.addEventListener('click', function(){
        
        let handSelected = hand;
        step1.style.opacity = 0;
        step2.style.opacity = 1;
        step2.style.transform = "scale(1, 1)";
        results.style.display = "none";
        //playerSelection.insertAdjacentElement("afterend",handSelected);//insère handSelected après la fin de playerSelection 
        playerSelection.nextElementSibling.replaceWith(handSelected);
    })
})