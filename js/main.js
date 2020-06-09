import {restrictListProducts} from "./groceries";

document.getElementById("Client").style.display = "inline";
//document.getElementById("Products").style.display = "none";
//document.getElementById("Cart").style.display = "none";


document.getElementById("clientInput").addEventListener('click', () => showProd() );

function showProd() {



    document.getElementById("Client").style.display = "none";
document.getElementById("Products").style.display = "inline";
}

export  var preferences = {
    vegetarian: false,
    glutenFree: false,
    organic: false,

};


document.getElementById('vegetarian').addEventListener("change", () =>checkBoxClicked('vegetarian'))
document.getElementById('glutenFree').addEventListener("change", () =>checkBoxClicked('glutenFree'))
document.getElementById('organic').addEventListener("change", () =>checkBoxClicked('organic'))

function checkBoxClicked(checkBoxString){
    preferences[checkBoxString] = !preferences[checkBoxString]

    restrictListProducts();
}