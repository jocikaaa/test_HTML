let a;   // HYPOTENUSE OF A TRIANGLE
let b;
let c;

let r;
let circumference;

document.getElementById("calcButton").onclick = function()
{
    a = document.getElementById("aInputField").value;
    a = Number(a);

    b = document.getElementById("bInputField").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c = Math.floor(c);

    document.getElementById("cLabel").innerHTML = "Side C is Equal to: " + c;
}

document.getElementById("calcButtonCircle").onclick = function()
{
    r = document.getElementById("aInputFieldCircle").value;

    circumference = 2 * r;

    document.getElementById("cLabelCircle").innerHTML = "Circumference is Equal to: " + circumference + "π";
}