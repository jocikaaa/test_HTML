let element;
let shards;
let radius;
let totalShards;
const hoursPerElement = 18;
let hoursLeft;


document.getElementById("calcButton").onclick = function(){
    
    element = document.getElementById("elementInput").value;
    element = Number(element);

    shards = document.getElementById("elementShardInput").value;
    shards = Number(shards);

    radius = document.getElementById("radiusInput").value;
    radius = Number(radius);
    
    totalShards = element * 100 + shards;
    
    

    if(element == 0 && shards == 0)
    {
        document.getElementById("calcText2").style.color = "red";
        document.getElementById("calcText2").innerHTML = "Shards and Element can't be empty!";
    }
    else if(radius <= 0)
    {
        document.getElementById("calcText2").style.color = "red";
        document.getElementById("calcText2").innerHTML = "Radius can't be zero or negative!";
    }
    
    switch(radius){
        case 1:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 1);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 2:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 1.33);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 3:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 1.66);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 4:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 1.99);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 5:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 2.32);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 6:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 2.65);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 7:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 2.98);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 8:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 3.31);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 8:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 3.64);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 9:
            hoursLeft = (((totalShards / 100) * hoursPerElement)/ 3.97);
            hoursLeft = Number(hoursLeft);
            Math.floor(hoursLeft);
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = hoursLeft + "H";
            break;
        case 10:
            document.getElementById("calcText2").style.color = "white";
            document.getElementById("calcText2").innerHTML = "Was too lazy to code 10, also for what do you even need that big radius?";
            break;
    }
    
    


    
    
}
