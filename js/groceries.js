import {preferences} from "./main.js";

export var products = [
    {
        name: "tomato",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: "1.50",
        category: "vegetable",
        link: 'https://images.pexels.com/photos/5617/red-tomato-vegetable.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
        name: "brocoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: "1.99",
        category: "vegetable",
        link: 'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: "2.35",
        category: "grain",
        link: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: "croissant",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: "3.00",
        category: "grain",
        link: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: "butter",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: "3.50",
        category: "dairy",
        link: 'https://images.pexels.com/photos/94443/pexels-photo-94443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: "raddish",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: "5.00",
        category:"vegetable",
        link: 'https://media.istockphoto.com/photos/single-radish-on-a-white-background-picture-id182735403'
    },
    {
        name: "cereal",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: "6.00",
        category: "grain",
        link: 'https://images.pexels.com/photos/216951/pexels-photo-216951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: "steak",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: "8.00",
        category:"meat",
        link: 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: "10.00",
        category:"meat",
        link: 'https://images.pexels.com/photos/1409050/pexels-photo-1409050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: "pork bun",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        price: "15.00",
        category:"meat",
        link: 'https://images.pexels.com/photos/4197989/pexels-photo-4197989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
        product_array.push({name: products[i].name, price: products[i].price, category: products[i].category, link:products[i].link});
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