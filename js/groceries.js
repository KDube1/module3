import {preferences} from "./main.js";

export var products = [
    {
        name: "tomato",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: "1.50",
        category: "vegetable"
    },
    {
        name: "brocoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: "1.99",
        category: "vegetable"
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: "2.35",
        category: "grain"
    },
    {
        name: "croissant",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: "3.00",
        category: "grain"
    },
    {
        name: "butter",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: "3.50",
        category: "dairy"
    },
    {
        name: "raddish",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: "5.00",
        category:"vegetable"
    },
    {
        name: "cereal",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: "6.00",
        category: "grain"
    },
    {
        name: "steak",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: "8.00",
        category:"meat"
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: "10.00",
        category:"meat"
    },
    {
        name: "pork bun",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        price: "15.00",
        category:"meat"
    }

];



export function restrictListProducts() {

    let product_array = [];
    for (let i=0; i<products.length; i+=1) {
        if (preferences["vegetarian"] && !products[i].vegetarian){
            continue;
        }
        if (preferences["glutenFree"] && !products[i].glutenFree){
            continue;
        }
        if (preferences["organic"] && !products[i].organic){
            continue;
        }
        product_array.push({name: products[i].name, price: products[i].price, category: products[i].category});
    }
    return product_array;
}

export function getTotalPrice(chosenProducts) {
    let total = 0;
    for (let i=0; i<chosenProducts.length; i++){
        let prodPrice = 0;
        for (let j =0; j<products.length; j++){
            if (products[j].name == chosenProducts[i]){
                prodPrice = products[j].price;
            }
        }
        total += parseFloat(prodPrice);
        var  ntot = total.toFixed(2);
    }
    return ntot;

}