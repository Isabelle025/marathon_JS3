let score = 0;
let scoreText = document.querySelector(".score-value");
scoreText.textContent = localStorage.getItem("scoreValue");

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

let handsArray = Array.from(hands) // convertit le nodeList du querySelectorAll en tableau
handsArray.slice(0, 3).forEach((hand) =>{
    hand.addEventListener('click', function(){
        
        // let handSelected = hand;
        step1.classList.add("step-1-minimize");
        step2.classList.add("step-2-minimizer");
            // step1.style.opacity = 0;
            // step2.style.opacity = 1;
            // step2.style.transform = "scale(1, 1)";
            //results.style.display = "none";
            //playerSelection.insertAdjacentElement("afterend",handSelected);//insère handSelected après la fin de playerSelection 
        // playerSelection.nextElementSibling.replaceWith(handSelected);

        /* player */
        let playerSelectedColor = hand.classList[1] // on récupère la seconde classe de hand
        playerSelection.nextElementSibling.classList.remove("replace");
        playerSelection.nextElementSibling.classList.add(playerSelectedColor);

        const div2 = document.createElement("div");//création d'une div

        div2.classList.add("option");//ajouter la classe option à la div
        playerSelection.nextElementSibling.append(div2);//on insère la div en tant qu'enfant du frère qui suit houseSelection

        var img = document.createElement("img"); //on crée une image
        img.setAttribute("alt", "option"); //on ajoute un attribut alt
        img.setAttribute("src", "icon-"+playerSelectedColor+".svg");  //on ajoute un attribut src
        div2.append(img);/*insertion image en tant qu'enfant de la div*/
        /* Fin player*/
        /* House */
        
        const arrayHand = ['scissors', 'rock', 'paper']; //on crée un tableau

        let houseSelected = Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) +1)) + Math.ceil(0);
        let houseSelectedColor = arrayHand[houseSelected]; //on sélectionne le nom en fonction du rang tiré
        houseSelection.nextElementSibling.classList.remove("replace");
        houseSelection.nextElementSibling.classList.add(houseSelectedColor);

        const div = document.createElement("div");//création d'une div

        div.classList.add("option");//ajouter la classe option à la div
        houseSelection.nextElementSibling.append(div);//on insère la div en tant qu'enfant du frère qui suit houseSelection

        var img = document.createElement("img");
        img.setAttribute("alt", "option");
        img.setAttribute("src", "icon-"+houseSelectedColor+".svg");
        div.append(img);/*insertion im  ge en tant qu'enfant dela div*/
        /* Fin house */
        /* Résultats gagnants */
        let comparerResult = document.querySelector(".annouce-winner-text"); //on sélectionne l'annonce
        let comparerResultText = comparer(playerSelectedColor, houseSelectedColor); //on lance la fonction comparer et on affecte le résultat dans la variable comparerResultText
        comparerResult.textContent = comparerResultText; //on insère le résultat dans comparerResult
        /* Fin résultats gagnants */
        /* score */
        if (comparerResultText == "YOU WIN"){
            score=score+1
        }else if (comparerResultText == "YOU LOSE"){
            score=score-1
        }
        localStorage.setItem("scoreValue", score) //on crée l'élement scoreValue dans le localStorage et on affecte le score

        let scoreText = document.querySelector(".score-value");
        scoreText.textContent = localStorage.getItem("scoreValue"); //on insère le localStorage dans scoreText
        /* Fin score */
        /* bouton play-again */
        const playAgain = document.querySelector(".play-again-btn");
        playAgain.addEventListener('click', function(){
            playerSelection.nextElementSibling.classList.remove(playerSelectedColor);
            if(playerSelection.nextElementSibling.firstChild){
                playerSelection.nextElementSibling.removeChild(playerSelection.nextElementSibling.firstChild);
            }
            houseSelection.nextElementSibling.classList.remove(houseSelectedColor);
            if (houseSelection.nextElementSibling.firstChild){
                houseSelection.nextElementSibling.removeChild(houseSelection.nextElementSibling.firstChild);
            }
            step1.classList.remove("step-1-minimize");
            step2.classList.remove("step-2-minimizer");
        })



    })
})

function comparer(choix1, choix2) {
    if (choix1 === choix2) {
      return 'EQUAL';
    } else if (choix1 === 'rock') {
      if (choix2 === 'scissors') {
        return 'YOU WIN';
      } else if (choix2 === 'paper') {
        return 'YOU LOSE';
      }
    } else if (choix1 === 'paper') {
      if (choix2 === 'rock') {
        return 'YOU WIN';
      } else if (choix2 === 'scissors') {
        return 'YOU LOSE';
      }
    } else if (choix1 === 'scissors') {
      if (choix2 === 'rock') {
        return 'YOU LOSE';
      } else if (choix2 === 'paper') {
        return 'YOU WIN';
      }
    }
  }

  