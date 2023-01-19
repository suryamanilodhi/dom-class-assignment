function days(v){
    var v=v.toLowerCase()
    if(v=="january"||v=="march"||v=="may"||v=="july"||v=="october"||v=="december"){
         
        return 31;
    } 
    else if(v=="april"||v=="june"||v=="august"||v=="september"||v=="november")
        {
            return 30;
        }
        else if(v=="ferbury"){
            return 28;
        }
        else{
            return "wrong data";
        }
        
    } 
    // console.log(days("march")) 
    
function fun1(){
    var v=document.getElementById('input1').value;  
    

    
    document.getElementById('para1').innerHTML="the number of days is  "+days(v);
} 
