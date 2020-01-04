
function LoadProduct() {
	debugger;
	var localProduct = JSON.parse(localStorage.getItem('localProduct'));

	 localProduct.forEach(function (element) {

		try{
			if (element.type == "coffee") {
				var men = document.getElementById("caphe");
        		men.innerHTML += '<div class="col-1"><img id="img" src="'+element.image+'"><div class="card-content"><h3 id="Name1" style="color: black;margin-left:20px;">'+element.name+'</h3><p class="col" id="pricenew" style="color: black; margin-left:55px;">'+element.price+" VND"+'</p><button id="pay" onclick="pay()" style="color: black; margin-left:60px;" >Đặt hàng</button></div>'
			}

			if (element.type =="tea") {
				var women = document.getElementById("tra");
				women.innerHTML += '<div class="col-1"><img id="img" src="'+element.image+'"><div class="card-content"><h3 id="Name" style="color: black;margin-left:20px;">'+element.name+'</h3><p class="col" id="pricenew" style="color: black; margin-left:55px;">'+element.price+" VND"+'</p><button id="pay" onclick="pay()" style="color: black;margin-left:60px;" >Đặt hàng</button></div>'
			}
		}
		catch{ }
	});
}
function pay(){
	debugger;
	alert("Thank you your order!");
}

var arr = new Array();
// var arr = [
// 	{
// 		code: "451CAS",
// 		date: "13/10/2019",
// 		image: "men-01.jpg",
// 		name: "Vest Nam",
// 		oldprice: "800000",
// 		price: "450000",
// 		type: "Men's Fashion",
// 	},
// 	{
// 		code: "VEST485",
// 		date: "13/10/2019",
// 		image: "men-02.jpg",
// 		name: "Vest Hàn Quốc",
// 		oldprice: "1000000",
// 		price: "650000",
// 		type: "Men's Fashion",
// 	},
// 	{
// 		code: "VYS47",
// 		date: "13/10/2019",
// 		image: "girl-01.jpg",
// 		name: "Váy Tần",
// 		oldprice: "600000",
// 		price: "450000",
// 		type: "Women's Fashion",
// 	},
// 	]
function AddProduct() {
	debugger;
	var dt = new Date();
  	var date = dt.getDate() + "/" + (dt.getMonth()+1) + "/" + dt.getFullYear();
	var npd = document.getElementById("npd").value;
	var codepd = document.getElementById("codepd").value;
	var ppd = document.getElementById("ppd").value;
	var oppd = document.getElementById("oppd").value;
	var select = document.getElementById("select");
	var item  = select[select.selectedIndex].text;
	var img = document.getElementById("img").value;
	var img = img.split('\\')[2];
	
	if(npd == "" || ppd == ""){
		alert("Bạn nhập thiếu thông tin");
	}else{
		getProductLocal();
		arr.push(
		{
			name: npd,
			code: codepd,
			price: ppd,
			oldprice: oppd,
			type: item,
			image: img,
			date : date,
			
		});
		localStorage.setItem("localProduct",JSON.stringify(arr));
		showdProduct();
	}
	document.getElementById("npd").value= "";
	document.getElementById("codepd").value= "";
	document.getElementById("ppd").value= "";
	document.getElementById("oppd").value= "";
}

//Lấy sản phẩm từ localStrage
function getProductLocal() {
	var str = localStorage.getItem('localProduct');
	if (str != null) 
		arr = JSON.parse(str);	
}


var tbl = document.getElementById("tbl");

// Xóa Sản phẩm trong LocalStrage
function deleteProduct(i) {
	var tbl = document.getElementById("tbl");
	delete arr[i];
	localStorage.setItem("localProduct",JSON.stringify(arr));
	showdProduct();
}

// Xóa Sản Phảm ở bản
function deleteTable(x) {
	var tbl = document.getElementById("tbl");
	tbl.deleteRow(x);
	showdProduct();
}

