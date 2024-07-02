function reduce(){
    var amount1,amount2;
    var co1,co2,co3;
    

    if(amount2=document.getElementById("fuelConsumption").value!=""){
        amount1=document.getElementById("fuelConsumption").value;
        amount2=document.getElementById("distance").value;
        co3=(amount2*12.31);
        console.log(co3);
        co3=co3/amount1;
        document.getElementById("result3").innerHTML="Vehicle:    "+Math.round(co3)+" Kg CO2"; 
    }
    
}