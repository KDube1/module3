import {restrictListProducts, products, getTotalPrice} from "./groceries.js";





document.getElementById("Client").style.display = "inline";
//document.getElementById("Products").style.display = "none";
//document.getElementById("Cart").style.display = "none";


document.getElementById("clientInput").addEventListener('click', () => showProd() );
document.getElementById("vegCollapsible").addEventListener("click" ,() => displayVeggies());
document.getElementById("grainCollapsible").addEventListener("click" ,() => displayGrain());
document.getElementById("dairyCollapsible").addEventListener("click" ,() => displayDairy());
document.getElementById("meatCollapsible").addEventListener("click" ,() => displayMeat());


document.getElementById("addCart").addEventListener("click", () => showCart());


function displayVeggies() {
    document.getElementById("vegCollapsible").classList.toggle("vegActive");
    let vegText = document.getElementById("vegText");
    if (vegText.style.display === "block") {
        vegText.style.display = "none";
    } else {
        vegText.style.display = "block";
    }
}

function displayGrain() {
    document.getElementById("grainCollapsible").classList.toggle("grainActive");
    let grainText = document.getElementById("grainText");
    if (grainText.style.display === "block") {
        grainText.style.display = "none";
    } else {
        grainText.style.display = "block";
    }
}
function displayDairy() {
    document.getElementById("dairyCollapsible").classList.toggle("dairyActive");
    let dairyText = document.getElementById("dairyText");
    if (dairyText.style.display === "block") {
        dairyText.style.display = "none";
    } else {
        dairyText.style.display = "block";
    }
}
function displayMeat() {
    document.getElementById("meatCollapsible").classList.toggle("meatActive");
    let meatText = document.getElementById("meatText");
    if (meatText.style.display === "block") {
        meatText.style.display = "none";
    } else {
        meatText.style.display = "block";
    }
}


function showClient(){
    document.getElementById("Client").style.display = "inline";
    populateProductCollapsibles();
    document.getElementById("Products").style.display = "none";
}

function showProd() {
document.getElementById("Client").style.display = "none";
    populateProductCollapsibles();
document.getElementById("Products").style.display = "inline";
document.getElementById("Cart").style.display = "none";

}

function showCart() {
    document.getElementById("Products").style.display = "none";
    document.getElementById("Cart").style.display = "inline";

    populateCart();
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
    populateProductCollapsibles();

}

function populateProductCollapsibles() {

    let vegBool, grainBool, dairyBool, meatBool = false;



    let productArray = restrictListProducts();


    for (let i =0; i<productArray.length; i++) {

        if (productArray[i].category == "vegetable"){
            vegBool = true;
        }

        if (productArray[i].category == "dairy"){
            dairyBool = true;
        }

        if (productArray[i].category == "grain"){
            grainBool = true;
        }

        if (productArray[i].category == "meat"){
            meatBool = true;
        }
    }

    if (!vegBool){
        document.getElementById("vegCollapsible").style.display = "none";
   }

    if (!dairyBool){
        document.getElementById("dairyCollapsible").style.display = "none";
    }
    if (!grainBool){
        document.getElementById("grainCollapsible").style.display = "none";
    }
    if (!meatBool){
        document.getElementById("meatCollapsible").style.display = "none";
    }


    let vegCol = document.getElementById("vegText");
    vegCol.innerHTML = "";

    let grainCol = document.getElementById("grainText");
    grainCol.innerHTML = "";

    let dairyCol = document.getElementById("dairyText");
    dairyCol.innerHTML = "";

    let meatCol = document.getElementById("meatText");
    meatCol.innerHTML = "";

    for(let i =0 ; i<productArray.length; i++){
        if (productArray[i].category == "vegetable"){
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "product";
            checkbox.value = productArray[i].name;
            checkbox.id = productArray[i].name;
            vegCol.appendChild(checkbox);

            var label = document.createElement('label')
            label.htmlFor = productArray[i].name;
            label.appendChild(document.createTextNode(productArray[i].name + ": $" + productArray[i].price));
            vegCol.appendChild(label);


            vegCol.appendChild(document.createElement("br"));
        }

        if (productArray[i].category == "grain"){
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "product";
            checkbox.value = productArray[i].name;
            checkbox.id = productArray[i].name;
            grainCol.appendChild(checkbox);

            var label = document.createElement('label')
            label.htmlFor = productArray[i].name;
            label.appendChild(document.createTextNode(productArray[i].name + ": $" + productArray[i].price));
            grainCol.appendChild(label);


            grainCol.appendChild(document.createElement("br"));
        }

        if (productArray[i].category == "dairy"){
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "product";
            checkbox.value = productArray[i].name;
            checkbox.id = productArray[i].name;
            dairyCol.appendChild(checkbox);

            var label = document.createElement('label')
            label.htmlFor = productArray[i].name;
            label.appendChild(document.createTextNode(productArray[i].name + ": $" + productArray[i].price));
            dairyCol.appendChild(label);


            dairyCol.appendChild(document.createElement("br"));
        }

        if (productArray[i].category == "meat"){
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "product";
            checkbox.value = productArray[i].name;
            checkbox.id = productArray[i].name;
            meatCol.appendChild(checkbox);

            var label = document.createElement('label')
            label.htmlFor = productArray[i].name;
            label.appendChild(document.createTextNode(productArray[i].name + ": $" + productArray[i].price));
            meatCol.appendChild(label);


            meatCol.appendChild(document.createElement("br"));
        }
    }

    //iterate thru the array, if something equals veggies add a checkbox of it to veggiecontent div, if theres nothing we'll hide the collapisble

}

function populateCart(){
    var ele = document.getElementsByName("product");
    let chosenProducts = [];

    var displayCart = document.getElementById("displayCart");
    displayCart.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    para.innerHTML = "You selected : ";
    para.appendChild(document.createElement("br"));
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            let cartItemPrice = 0;

            for(let j= 0; j<products.length; j++){
                if (products[j].name == ele[i].value){
                    cartItemPrice = products[j].price;
                }
            }

            para.appendChild(document.createTextNode(ele[i].value + ": $" + cartItemPrice));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    displayCart.appendChild(para);
    displayCart.appendChild(document.createTextNode("Total Price is: $" + getTotalPrice(chosenProducts)));
}

