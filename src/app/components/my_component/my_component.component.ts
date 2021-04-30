import { Component } from "@angular/core";

@Component({
    selector: 'my_component',
    templateUrl: './my_component.component.html'
})
export class MyComponent{
    public title: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.title = "¡Hola!";
        this.comentario = "Este es un comentario";
        this.year = 2021;

        console.log("El componente funciona");
        console.log(this.title, this.comentario, this.year);
        
    }
}