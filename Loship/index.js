function coffee1() {
    document.getElementById("cf").innerHTML = "";
    for (var i = 0; i < coffee.length; i++) {

        var products = document.getElementById("products");

        var line = document.createElement("div");
        var cen = document.createElement("center");

        var imgObj = document.createElement("img");
        imgObj.src = coffee[i].image;

        var nameObj = document.createElement("p");
        nameObj.innerText = coffee[i].name;

        var priceObj = document.createElement("p");
        priceObj.innerText = coffee[i].price + " VND";

        var btnAdd = document.createElement("button");
        btnAdd.innerText = "Đặt hàng";
        line.className = "col-1";
        nameObj.className="name";

        btnAdd.onclick = function(arg) {
            return function() {
                //var iname = product[arg].name;
                var kt = -1;
                if (cart != null) {
                    arr = cart;
                    for (var i = 0; i < cart.length; i++) {
                        if (cart[i].name == coffee[arg].name) {
                            console.log(cart[i]);
                            console.log(coffee[arg].name);
                            var quan;
                            cart[i].quantity = cart[i].quantity + 1;
                            localStorage.setItem('cart', JSON.stringify(cart));
                            kt = 1;
                        }
                    }
                }
                if (kt == -1) {
                    if (kt == -1) {
                        for (var i = 0; i < coffee.length; i++) {
                            if (i == arg) {
                                arr.push({
                                    name: coffee[arg].name,
                                    price: coffee[arg].price,
                                    image: coffee[arg].image,
                                    quantity: 1
                                });
                                localStorage.setItem('cart', JSON.stringify(cart));
                                console.log(cart);
                            }
                        }
                    }
                }
                document.getElementById("carts").innerHTML = "";
                document.getElementById("sl").innerHTML = arr.length;
                cart = arr
            }
        }(i);
        cen.appendChild(imgObj);
        cen.appendChild(nameObj);
        cen.appendChild(priceObj);
        cen.appendChild(btnAdd);
        line.appendChild(cen);
        cf.appendChild(line);
    }
    document.getElementById("products").style.display = "none";
    document.getElementById("carts").style.display = "none";
    document.getElementById("cf").style.display = "grid";
    document.getElementById("tr").style.display = "none";
    document.getElementById("fr").style.display = "none";
    document.getElementById("timkiem").style.display = "none";
    document.getElementById("order").style.display = "none";
    document.getElementById("tra").style.display = "none";
}

function tea1() {
    //document.getElementById("products").innerHTML = "";
    document.getElementById("tr").innerHTML = "";
    for (var i = 0; i < tea.length; i++) {
        var products = document.getElementById("products");

        var line = document.createElement("div");
        var cen = document.createElement("center");

        var imgObj = document.createElement("img");
        imgObj.src = tea[i].image;

        var nameObj = document.createElement("p");
        nameObj.innerText = tea[i].name;

        var priceObj = document.createElement("p");
        priceObj.innerText = tea[i].price + " VND";

        var btnAdd = document.createElement("button");
        btnAdd.innerText = "add to cart";
        line.className = "col-1";
        nameObj.className="name";


        btnAdd.onclick = function(arg) {
            return function() {
                //var iname = product[arg].name;
                var kt = -1;
                if (cart != null) {
                    arr = cart;
                    for (var i = 0; i < cart.length; i++) {
                        if (cart[i].name == tea[arg].name) {
                            console.log(cart[i]);
                            console.log(tea[arg].name);
                            var quan;
                            cart[i].quantity = cart[i].quantity + 1;
                            localStorage.setItem('cart', JSON.stringify(cart));
                            kt = 1;
                        }
                    }
                }
                if (kt == -1) {
                    if (kt == -1) {
                        for (var i = 0; i < coffee.length; i++) {
                            if (i == arg) {
                                arr.push({
                                    name: tea[arg].name,
                                    price: tea[arg].price,
                                    image: tea[arg].image,
                                    quantity: 1
                                });
                                localStorage.setItem('cart', JSON.stringify(cart));
                                console.log(cart);
                            }
                        }
                    }
                }
                document.getElementById("carts").innerHTML = "";
                document.getElementById("sl").innerHTML = arr.length;
                cart = arr
            }
        }(i);
        cen.appendChild(imgObj);
        cen.appendChild(nameObj);
        cen.appendChild(priceObj);
        cen.appendChild(btnAdd);
        line.appendChild(cen);
        tr.appendChild(line);
    }
    document.getElementById("products").style.display = "none";
    document.getElementById("carts").style.display = "none";
    document.getElementById("cf").style.display = "none";
    document.getElementById("tr").style.display = "grid";
    document.getElementById("fr").style.display = "none";
    document.getElementById("timkiem").style.display = "none";
    document.getElementById("order").style.display = "none";
    document.getElementById("caphe").style.display = "none";

}

