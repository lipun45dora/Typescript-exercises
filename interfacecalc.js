var calcu = /** @class */ (function () {
    function calcu() {
    }
    calcu.prototype.sub = function (x, y) {
        var z = x - y;
        return z;
        //.log (z);
    };
    return calcu;
}());
var k = new calcu();
var j = k.sub(24, 3);
console.log(j);
