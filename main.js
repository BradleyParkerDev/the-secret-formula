//Alert Form
let alertForm = document.querySelector('#alertForm');
let alertInput = document.querySelector('#alertInput');

alertForm.addEventListener('submit', function(event){
    event.preventDefault();
    alert(alertInput.value);
    alertInput.value = '';
    
})


//Sandwhich Form
let sandwichForm = document.querySelector('#sandwichForm');
let ingredients = document.querySelectorAll('#sandwichForm .ingredients');

sandwichForm.addEventListener('submit', function(event){
    event.preventDefault();
    let myIngredients =[];
    let str1 = "Your sandwhich contains: "
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
            myIngredients.push(ingredients[i].id)
        } 
    }
    let str2 = myIngredients.join(", ")
    let str3 = `${str1}${str2}.`
    alert(str3);

    for(let i = 0; i < ingredients.length; i++){
        ingredients[i].checked = false;
    }

})


//Haircut Scheduler
let hairCutForm = document.querySelector('#haircutScheduler');
let hairCutDate = document.querySelector('#date');
let hairCutter = document.querySelector('#hairCutter');

let hairLengthLabel = document.querySelector('#hairLengthLabel');
hairLengthLabel.style.fontWeight ="bold";
//hairLengthLabel.style.textDecoration ="underline";

hairCutForm.addEventListener('submit', function(event){
    event.preventDefault();

})
