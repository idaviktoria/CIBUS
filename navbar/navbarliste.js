function get_navbar(liste) {
	var out = "";
	var i;
	for(i=0; i<liste.length; i++){
		out+='<li><a href="'+liste[i].url+'">'+liste[i].navn+'</a></li>';
	}
	document.getElementById("id_navbar").innerHTML=out;
}

get_navbar([
{
	"navn":"Hjem",
	"url":"../"
},
{
	"navn":"Om oss",
	"url":"/omoss/omoss.html"
},
{
	"navn":"Kalender",
	"url": "/kalender/kalender.html"

},
{
	"navn":"Styret",
	"url": "/styret/styret.html"
},
{
	"navn":"Statutter",
	"url": "/statutter/statutter.html"
},
{
	"navn":"Arrangement",
	"url": "#arrangement"
}
]);