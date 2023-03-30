//Define combine data type with "|"
//let data: number | string = 10;
function combine(a:number | string,b:number | string){
   if(typeof a==="number" && b==="number"){
    return a + b;
   }
    else{
        return a.toString() + b.toString();
    }
}
console.warn(combine(10,20))

// console.warn(combine("Hitesh","Rawat"))