//Hiển thị Sản Phẩm
function showdProduct() {
	getProductLocal();
	debugger;
	var tbl = document.getElementById("tbl");
	var x = tbl.rows.length;
	while (--x) {
		tbl.deleteRow(x);
	}
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] != null){
			var row = tbl.insertRow();
			var cellid = row.insertCell();
			var cellname = row.insertCell();
			var cellimg = row.insertCell();
			var cellcode = row.insertCell();
			var cellprice = row.insertCell();
			var cellold = row.insertCell();
			var cellday = row.insertCell();
			var celltype = row.insertCell();
			var celladd = row.insertCell();
			var celldelete = row.insertCell();
			cellid.innerHTML = i+1;
			cellname.innerHTML = arr[i].name;
			cellimg.innerHTML = '<div class="tbl-img"><img class="card-img-top" src="' + arr[i].image + '" id="img" alt=""></div>';
			cellcode.innerHTML = arr[i].code;
			cellprice.innerHTML = arr[i].price;
			cellold.innerHTML = arr[i].oldprice;
			cellday.innerHTML = arr[i].date ;
			celltype.innerHTML = arr[i].type;
			x -=1;
			celladd.innerHTML = '<button class="btn btn-success" onclick="updateProduct(' + i + ');renpair();showdProduct();">Sửa</button>';
			celldelete.innerHTML = '<button class="btn btn-danger" onclick="deleteTable(' + x + '),deleteProduct(' + i + ') ">Xóa</button>';
		}	
	}
}

// Nút Repair trong table
function updateProduct(i) {
	debugger;
	var snpd = document.getElementById("snpd").value;
	var scodepd = document.getElementById("scodepd").value;
	var sppd = document.getElementById("sppd").value;
	var soppd = document.getElementById("soppd").value;
	if(snpd != "" || scodepd != "" || sppd != "" || soppd != ""){
		alert("Bạn Chưa Chỉnh Sửa Xong");
	}else{
		var snpd = document.getElementById("snpd");
		var scodepd = document.getElementById("scodepd");
		var sppd = document.getElementById("sppd");
		var soppd = document.getElementById("soppd");
		var sselect = document.getElementById("sselect");
		var sitem  = sselect[sselect.selectedIndex].text;
		var simg = document.getElementById("img").value;
  		var simg = simg.split('\\')[2];		
		var n = i;
		snpd.value += arr[n].name;
		scodepd.value += arr[n].code;
		sppd.value += arr[n].price;
		soppd.value += arr[n].oldprice;
		sitem.value += arr[n].type;	
		// simg += '<div class="tbl-img"><img class="card-img-top" src="img/' + arr[n].image + '" id="img" alt=""></div>';
		var update = document.getElementById('update');
		update.innerHTML ='<button class="btn btn-primary" onclick="showdProduct();add();updateLocalStorage(' + i + ')">Repair Product</button>';
  }
}

function add() {
  var a = document.getElementById('renpair');
  var b = document.getElementById('add');
  a.style.display = 'none';
  b.style.display = 'block';
}
function renpair() {
  var a = document.getElementById('renpair');
  var b = document.getElementById('add');
  a.style.display = 'block';
  b.style.display = 'none';
}

function updateLocalStorage(i) {
	var dt = new Date();
  	var date = dt.getDate() + "/" + (dt.getMonth()+1) + "/" + dt.getFullYear();
	var snpd = document.getElementById("snpd").value;
	var scodepd = document.getElementById("scodepd").value;
	var sppd = document.getElementById("sppd").value;
	var soppd = document.getElementById("soppd").value;
	var sselect = document.getElementById("sselect");
	var sitem  = sselect[sselect.selectedIndex].text;
	var simg = document.getElementById("img").value;
  	var ssimg = simg.split('\\')[2];
	if(npd == "" || codepd == "" || ppd == "" || oppd == ""){
		alert("Bạn nhập thiếu thông tin");
	}else{
		arr.splice(i, 1,{
			name: snpd,
			code: scodepd,
			price: sppd,
			oldprice: soppd,
			image: ssimg,
			type: sitem,
			date: date,
		});
		localStorage.setItem('localProduct', JSON.stringify(arr));
		snpd == "";
		scodepd == "";
		sppd == "";
		soppd == "";
		showdProduct();
	}
}