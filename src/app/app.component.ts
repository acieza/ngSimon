import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hay te fue un ejerccio';
  puntero =0;
  respuesta;
  contadorC = 0;
  contadorI = 0;
  final = false;


  misPreguntas=[
    {
      Pregunta: "Año de descubrimiento de América",
      a: 1682,
      b: 1492,
      c: 2020,
      d: 2012,
      RC: "b"
    },
    {
      Pregunta:" ¿Cuál es la forma correcta de escribir un comentario en HTML?",
      a:"/* */",
      b:" <!–--–>",
      c:" ctrl + Ç",
      d:"<¡–…–>",
      RC:"b"
    }
  ];

long=this.misPreguntas.length;
  pregunta=this.misPreguntas[this.puntero].Pregunta
  respuesta1=this.misPreguntas[this.puntero].a
  respuesta2=this.misPreguntas[this.puntero].b
  respuesta3=this.misPreguntas[this.puntero].c
  respuesta4=this.misPreguntas[this.puntero].d


  siguiente(res:string){
    if(res == this.misPreguntas[this.puntero].RC){
      this.contadorC ++;
    }else{
      this.contadorI ++;
    }
    if(this.misPreguntas.length<=this.puntero+1){
      this.final = true;
    }
    this.puntero++;
    this.pregunta=this.misPreguntas[this.puntero].Pregunta;
    this.respuesta1=this.misPreguntas[this.puntero].a;
    this.respuesta2=this.misPreguntas[this.puntero].b;
    this.respuesta3=this.misPreguntas[this.puntero].c;
    this.respuesta4=this.misPreguntas[this.puntero].d;
  }
}
