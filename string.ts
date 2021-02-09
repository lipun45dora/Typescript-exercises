var emp=new String("lipun dora");
console.log(emp);
//String declaration type
let str:string="lipun";//double quote
let str1:string='lipun dora';//single quote
let str2:string="Capgimini";
let str3:string=str1+" works in "+str2;//back ticks
console.log(str+"\n"+str1+"\n"+str3);
//String literal 
type fruit='apple'|'banana'|'orange';
function showfruit(Fruit:fruit):void
{
    console.log(Fruit);
}
showfruit("banana");
//showfruit("Mango"); Mango is not in the lateral
var st = new String( "This is string" ); 
console.log("str.constructor is:" + st.constructor)