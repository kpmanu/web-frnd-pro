

    
var dog=document.querySelector("#dog");
document.getElementById("catlist").style.display="none"; 

dog.addEventListener("click",function(){
    document.getElementById("doglist").style.display="block"; 
    document.getElementById("catlist").style.display="none"; 
   
    document.getElementById("doglist").style.opacity="1"; 
    document.getElementById("catlist").style.opacity="0"; 
   
   
})


var cat=document.querySelector("#cat");
cat.addEventListener("click",function(){
    document.getElementById("doglist").style.display="none"; 
    document.getElementById("catlist").style.display="block";
    document.getElementById("doglist").style.opacity="0"; 
    document.getElementById("catlist").style.opacity="1"; 


})



