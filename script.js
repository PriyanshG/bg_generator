
var tex=document.querySelector("h3");
var col=document.querySelectorAll('input[name="colo"]');
var body=document.getElementsByTagName("body")[0];


function add(){
	body.style.background="linear-gradient(to right,"+col[0].value+","+col[1].value+")";
	tex.textContent=body.style.background+";";
}


col[1].addEventListener("input",add);
col[0].addEventListener("input",add)
/*col[0].addEventListener("input",function(){*/
	/*console.log(col[0].value);*/
	/*body.style.background="linear-gradient(to right,"+col[0].value+","+col[1].value+")";*/
/*});*/
