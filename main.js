
//Checking of Fisrt name field
function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Все правильно";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Пожалуйста, введите корректные данные";
        return false;
    }
}



//Checking of Phone number field
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Все правильно";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Пожалуйста, введите корректные данные";
        return false;
    }
}

function checkMail() {
    var mail = document.getElementById("mail").value;
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (regex.test(mail)) { // if testing of first is true
        document.getElementById("mail_Check").style.color = "green";
        document.getElementById("mail_Check").innerHTML = "Все правильно";
        return true;
    }
    else {// if it's not
        document.getElementById("mail_Check").style.color = "red";
        document.getElementById("mail_Check").innerHTML = "Пожалуйста, введите корректные данные";
        return false;
    }
} 

//Collect and output all the data
function outputData() {
    var first = document.getElementById("first").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var message = document.getElementById("message").value;
    
    

    if (first != "" && age != "" && phone != "" && mail != "" && message != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Здравствуйте, " + first +  "!";
       
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Мы рады, что вы оставила обратную связь.<br> В скором времени лжидайте звонка от менеджера.</p>";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Пожалуйста, заполните все поля!";
    }
}

//СЛАЙДЕР 
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


//ПЛАВАЮЮЩАЯ КНОПКА
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});
