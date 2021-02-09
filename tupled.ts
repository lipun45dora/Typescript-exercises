let a=["lipun",234,"Dora"];
//tuple distructuring
let [b,c,d]=a;
console.log(b);
console.log(c);
console.log(d);
//displaying value using loop
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}
//pop and push method
a.push("mahesh");
console.log(a);
a.pop();
console.log(a);