function printDiv() {
  var name=document.getElementById('name').value   
  var email=document.getElementById('email').value
  var phone=document.getElementById('phone').value
  var add=document.getElementById('add').value    
  var title=document.getElementById('title').value
  
  if(validate())    
  document.write(title," ",name," ",email," ",add," ",phone);    
     
}
function validate() {  
	var result = "";	
    
	result += validateName(); 	
    result += validatePhone();
    result += validateEmail();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}

function validatePhone() {
	var p = document.getElementsByName("phone")[0].value;
	if (p.length <= 10)
		return "Phone No. should be at least 10 digits.\n";	
	return "";
}
function validateName() {
	var name = document.getElementsByName("name")[0].value;
	if (name.length <= 3)
		return "Name should be at least three characters.\n";	
	return "";
}
function validateEmail() {
	var email = valueOf("email");
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	return "";	
}
function validatePassword() {
    var pass1 = document.getElementById('pass');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
 	
    if(pass1.value.length > 5)
    {
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        return "";
    }
    else
    {
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        return  " you have to enter at least 6 digit!";
     }

}  
