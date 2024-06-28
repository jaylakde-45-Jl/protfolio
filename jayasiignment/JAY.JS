var a,b;
var d=1;
document.querySelector("#button1").onclick =function(){
    var a=parseInt(Math.random()*5+1);
    document.querySelector("#heading").textContent=a;
    const j=document.querySelector("#button1");
    j.disabled=true;
    const s=document.querySelector("#button2");
    s.disabled=false;
}
var c,d;
var count=0;
document.querySelector("#button2").onclick =function(){
var c=parseInt(Math.random()*5+1);
document.querySelector("#box").textContent= c;
b=document.querySelector("#heading").textContent;
if(c==b)
    {
        const y=document.querySelector('#button2');
        y.disabled=true;
    }
   
        count=count+1;
        document.querySelector('#jj').textContent=count;
}


