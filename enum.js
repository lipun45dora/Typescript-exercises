//default enum
var Name;
(function (Name) {
    Name[Name["Lipun"] = 0] = "Lipun";
    Name[Name["rohan"] = 1] = "rohan";
    Name[Name["Abhi"] = 2] = "Abhi";
})(Name || (Name = {}));
console.log(Name);
console.log(Name.Lipun);
//numeric enum
var fruit;
(function (fruit) {
    fruit[fruit["Banana"] = 1] = "Banana";
    fruit[fruit["apple"] = 2] = "apple";
    fruit[fruit["mango"] = 3] = "mango";
})(fruit || (fruit = {}));
console.log(fruit.mango);
//String enum
var str;
(function (str) {
    str["Name"] = "lipun";
    str["age"] = "22";
    str["company"] = "TCS";
})(str || (str = {}));
console.log(str.age);
function show(s) {
    console.log(s);
}
show(str.company);
//heterogeneous enum (contaiin both string and numeric enum
var hetero;
(function (hetero) {
    hetero["name"] = "lipun";
    hetero[hetero["mob"] = 8908160343] = "mob";
    hetero["adress"] = "BBSR";
    hetero[hetero["age"] = 22] = "age";
})(hetero || (hetero = {}));
function view(h) {
    console.log(h);
}
view(hetero.adress);
