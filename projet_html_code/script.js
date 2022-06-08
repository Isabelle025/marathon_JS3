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