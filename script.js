
const button1 = document.querySelector("#button1");
//add
button1.onclick = function () {
   const div1 = document.createElement("div");
   div1.className = "div1";
   const boxes = document.querySelector(".boxes");
   boxes.appendChild(div1)

   //delete
   const removeDiv1=document.querySelector("#remove1");
   removeDiv1.onclick=function(){
   let divDelete=document.querySelector(".div1")
   divDelete.remove()      
}


}
const button2 = document.querySelector("#button2");
//add
button2.onclick = function () {
   const div2 = document.createElement("div");
   div2.className = "div2";
   const boxes = document.querySelector(".boxes");
   boxes.appendChild(div2)

     //delete
     const removeDiv2=document.querySelector("#remove2");
     removeDiv2.onclick=function(){
     let divDelete=document.querySelector(".div2")
     divDelete.remove()      
  }
  

}
const button3 = document.querySelector("#button3");
//add
button3.onclick = function () {
   const div3 = document.createElement("div");
   div3.className = "div3";
   const boxes = document.querySelector(".boxes");
   boxes.appendChild(div3)

     //delete
     const removeDiv3=document.querySelector("#remove3");
     removeDiv3.onclick=function(){
     let divDelete=document.querySelector(".div3")
     divDelete.remove()      
  }
  

}
const button4 = document.querySelector("#button4");
//add
button4.onclick = function () {
   const div4 = document.createElement("div");
   div4.className = "div4";
   const boxes = document.querySelector(".boxes");
   boxes.appendChild(div4)


       //delete
       const removeDiv4=document.querySelector("#remove4");
       removeDiv4.onclick=function(){
       let divDelete=document.querySelector(".div4")
       divDelete.remove()      
    }

}
