
var extraName = "";
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='quantity']");

    let amountInputSauce = document.querySelector("select[name='sauce']").selectedIndex;
   
    document.getElementById("32").value=document.getElementsByTagName("option")[amountInputSauce].textContent;
    amountInputSauce = parseInt(document.getElementsByTagName("option")[amountInputSauce].value);
    
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    var radio = document.forms[0];
    let amountInputExtra;
    var i;
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            amountInputExtra = parseInt(radio[i].value);
            document.getElementById("34").value=radio[i].id;
        }
    }

    showSumPrice(price, amountNumber, amountInputSauce, amountInputExtra);
    return showSumPrice(price, amountNumber, amountInputSauce, amountInputExtra);
}







function showSumPrice(price, amountNumber, amountInputSauce, amountInputExtra) {
    let showAmount = document.querySelector("span.show-amount");
    /*if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
        return amount;
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
        return amount;
    } else {}*/
    let amount = amountNumber * price + amountInputSauce * parseInt(document.querySelector("input[name='quantity']").value) + amountInputExtra * parseInt(document.querySelector("input[name='quantity']").value);
    showAmount.innerHTML = amount;
document.getElementById("33").value=amount;
    return amount;


}


let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket! ";





function sendEmail() {

    var radio = document.forms[0];

    var i;
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked && radio[i].id != "nothing") {
            extraName = radio[i].id;
        }
        else if (radio[i].checked && radio[i].id == "nothing") {
            extraName = "";
        }

    }

    var price = calcAmount();
    var template_params = {
        "from_name": document.getElementById("name").value,
        "email": document.getElementById("Email").value,
        "address": document.getElementById("address").value,
        "comment": document.getElementById("comment").value,
        "product": document.getElementsByTagName("option")[document.querySelector("select[name='sauce']").selectedIndex].innerHTML + "," + extraName,
        "quantity": document.querySelector("input[name='quantity']").value,
        "price": price
    }

    var service_id = "default_service";
    var template_id = "template_zoTC4DzG";
    emailjs.send(service_id, template_id, template_params);
    alert("Köszönjük a vásárlást!");
}






























/*let parent = document.querySelector("div.topping");
parent.appendChild(helpText);



//window events.
let sendButton = document.querySelector("from .btn.btn-primary");
/*sendButton.onclcik = function() {
    alert("Hello Js");
}


if(sendButton){sendButton.addEventListener("click", function () {
    alert("Hello JS!")
});}

window.addEventListener("resize", function () {
    console.log(this.innerHeight, this.innerWidth);
})

// Nevek
let n;
let nrOfProducts;
let numberOfProducts;

//Ne legyen a név félrevezető.
function multiplayer(x, y) {
    return x * y;
}
//Kerüld az O és I karaktereket.
let io; let l0;

// Komment: egy soros

// Unncessery:This function gives roles of user.
function getUserRoles(user, roles, id) {
    if (user.admin) {
        return user.roles;
    } else {
        return user.rolesObject;
    }
}
    // mathes any aplbabetical carhs between n and m
    let idPattern = /m[a-z]n/;*/


