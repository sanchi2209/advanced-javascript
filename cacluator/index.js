var string=""
let button=document.querySelectorAll('.btn');
Array.from(button).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string)
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string=""
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=='B'){
            string=string.substr(0,string.length-1)
            document.querySelector('input').value=string
        }
        else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })

})
