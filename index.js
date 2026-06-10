function mul(x,y){
    return x * y;
}
console.log(mul(5,5));



let name ="jay";
console.log(`name is: ${name}`);

function greet(name="jay"){
    console.log(`hello ${name}`)
}
greet();




function greet1(){
    console.log("Hello World")
}
console.log(greet())

let add = function(x,y){
    return x+y;
}
console.log(add(5,5));

let sub =(x,y) => { return x-y}
console.log(sub(6,5));


console.log("start");
setTimeout(() =>{
    console.log("middle")
},2000)
console.log("end");



let arr=[1,2,3,4]
arr.map((i)=> console.log (i))

let rarr=[1,2,3,4]
rarr.map((i)=> console.log (i*i))