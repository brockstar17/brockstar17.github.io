var nebulae = [
"Butterfly", 
"Cheeseburger", 
"Crab", 
"Eagle", 
"Helix", 
"Hourglass", 
"Medusa", 
"Orion", 
"SoccerBall", 
"Spaghetti", 
"Statue_of_Liberty",
"Twin",
"Veil"];


function getNebula(date){
	if(date >= nebulae.length){
		return getNebula(date - nebulae.length);
	}
	return date;
}

window.onload = function(){
	var path = "nebulae/" + nebulae[val] + ".jpg";
	$("#quickNeb").src = path;
};

$( "#NebTab" ).on("click", function(){
  
  $("#content").empty();
  var d = new Date();
  var val = getNebula(d.getDate());
   
  var path = "../Nebulae/" + nebulae[val] + ".jpg";
  console.log(path);
  document.getElementById("content").innerHTML = "<img id='NebIm' src='" + path + "'></img>";
});

$("#misc").on("click", function(){
	$("#content").empty();
	$(".hideL").clone().removeClass("hideL").appendTo("#content");
	
});

$("#program").on("click", function(){
	$("#content").empty();
	$(".program").clone().removeClass("program").appendTo("#content");
});

$("#about").on("click", function(){
	$("#content").empty();
	$(".about").clone().removeClass("about").appendTo("#content");
	$(".about2").clone().removeClass("about2").appendTo("#content");
});
