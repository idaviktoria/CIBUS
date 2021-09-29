var dager_i_maaned = function(maaned,aar) {
	return new Date(aar, maaned, 0).getDate();
}

function dager_liste(){
	var i;
	var out="";
	var d = new Date();
	var antall_dager = dager_i_maaned(d.getMonth()+1,d.getFullYear());
	var br="";

	for(i=1; i<antall_dager+1; i++){
		if (i%7==1 && i !== 1){
			out+='<li>'+i+'</li><br>';
			br+="<br>";
		}else{
			out+='<li>'+i+'</li>';
		}
	}
	document.getElementById("id_kalender").innerHTML=out+br;
}

dager_liste();