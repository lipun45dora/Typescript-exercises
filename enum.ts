//default enum
enum Name
{
    Lipun,
    rohan,
    Abhi
}
console.log(Name);
console.log(Name.Lipun);
//numeric enum
enum fruit
{
    Banana=1,
    apple,
    mango
}
console.log(fruit.mango);
//String enum
enum str
{
    Name='lipun',
    age='22',
    company='TCS'
}
console.log(str.age);
function show(s:str):void
{
    console.log(s);
}
show(str.company);
//heterogeneous enum (contaiin both string and numeric enum
enum hetero
{
    name="lipun",
    mob=8908160343,
    adress="BBSR",
    age=22
}
function view(h:hetero):void
{
    console.log(h);
}
view(hetero.adress);