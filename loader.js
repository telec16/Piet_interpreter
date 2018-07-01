function startFileListener(id){
  document.getElementById(id).addEventListener('change', onFileSelect, false);
}

function onFileSelect(evt) {
	var f = evt.target.files[0];
		
	p = new Image();
	p.src = (window.URL || window.webkitURL).createObjectURL(f);
	p.onload = function(){
		createImgArray(p);
		updateImg();
	}
}

function createImgArray(p){
	var size=prompt("Codel size (pixel) ?")||"11";
	size=(parseInt(size)||11);
	
	w = Math.floor(p.width/size);
	h = Math.floor(p.height/size);
	
	var cnv = document.createElement('canvas');
	var ctx = cnv.getContext('2d');
	cnv.width = p.width;
	cnv.height = p.height;
	ctx.drawImage(p, 0, 0);
	
	img = Array(h).fill(C.w).map(x => Array(w).fill(C.w));
	for(var x=0; x<w; x++){
		for(var y=0; y<h; y++){
			var pp = ctx.getImageData((x+.5)*size, (y+.5)*size, 1, 1).data;
			var hex = ("#" + ("000000" + ((pp[0] << 16) + (pp[1] << 8) + pp[2]).toString(16)).slice(-6)).toUpperCase();
			
			for(color in C){
				if(hex == C[color])
					img[y][x] = C[color];
			}
		}
	}
}

