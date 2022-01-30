function valid(){
	var f=document.querySelector('#name')
	var username=document.querySelector('#name').value;
	var Email=document.querySelector("#email").value;
	var Pass=document.querySelector("#password").value;
	var cPass=document.querySelector("#cpassword").value;

	var usercheck=/^[A-Z][a-z]{4,30}$/;
	var emailcheck=/^[a-zA-Z]{3,}[0-9]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
	var passcheck=/^[a-zA-z]{3,}[@#$%&*]{1}[0-9]{3,16}$/;
	

	if(usercheck.test(username)){
		document.querySelector('#error').innerHTML=" ";
		f.style.outlineColor="green";
	}
	else{
		
		f.style.outlineColor="red";

		return false;
	}


	if(emailcheck.test(Email)){
		document.querySelector("#error-2").innerHTML=" ";
		email.style.outlineColor="green";

	}
	else{
		
		email.style.outlineColor="red";

		return false;	
	}
	if(passcheck.test(Pass)){
		document.querySelector('#error-3').innerHTML=" ";
		password.style.outlineColor="green";

	}
	else{

		password.style.outlineColor="red";

		return false;
	}
	if(cPass.match(Pass)){
		document.querySelector('#error-4').innerHTML=" ";
		cpassword.style.outlineColor="green";

	}else{

		cpassword.style.outlineColor="red";

		return false;
	}

}


/////////  user icon start



function iconcolor(){
	var x=document.getElementById('user')
	if(x.style.color=="yellow"){
		x.style.color="darkgray";
	}
	else{
		x.style.color="yellow";
	}
}


function iconcolor2(){
	var x=document.getElementById('user-2')
	if(x.style.color=="yellow"){
		x.style.color="darkgray";
	}
	else{
		x.style.color="yellow";
	}
}

function iconcolor3(){
	var x=document.getElementById('user-3')
	if(x.style.color=="yellow"){
		x.style.color="darkgray";
	}
	else{
		x.style.color="yellow";
	}
}


function iconcolor4(){
	var x=document.getElementById('user-4')
	if(x.style.color=="yellow"){
		x.style.color="darkgray";
	}
	else{
		x.style.color="yellow";
	}
}


/////////  user icon end






//////  login



function validation(){


	var u=document.querySelector('#log-name')
	var e=document.querySelector('#log-email')
	var p=document.querySelector('#log-password')
	
	var logusername=document.querySelector('#log-name').value;
	var logEmail=document.querySelector("#log-email").value;
	var logPass=document.querySelector("#log-password").value;


	var userchek=/^[A-Z][a-z]{4,30}$/;
	var emailchek=/^[a-zA-Z]{3,}[0-9]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
	var passchek=/^[a-zA-z]{3,}[@#$%&*]{1}[0-9]{3,16}$/;
	

	if(userchek.test(logusername)){
		u.style.outlineColor="green";
	}
	else{
		u.style.outlineColor="red";

		return false;
	}


	if(emailchek.test(logEmail)){
		e.style.outlineColor="green";
	}
	else{
		e.style.outlineColor="red";

		return false;	
	}

	if(passchek.test(logPass)){
		p.style.outlineColor="green";

	}else{

		p.style.outlineColor="red";

		return false;
	}


}




/////////  user icon login


function iconcolor5(){
	var y=document.getElementById('user')
	if(y.style.color=="yellow"){
		y.style.color="darkgray";
	}
	else{
		y.style.color="yellow";
	}
}


function iconcolor6(){
	var y=document.getElementById('user-2')
	if(y.style.color=="yellow"){
		y.style.color="darkgray";
	}
	else{
		y.style.color="yellow";
	}
}

function iconcolor7(){
	var y=document.getElementById('user-3')
	if(y.style.color=="yellow"){
		y.style.color="darkgray";
	}
	else{
		y.style.color="yellow";
	}
}



/////////  user icon login end

