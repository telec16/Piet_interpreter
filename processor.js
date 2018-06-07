
function cycle(hueDiff, lumDiff){
	
	eval(code[hueDiff][lumDiff] + "()");
}

function move(){
	switch(DP){
	case 0: //Right
		if(CC) VC++; 	//Down
		else VC--;		//Up
		break;
		
	case 1: //Down
		if(CC) HC--; 	//Left
		else HC++;		//Right
		break;
		
	case 2: //Left
		if(CC) VC--;	//Up
		else VC++; 		//Down
		break;
		
	case 3: //Up
		if(CC) HC++;	//Right
		else HC--; 		//Left
		break;
	}
	
}