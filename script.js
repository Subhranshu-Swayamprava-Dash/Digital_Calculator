let i=document.getElementById('inputBox');
let b=document.querySelectorAll('button');
let s="";
let a=Array.from(b);
// a.forEach(button=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
//             s=eval(s);
//             i.value=s;
//         }
//         else if(e.target.innerHTML=='AC'){
//             s="";
//             i.value=s;
//         }
//         else if(e.target.innerHTML=='DEL'){
//             s=s.substring(0,s.length-1);
//             i.value=s;
//         }
//         else{
//         s+=e.target.innerHTML;
//         i.value=s;
//         }
//     })
// })
a.forEach(button);
function button(e){
    e.addEventListener('click',(e)=>{
                if(e.target.innerHTML=='='){
                    s=eval(s);
                    i.value=s;
                }
                else if(e.target.innerHTML=='AC'){
                    s="";
                    i.value=s;
                }
                else if(e.target.innerHTML=='DEL'){
                    s=s.substring(0,s.length-1);
                    i.value=s;
                }
                else{
                s+=e.target.innerHTML;
                i.value=s;
                }
            })
}


