var emp_info={
    emp1:{
        name:"tom",
        email:"tom@gmail.com",
        contact:354556454
    },
    emp2:{
        name:"john",
        email:"johan@gmail.com",
        contact:24325345
    },
    emp3:{
        name:"alex",
        gmail:"alex@gmai.com",
        contact:45465656
    }
} 

for(var i in emp_info){
    var div=document.createElement('div'); 
    document.body.appendChild(div);
       div.style.border="2px solid  blue";
        div.style.backgroundColor="lightblue";
        div.style.padding="20px"
        div.style.width="60%";
    // div.innerHTML=i+":"+emp_info[i];


    for(var j in emp_info[i]){ 
     var div1=document.createElement('div'); 
     div.appendChild(div1);
    
     div1.style.border="2px solid  pink";
     div1.style.backgroundColor="yellow";
     div1.style.padding="20px"
     div1.style.width="60%";
     div1.innerHTML=j+":"+emp_info[i][j];
    console.log(div1);
  } 
 

      
}

