import { Component } from '@angular/core';

@Component({
selector:'ng-emp',
templateUrl:'./employee.component.html',
styleUrls:['./employee.component.css']

})


export class EmployeeComponent{
name="Pravin"
show=true
imagepath="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiW0-Xf8IbjAhUWX30KHTxVCUQQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fwww.pexels.com%252Fsearch%252Fbeauty%252F%26psig%3DAOvVaw2YIumvB5SU5DSzDzDMumh2%26ust%3D1561629332760112&psig=AOvVaw2YIumvB5SU5DSzDzDMumh2&ust=1561629332760112"
student:any[]=[
    {roll:1, name:"sachin",add:"Pune",age:30,contact:9404566120},
    {roll:2, name:"pravin",add:"Pune",age:30,contact:9404566120},
    {roll:3, name:"sanket",add:"Pune",age:30,contact:9404566120},
    {roll:4, name:"sandesh",add:"Pune",age:30,contact:9404566120},
    {roll:5, name:"sanjay",add:"Pune",age:30,contact:9404566120},
    ]

    onclick(){
        this.show=!this.show
    }
}