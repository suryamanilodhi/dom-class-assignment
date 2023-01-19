

function triangle(x,y,z){  

    if(x==y&&y==z){
        return "equlateral"
    }
    else if(x==y||y==z||x==z){
        return "isoscles"
    }
    else{
        return "scalane"
    }
}


// var res=triangle(x,y,z); 
// console.log(res);
function fun1(){
var x=document.getElementById('input1').value;
var y=document.getElementById('input2').value;
var z=document.getElementById('input3').value;
document.getElementById('para').innerHTML="The triangle is"+" "+triangle(x,y,z);
}