function fruit() {
    //document.getElementById("products").innerHTML = "";
    document.getElementById("fr").innerHTML = "";
    for (var i = 0; i < f.length; i++) {

        var products = document.getElementById("products");

        var line = document.createElement("div");
        var cen = document.createElement("center");

        var imgObj = document.createElement("img");
        imgObj.src = f[i].image;

        var nameObj = document.createElement("p");
        nameObj.innerText = f[i].name;

        var priceObj = document.createElement("p");
        priceObj.innerText = f[i].price + " VND";

        var btnAdd = document.createElement("button");
        btnAdd.innerText = "Đặt hàng";
        line.className = "col-1";
        nameObj.className="name";


        btnAdd.onclick = function(arg) {
            return function() {
                //var iname = product[arg].name;
                var kt = -1;
                if (cart != null) {
                    arr = cart;
                    for (var i = 0; i < f.length; i++) {
                        if (cart[i].name == coffee[arg].name) {
                            console.log(cart[i]);
                            console.log(f[arg].name);
                            var quan;
                            cart[i].quantity = cart[i].quantity + 1;
                            localStorage.setItem('cart', JSON.stringify(cart));
                            kt = 1;
                        }
                    }
                }
                if (kt == -1) {
                    if (kt == -1) {
                        for (var i = 0; i < f.length; i++) {
                            if (i == arg) {
                                arr.push({
                                    name: f[arg].name,
                                    price: f[arg].price,
                                    image: f[arg].image,
                                    quantity: 1
                                });
                                localStorage.setItem('cart', JSON.stringify(cart));
                                console.log(cart);
                            }
                        }
                    }
                }
                document.getElementById("carts").innerHTML = "";
                document.getElementById("sl").innerHTML = arr.length;
                cart = arr
            }
        }(i);
        cen.appendChild(imgObj);
        cen.appendChild(nameObj);
        cen.appendChild(priceObj);
        cen.appendChild(btnAdd);
        line.appendChild(cen);
        fr.appendChild(line);
    }
    document.getElementById("products").style.display = "none";
    document.getElementById("carts").style.display = "none";
    document.getElementById("cf").style.display = "none";
    document.getElementById("tr").style.display = "none";
    document.getElementById("fr").style.display = "grid";
    document.getElementById("timkiem").style.display = "none";
    document.getElementById("order").style.display = "none";
     document.getElementById("caphe").style.display = "none";
      document.getElementById("tra").style.display = "none";
}

for (var i = 0; i < product.length; i++) {
    var products = document.getElementById("products");

    var line = document.createElement("div");
    var cen = document.createElement("center");

    var imgObj = document.createElement("img");
    imgObj.src = product[i].image;

    var nameObj = document.createElement("p");
    nameObj.innerText = product[i].name;

    var priceObj = document.createElement("p");
    priceObj.innerText = product[i].price + " VND";

    var btnAdd = document.createElement("button");
    btnAdd.innerText = "Đặt hàng";
    line.className = "col-1";
    nameObj.className="name";


    btnAdd.onclick = function(arg) {
        return function() {
            //var iname = product[arg].name;
            var kt = -1;
            if (cart != null) {
                arr = cart;
                for (var i = 0; i < cart.length; i++) {
                    if (cart[i].name == product[arg].name) {
                        console.log(cart[i]);
                        console.log(product[arg].name);
                        var quan;
                        cart[i].quantity = cart[i].quantity + 1;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        kt = 1;
                    }
                }
            }
            if (kt == -1) {
                if (kt == -1) {
                    for (var i = 0; i < product.length; i++) {
                        if (i == arg) {
                            arr.push({
                                name: product[arg].name,
                                price: product[arg].price,
                                image: product[arg].image,
                                quantity: 1
                            });
                            localStorage.setItem('cart', JSON.stringify(cart));
                            console.log(cart);
                        }
                    }
                }
            }
            document.getElementById("carts").innerHTML = "";
            document.getElementById("sl").innerHTML = arr.length;
            cart = arr
        }
    }(i);

    cen.appendChild(imgObj);
    cen.appendChild(nameObj);
    cen.appendChild(priceObj);
    cen.appendChild(btnAdd);
    line.appendChild(cen);
    products.appendChild(line);
}

function displayProduct() {
    document.getElementById("products").style.display = "grid";
    document.getElementById("carts").style.display = "none";
    document.getElementById("cf").style.display = "none";
    document.getElementById("tr").style.display = "none";
    document.getElementById("fr").style.display = "none";
    document.getElementById("timkiem").style.display = "none";
    document.getElementById("order").style.display = "none";
     document.getElementById("caphe").style.display = "none";
      document.getElementById("tra").style.display = "none";
}

