
const son1=document.getElementById("son1");
const son3=document.getElementById("son3");
const son2=document.getElementById("son2");

const result=document.getElementById("result");

const a=+prompt("1-son kiriting");
const b=+prompt("2-son kiriting");
const c=prompt("Tanlang \n 1) +\n 2) -\n 3) *\n4) /")


son1.textContent="   "+a;
son2.textContent="  "+b;

if(c==1){
    son3.textContent="+";
    result.textContent=a+b
}else if(c==2){
   son3.textContent="-"
     result.textContent=a-b
}else if(c==3){
   son3.textContent="*"
     result.textContent=a*b
}else if(c==4){
   son3.textContent="/"
     result.textContent=a/b
}
