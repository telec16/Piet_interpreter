
function updates(Stack, Out){
	updateStack(Stack);
	uptdateOut(Out);
}

function updateStack(div){
	el = document.getElementById(div);
	
	var table="";
	for(var i=stack.length-1; i>=0; i--){
		table += "<tr><td>" + stack[i].toString() + "</td></tr>";
	}
	el.innerHTML=table;
	
	setTimeout(updateStack, 100, div);
}

function uptdateOut(div){
	el = document.getElementById(div);
	el.innerHTML=out;
	
	setTimeout(uptdateOut, 100, div);
}

