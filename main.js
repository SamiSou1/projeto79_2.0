menuListArray = ["Pizza Vegetariana",
                    "pizza de frango",
                    "pizza portuguesa",
                    "pizza quatro queijos",                 
                    "pizza de calabreza",
                    "pizza estravaganza"],
                     //adicionar mais itens
                    

function getMenu(){
    var htmldata="";
 menuListArray.sort();
 for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>'
 }
 document.getElementById(displaymMnu).innerHTML = htmldata;
} 
//Completar o código,

function addItem(){

 var htmldata="";
  var imgtags='id=<img id-"im1" src="images/pizzaImg.png"/>' 
  var item=document.getElementById("addItem").value;
  menulistArray.sort();
  htmldata="" 
  for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menulistArray[i]+'<br>';
  }
 var item=document.getElementById("addItem").value;
 //Completar o código

}

function addTop(){
    var item=document.getElementById("addItem").value;
     menuListArray.push(item); 
     addItem();

//Completar o código
}