import { Component } from "@angular/core";

@Component({
    template:`
    <h1 class="errorMessage" > 404 'd </h1>
    `,
    styles:[`
    .errorMessage{
        margin-top:50px;
        font-size:50px;
        text-align: center;
    }`]
})
export class Error404Component{
    constructor(){

    }
}