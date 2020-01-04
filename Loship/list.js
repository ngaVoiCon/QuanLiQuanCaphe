var p1 = {
    name: "Espresso",
    price: 70000,
    image: "coffee5.jpg"
}
var p2 = {
    name: "Americano",
    price: 76000,
    image: "coffee2.jpg"
}
var p3 = {
    name: "Latte",
    price: 80000,
    image: "coffee3.jpg"
}
var p5 = {
    name: "Den da",
    price: 35000,
    image: "coffee4.jpg"
}
var p4 = {
    name: "Trà sữa chân châu",
    price: 65000,
    image: "tea1.jpg"
}
var p6 = {
    name: "Trà sữa khoai môn",
    price: 99000,
    image: "tea2.jpg"
}
var p7 = {
    name: "Trà sữa thái xanh ",
    price: 60000,
    image: "tea3.jpg"
}
var p8 = {
    name: "Lục Trà",
    price: 59000,
    image: "tea4.jpg"
}
var p9 = {
    name: "Cà rốt",
    price: 100000,
    image: "fruit1.jpg"
}
var p10 = {
    name: "Nho ép",
    price: 179000,
    image: "fruit2.jpg"
}
var p11 = {
    name: "Mâm xôi",
    price: 140000,
    image: "frui3.jpg"
}
var p12 = {
    name: "Táo ép",
    price: 100000,
    image: "fruit4.png"
}

var product = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
var coffee = [p1, p2, p3, p5];
var tea = [p4, p6, p7, p8];
var f = [p10, p11, p12,p9];
var cart = new Array();
var arr = new Array();

localStorage.setItem("product", JSON.stringify(product));
product = JSON.parse(localStorage.getItem("product"));

localStorage.setItem("coffee", JSON.stringify(coffee));
coffee = JSON.parse(localStorage.getItem("coffee"));

localStorage.setItem("tea", JSON.stringify(tea));
tea = JSON.parse(localStorage.getItem("tea"));

localStorage.setItem("f", JSON.stringify(f));
f = JSON.parse(localStorage.getItem("f"));

cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);
document.getElementById("sl").innerHTML = cart.length;