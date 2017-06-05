
var navegador = document.getElementById("navegadorId");
var registro = document.getElementById("btnSignUp");
        
window.addEventListener("scroll", function(){
    
    if (document.body.scrollTop > 80) {
        navegador.classList.add('modificarNav');
    } else {
        navegador.classList.remove('modificarNav');
    }
});

console.log(Array.from(document.getElementsByClassName("nuevoInput")).length)
document.getElementById("numberId").addEventListener("focus", function(){

    if(Array.from(document.getElementsByClassName("nuevoInput")).length == 1){
        var phone = document.getElementById("numberId");
        var name = document.createElement("input");
        var email = document.createElement("input");
        var city = document.createElement("input");

        name.setAttribute("id", "nameId");
        name.setAttribute("placeholder", "Name");
        name.setAttribute("class", "nuevoInput hideInput");
        email.setAttribute("id", "emailId");
        email.setAttribute("placeholder", "Email");
        email.setAttribute("class", "nuevoInput hideInput");
        city.setAttribute("id", "cityId");
        city.setAttribute("placeholder", "City");
        city.setAttribute("class", "nuevoInput hideInput");

        document.getElementById("inputsId").appendChild(name);
        document.getElementById("inputsId").appendChild(email);
        document.getElementById("inputsId").appendChild(city);
        document.getElementById("becomeButtonId").addEventListener("click", function(val){

        if(phone.value == "" || isNaN(phone.value)){
            phone.classList.add('showInput');
        }else{
            phone.classList.remove('showInput');
        }

        if(name.value.charAt(0) != name.value.charAt(0).toUpperCase() || name.value == ""){
            
            name.classList.add('showInput');
        }else{
            name.classList.remove('showInput');
        }

        if(email.value.indexOf("@") == -1){
            email.classList.add('showInput');
        }else{
            email.classList.remove('showInput');
        }

        if(city.value.charAt(0) != city.value.charAt(0).toUpperCase() || city.value == ""){
            city.classList.add('showInput');
        }else{
            city.classList.remove('showInput');
        }

        });

    }
});