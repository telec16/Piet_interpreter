var divImg;

function updates(Stack, Out, Reg, Img){
	updateStack(Stack);
	uptdateOut(Out);
	updateRegisters(Reg)
	divImg=Img;
}

function updateStack(div){
	el = document.getElementById(div);
	
	var table="";
	for(var i=stack.length-1; i>=0; i--){
		table += "<tr><td>" + stack[i].toString() + "</td><td>" + String.fromCharCode(stack[i]) + "</td></tr>";
	}
	el.innerHTML=table;
	
	setTimeout(updateStack, 100, div);
}

function updateRegisters(div){
	el = document.getElementById(div);
	
	var table="";
	table += "<tr><td>running</td><td>" + running + "</td></tr>";
	table += "<tr><td>IR</td><td>" + IR + "</td></tr>";
	table += "<tr><td>DP</td><td>" + DP + "</td></tr>";
	table += "<tr><td>CC</td><td>" + CC + "</td></tr>";
	table += "<tr><td>HC</td><td>" + HC + "</td></tr>";
	table += "<tr><td>VC</td><td>" + VC + "</td></tr>";
	table += "<tr><td>FC</td><td>" + FC + "</td></tr>";
	table += "<tr><td>SR</td><td>" + SR + "</td></tr>";
	table += "<tr><td>LR</td><td>" + LR + "</td></tr>";
	table += "<tr><td>RR</td><td>" + RR + "</td></tr>";
	el.innerHTML=table;
	
	setTimeout(updateRegisters, 100, div);
}

function uptdateOut(div){
	el = document.getElementById(div);
	el.innerHTML=out;
	
	setTimeout(uptdateOut, 100, div);
}

function updateImg(){
	cnv = document.getElementById(divImg);
	ctx = cnv.getContext("2d");
	
	var xSize=cnv.width;
	var ySize=cnv.height;
	
	var xLen = img[0].length;
	var yLen = img.length;
	
	var q = Math.min(xSize / xLen, ySize / yLen);
	
	ctx.clearRect(0, 0, xSize, ySize);
	
	for(var y=0; y<yLen; y++){
		for(var x=0; x<xLen; x++){
			ctx.fillStyle = img[y][x];
			ctx.fillRect(x*q, y*q, q, q);
			if((x==HC) && (y==VC)){
				ctx.beginPath();
				ctx.fillStyle = "#888888";
				ctx.arc((x+.5)*q, (y+.5)*q, q/4, 0, 2*Math.PI, false);
				ctx.fill();
			}
		}
	}
}

