function add(a,b){
    return a+b;

}
function average(a,b){
    return (a+b)/2;

}
let result = average(add(5,7),add(10,12));
document.getElementById("demo").innerHTML = result;