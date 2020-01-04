var bought = new Array();
localStorage.setItem("bought", JSON.stringify(bought));
function displayCart() {
    document.getElementById("carts").innerHTML = "";
    for (var i = 0; i < cart.length; i++) {
        var name2 = document.createElement("p");
        var price2 = document.createElement("p");
        var image2 = document.createElement("img");
        var quantity2 = document.createElement("p");
        var butDel = document.createElement("button");
        var butOrd = document.createElement("button");
        var line = document.createElement("div");

        name2.innerText = cart[i].name;
        price2.innerText = cart[i].price + " VND";
        image2.src = cart[i].image;
        quantity2.innerText = "Quantity: " + cart[i].quantity;
        butDel.innerText = "Delete";
        butOrd.innerText = "Order";

        butDel.className = "butDel";
        line.className = "col-2";

        butDel.onclick = function(ar){
            return function() {
                cart.splice(ar, 1);
                document.getElementById("sl").innerHTML = cart.length;
                localStorage.setItem('cart', JSON.stringify(cart));
                displayCart();
            }
        }(i);

        butOrd.onclick = function(ar) {
            return function() {
                document.getElementById("carts").innerHTML = '';
                var cus_name = document.createElement("p");
                var inputName = document.createElement("input");

                var cus_address = document.createElement("p");
                var inputAddress = document.createElement("input");

                var cus_phone = document.createElement("p");
                var inputPhone = document.createElement("input");

                var div = document.createElement("div");
                var div1 = document.createElement("div");
                var div2 = document.createElement("div");
                var div3 = document.createElement("div");

                var pro_name = document.createElement("p");
                var quantity1 = document.createElement("p");
                var total = document.createElement("p");
                var but = document.createElement("button");

                cus_name.innerText = "Tên khách hàng: ";
                cus_phone.innerText = "Số điện thoại: ";
                cus_address.innerText = "Địa chỉ giao hàng";
                but.innerText = "Mua";

                pro_name.innerText = "Tên sản phẩm: " + cart[ar].name;
                quantity1.innerHTML = "Số lượng:" +  cart[ar].quantity;
                total.innerText = "Tổng tiền: " + (cart[ar].quantity * cart[ar].price);

                but.onclick = function(ars) {
                    return function() {
                        if (inputPhone.value == "" || inputName.value == "" || inputAddress.value == "") {
                            alert("Vui lòng điền đầy đủ thông tin");
                        } else {
                            alert("Đặt hàng thành công");
                            bought.push({
                            name: cart[ars].name,
                                price: cart[ars].price,
                                image: cart[ars].image,
                                quantity: cart[ars].quantity
                            });
                            console.log(bought);
                            cart.splice(ars, 1);
                            document.getElementById("sl").innerHTML = cart.length;
                            localStorage.setItem('cart', JSON.stringify(cart));
                            displayCart();
                            
                        }
                    }
                }(ar);
                div.appendChild(div1);
                div.appendChild(div2);
                div.appendChild(div3);
                div1.appendChild(cus_name);
                div1.appendChild(inputName);
                div2.appendChild(cus_phone);
                div2.appendChild(inputPhone);
                div3.appendChild(cus_address);
                div3.appendChild(inputAddress);
                div.appendChild(pro_name);
                div.appendChild(quantity1);
                div.appendChild(total);
                div.appendChild(but);
                carts.appendChild(div);
                div.className = 'cart';
            }
        }(i);

        carts.appendChild(line);
        line.appendChild(image2);
        line.appendChild(name2);
        line.appendChild(price2);
        line.appendChild(quantity2);
        line.appendChild(butDel);
        line.appendChild(butOrd);
    }

    document.getElementById("products").style.display = "none";
    document.getElementById("carts").style.display = "block";
    document.getElementById("cf").style.display = "none";
    document.getElementById("tr").style.display = "none";
    document.getElementById("fr").style.display = "none";
    document.getElementById("timkiem").style.display = "none";
    document.getElementById("order").style.display = "none";
     document.getElementById("caphe").style.display = "none";
      document.getElementById("tra").style.display = "none";
}