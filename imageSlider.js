/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

     <button onclick="prev()">Previous</button>
     <img id="img" src="images/1.jpg" alt="" width="500" height="500">
     <button onclick="next()">Next</button>


    <script src="imageSlider.js"></script>
    
</body>
</html>  */
  var a = document.querySelector("#img");
  var arr=["images/1.jpg","images/2.jpg","images/3.jpg"];

  var count=0;
function next(){
     count++;
    if(count>=arr.length){
         count=0;
        a.src=arr[count];

    }

    else{
        
        a.src=arr[count];

    }
    




}



function prev(){

    count--;

    if(count<0){ // if we want prev start from last then (count=arr.length -1)
        count=0;
       a.src=arr[count];

   }

   else{
        
    a.src=arr[count];

}



}