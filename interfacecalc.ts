interface calc
{
 sub(x:number,y:number):number
}
class calcu implements calc
{
    
 sub(x:number,y:number):number
 {
   let z= x-y;
   return z;
   //.log (z);
 }
}
 let k=new calcu();
 let j=k.sub(24,3);
 console.log(j);
