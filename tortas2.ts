/*Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de Sabor, Presentación y Dificultad para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).
 
 ## Funciones a implementar:
 calcularPuntaje(sabor, presentacion, dificultad):
 Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).
 
 determinarGanador():
 Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y
 usa la función calcularPuntaje para determinar la torta con el mayor puntaje.
 
PSEUDOCODIGO:
1ro pedir cant de participantes 
2do pedir el puntaje de cada categoría 
3ro validar q el puntaje esta dentro del rango [1~5]
4to calcular puntaje total 
5to Repetir la operación por cada participante 
6to determinar cual fue el mayor puntaje*/

import * as rds from "readline-sync";
let cantParticipantes:number=rds.questionInt ("Indique la cantidad de concursantes: ");
console.log("la cantidad de concursantes son : "+ cantParticipantes);
console.log("Ahora le vamos a pedir su valoracion en cada criterio de evaluacion");
console.log("Sabor, Dificultad, Presentacion, con 5 como maximo y 1 como minimo");
let puntajeValido:boolean=true;
let i:number=1
let mayorPuntaje:number=1
let sumarPuntaje:number=1
let ganador:number=0
while(puntajeValido=true && i<=cantParticipantes){// valida el puntaje y la cantidad de iteraciones.
    let sabor:number=rds.questionInt("indique el puntaje obtenido para el sabor: ")
    let dificultad:number=rds.questionInt("indique el puntaje obtenido para la dificultad: ")
    let presentacion:number=rds.questionInt("indique el puntaje obtenido para la presentacion: ")
        if((1<=sabor) && (sabor<=5) && (1<=presentacion) && (presentacion<=5) && (1<=dificultad) && (dificultad<=5)){
        sumarPuntaje=sabor + presentacion + dificultad;
        console.log("El puntaje del participante " + i + " es :" + sumarPuntaje);
                puntajeValido=false;   
                if (sumarPuntaje!=mayorPuntaje && mayorPuntaje<sumarPuntaje){
                    mayorPuntaje=sumarPuntaje;
                    ganador=i;                
                ;}else if(sumarPuntaje==mayorPuntaje){
                    console.log("hay empate");                    
                }
        }else  {
                console.log("Los valores deben ser entre 1 y 5, ingreselos nuevamente respetando ese rango.");
                puntajeValido=true;
                 i--;    //hace que no se tome en cuenta esta iteracion, por lo que todos los participantes tendran una puntuacion valida.
        }   
    i++   

}
console.log("Ganandor participante "+ ganador  +" con " + mayorPuntaje + " puntos");
    


