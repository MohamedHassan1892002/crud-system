
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var btnAdd = document.getElementById("btn-add");
var btnUpdet = document.getElementById("btn-Updet");
var productContainer;
var count;
var searchInput=document.getElementById("searchInput");

// get data with localStorage
if (localStorage.getItem("productList") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("productList"))
    displayProduct()
}
/////////
function addProduct() {
    if (validName() && validprice()) {
        var product = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            description: productDescription.value
        }
        productContainer.push(product);
        localStorage.setItem("productList", JSON.stringify(productContainer))
        displayProduct();
        clearValue()
    }
}

// displayData
function displayProduct() {
    var temp = "";
    for (var i = 0; i < productContainer.length; i++) {
        count = i;
        temp += `<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].description}</td>
        <td><button onclick="updetProduct(${count})"  class="btn btn-warning ">updet</button></td>
        <td><button onclick="DeleteProduct(${i})" class="btn btn-danger">deleat</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = temp;
}
/////////

// validName
function validName() {
    var regexName = /^[a-z]{3,15}?/;
    if (regexName.test(productName.value)) {
        document.getElementById("validNameId").style.display = "none"
        return true
    }
    else {
        document.getElementById("validNameId").style.display = "block"
        return false
    }
}
////////

// validprice
function validprice() {
    var regexprice = /^[0-9]{1,5}$/;
    if (regexprice.test(productPrice.value)) {
        document.getElementById("validprice").style.display = "none"
        return true
    }
    else {
        document.getElementById("validprice").style.display = "block"
        return false
    }
}
////////


//  updetProduct
function updetProduct(count) {
    btnAdd.style.display="none";
    btnUpdet.style.display="block";
    productName.value = productContainer[count].name
    productPrice.value = productContainer[count].price
    productCategory.value = productContainer[count].category
    productDescription.value = productContainer[count].description
}

function addUpdet() {
    productContainer[count].name = productName.value
    productContainer[count].price = productPrice.value
    productContainer[count].category = productCategory.value
    productContainer[count].description = productDescription.value
    localStorage.setItem("productList", JSON.stringify(productContainer));
    displayProduct();
    btnAdd.style.display="block";
    btnUpdet.style.display="none";
    clearValue()

}
//////

// clearValue
function clearValue() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
}
///////

// DeleteData
function DeleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem("productList", JSON.stringify(productContainer))
    displayProduct();
}

//////

/// search
function search(){
    var tirm=searchInput.value;
    searchContainer="";
    for(var i=0 ; i<productContainer.length ; i++){
        if(productContainer[i].name.toLowerCase().includes(tirm.toLowerCase())){
            searchContainer +=`<tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].description}</td>
            <td><button onclick="updetProduct(${count})"  class="btn btn-warning ">updet</button></td>
            <td><button onclick="DeleteProduct(${i})" class="btn btn-danger">deleat</button></td>
        </tr>`
        }
    }
    document.getElementById("tableBody").innerHTML=searchContainer;
}
