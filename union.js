var value;
value = 3101;
console.log(value);
value = "lipun";
console.log(value);
var val;
val = "lipun";
console.log(val);
val = ["Rupa", "Mini", "Rashmi"];
for (var i = 0; i < val.length; i++) {
    console.log(val[i]);
}
//passsing union value to a function
function d(val) {
    if (typeof val == "string") {
        console.log(val);
    }
    else {
        var i;
        for (i = 0; i < val.length; i++) {
            console.log(val[i]);
        }
    }
}
d("lipun");
d([1, 2, 3]);
