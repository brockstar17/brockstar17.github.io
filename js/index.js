var nebulae = ["Butterfly", 
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


$( "#NebTab" ).on("click", function(){
  
  
  var random = Math.floor(Math.random() * nebulae.length);
   
  var path = "nebulae/" + nebulae[random] + ".jpg";
  console.log(path);
  document.getElementById("content").innerHTML = "<img id='NebIm' src='" + path + "'></img>";
});