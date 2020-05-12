function insert(num){
	document.form.textview.value = document.form.textview.value + num;
}
function equal(){
	var exp = document.form.textview.value;
	if(exp){
		document.form.textview.value = eval(exp);
	}		
}
function clean(){
	document.form.textview.value = "";		
}
function back(){
	var exp = document.form.textview.value;	
	document.form.textview.value = exp.substring(0,exp.length-1);
}

function changeColor() { 
           let color =  document.getElementById("colorBtn").value ; 
		   
		   var btn = document.getElementsByClassName("btn");

		   for(var i = 0; i < btn.length ; i++){
			   btn[i].style.backgroundColor = color;			   
		   }
        }