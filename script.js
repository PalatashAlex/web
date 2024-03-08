let a;
let b;
a=[1,2,3];
b=4;
// c=a+b;
// console.log(c)
// function sum(var1, var2){
//     var1[0] = 7;
//     return var1+var2;
// }
// console.log(sum(a, b))
// console.log(a);
for(let i = 0; i<a.length; i++){
    console.log(i);
    a[i] += 1;
}
console.log(a)