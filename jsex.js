var obj={
    name:"lipun",
    age:23,
    fun:function()
    {
      console.log(this.name+" " +this.age);
    }
}
var result=obj.fun();
console.log(result);