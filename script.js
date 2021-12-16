// const button=document.querySelector("#button");
// button.onclick=function(){


// const div2=document.createElement("div");
// div2.className="ortala" ;
// const baslik2=document.querySelector("#baslik2")
// baslik2.appendChild(div2)

// document.body.appendChild(div2)
// const button4=document.querySelector("#button4");
// button4.onclick=function(){
//    for(let i=0; i<baslik2.length; i++){
//     div2[i].remove();
//    }

// }



// }


// const button2=document.querySelector("#button2");
// button2.onclick=function(){


// const div22=document.createElement("div");
// div22.className="ortala3" ;
// const baslik22=document.querySelector("#baslik22")
// baslik22.appendChild(div22)

// document.body.appendChild(div22)
// }


// const button3=document.querySelector("#button3");
// button3.onclick=function(){


// const div32=document.createElement("div");
// div32.className="ortala4" ;
// const baslik32=document.querySelector("#baslik32")
// baslik32.appendChild(div32)

// document.body.appendChild(div32)
// }





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
