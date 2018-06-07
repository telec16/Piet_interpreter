/** Constants **/
var var_size=256;

/** Mnemonique **/
var code = [["_nop",		"_push", 		"_pop"],
			["_add",		"_subtract",	"_multiply"],
			["_divide",		"_mod",			"_not"],
			["_greater",	"_pointer",		"_switch"],
			["_duplicate",	"_roll",		"_in_nb"],
			["_in_chr",		"_out_nb",		"_out_chr"]];

/** Registers **/
var out="";		//Out buffer
var stack = [];	//Stack
var DP = 0;		//Directionnal pointer 	(right, down, left, up)
var CC = 0;		//Codel Chooser			(left, right)
var HC = 0;		//Horizontal Counter
var VC = 0;		//Vertical Counter
var FC = 0; 	//Fail Counter

/** Stack manipulation **/
function _push(v){
	stack.push((v%var_size)||0);
}

function _pop(){
	return stack.pop();
}

/** Arithmetical operation **/
function _add(){
	var a=_pop();
	var b=_pop();
	var r=(a+b)%var_size;
	_push(r);
}

function _substract(){
	var a=_pop();
	var b=_pop();
	var r=(b-a)%var_size;
	_push(r);
}

function _multiply(){
	var a=_pop();
	var b=_pop();
	var r=(a*b)%var_size;
	_push(r);
}

function _divide(){
	var a=_pop();
	var b=_pop();
	var r=(Math.floor(b/a))%var_size;
	_push(r);
}

function _divide(){
	var a=_pop();
	var b=_pop();
	var r=(Math.floor(b/a))%var_size;
	_push(r);
}

function _mod(){
	var a=_pop();
	var b=_pop();
	var r=(b%a)%var_size;
	_push(r);
}

/** Bit operation **/
function _not(){
	var a=_pop();
	var r=!a;
	_push(a);
}

function _greater(){
	var a=_pop();
	var b=_pop();
	var r=b>a;
	_push(r);
}

/** Flow **/
function _pointer(){
	var a=_pop();
	DP += a;
	DP %= 4;
}

function _switch(){
	var a=_pop();
	CC += a;
	CC %= 2;
}

/** Memory manipulation **/
function _duplicate(){
	var a=_pop();
	_push(a);
	_push(a);
}

function _roll(){
	var a=_pop();
	var b=_pop();
	var s=stack.slice(-b);
	a -= s.length * Math.floor(a / s.length);
	s.push.apply(s, s.splice(0, a));
	stack = stack.slice(0,-b);
	stack.push.apply(stack, s);
}

/** IO **/
function _in_nb(){
	var a=prompt("IN (number)")||"0";
	a=(parseInt(a)|0)%var_size;
	_push(a);
}

function _in_chr(){
	var a=prompt("IN (character)")||"a";
	a = a.charCodeAt(0);
	_push(a);
}

function _out_nb(){
	var a=_pop();
	out += a.toString;
}

function _out_chr(){
	var a=_pop();
	out += String.fromCharCode(a);
}


