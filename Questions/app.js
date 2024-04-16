ans=[
    `JavaScript is a high level scripting language which is mostly used for frontend development.`
 ]
 let flag=true;
 function answers(i){
     s1=document.querySelector(`#c${i+1} i`);
     if(flag==true){
      let s=document.querySelector(`#c${i+1} .lstAdd`)
      s.innerHTML=
      "<hr>"+ans[0];
       s1.classList.add("active");
       s1.classList.remove("btn");
      flag=false;
     }
     else if(flag==false){
       document.querySelector(`#c${i+1} .lstAdd`).innerHTML='';
       s1.classList.remove("active");
       s1.classList.add("btn");
       flag=true;
     }
 }
 let buttons=document.getElementsByTagName("i");
 for(let i=0;i<buttons.length;i++){
   buttons[i].onclick=function(){
       answers(i);
   }
 }