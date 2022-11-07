let alertForm = document.querySelector('#alertForm');
let alertInput = document.querySelector('#alertInput');

alertForm.addEventListener('submit', function(event){
    event.preventDefault();
    alert(alertInput.value);
    alertInput.value = '';
    
})

let sandwichForm = document.querySelector('#sandwichForm');

let ingredients = document.querySelectorAll('#sandwichForm .ingredients');
// for(let item of ingredients){
//     console.log(item.id);
// }
sandwichForm.addEventListener('submit', function(event){
    event.preventDefault();
    let myIngredients =[];
    let str1 = "Your sandwhich contains: "
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
            myIngredients.push(ingredients[i].id)
            // console.log(ingredients[i].id)
        } 
    }
    let str2 = myIngredients.join(", ")
    let str3 = `${str1}${str2}.`
    alert(str3);

    for(let i = 0; i < ingredients.length; i++){
        ingredients[i].checked = false;
    }

})



