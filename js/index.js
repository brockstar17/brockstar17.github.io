


function downloads(){
  
  if(typeof(Storage) !== "undefined") {
        if (localStorage.downloads) {
           localStorage.downloads = Number(localStorage.downloads)+1
         
        } else {
            localStorage.downloads = 1;
        }
        document.getElementById("count").innerHTML = "Downloads: " + localStorage.downloads;
    } else {
     
    } 
 
}

function getDownloads(){
  if(typeof(Storage) !== "undefined") {
    if(localStorage.downloads){
      document.getElementById("count").innerHTML = "Downloads: " + localStorage.downloads;
    }
  }
}