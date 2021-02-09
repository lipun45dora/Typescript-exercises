import {Component,OnInit} from'@angular/core';
@Component({
    selector:"app-login",
    templateUrl:"./login.html",
})
export class Logincomponent implements OnInit
{
    username:String;
    password:string;
    constructor()
    {  }
    ngOnInit(){}
    loginuser()
    {
        if(this.username=="lipun" && thi.password=="3101")
        {
            console.log("login successful");
        }
    }
}