interface calc
{
 sub(x:number,y:number):number
}
class calculator implements calc
{
 sub(x:number,y:number):number
 {
   let z= x-y;
   return z;
 }
}