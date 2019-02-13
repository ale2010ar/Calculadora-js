//Asignación de variables de operacion y especiales.
var pantalla = document.getElementById("display"); //Este elemento muestra los números en pantalla.
var reset =  document.getElementById("on"); //Asignación para la variable Reset.
var raiz =  document.getElementById("raiz"); //Asignación de la variable que calculará la raiz.
var division =  document.getElementById("dividido"); //Asignación de la variable que calculará la división.
var multiplicacion =  document.getElementById("por");//Asignación de la variable que calculará la multiplicación.
var suma =  document.getElementById("mas"); //Asignación de la variable que calculará la suma.
var resta =  document.getElementById("menos"); //Asignación de la variable que calculará la resta.
var igual =  document.getElementById("igual"); //Asignación de la variable igual para resolver las operaciones.
var opuesto = document.getElementById("sign") //Asignación de la variable que creará el opuesto de un número.




x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //esta variable va a guardar el primer número de la operación que vaya a realizar (+-*/)
op="no"; //operación en curso; "no" =  sin operación.



//Mostrar número en pantalla según se va escribiendo:
function numero(xx) {
  if (pantalla.innerHTML.length < 9) {
         if ( xi==1 ) {	// Al ingresar un número se inicia el ciclo de carga.
            pantalla.innerHTML=xx; //Va mostrando el número en pantalla.
            x= xx; //Guarda el número.
            //Si se ingresa la coma decimal estando el 0 en pantalla se ingresa en el siguiente ciclo:
            if (xx==".") {
               pantalla.innerHTML="0."; //Se escribe 0. y se agregan los demás números.
               x=xx; ///Guarda el número.
               coma=1; //Cambia el estado de la variable coma para que no se vuelva a ingresar.
               }
           }
           else { //Si se ingresa la coma decimal después de un número distinto de 0 entra en el siguiente ciclo:
               if (xx=="." && coma==0) {
                   pantalla.innerHTML+=xx; //Al número que está en pantalla se le agrega la coma decimal.
                   x=xx; //Se guarda el número con la coma decimal.
                   coma=1; //Cambia el estado de la variable coma para que no se pueda volver a ingresar.
               }
               //Si se intenta ingresar otra coma decimal, el ciclo no lo permite y sigue con el próximo:
               else if (xx=="." && coma==1) {}
               //En este ciclo se termina de escribir el número que sigue después de la coma decimal:
               else {
                   pantalla.innerHTML+=xx;//Sigue cargando los números
                   x=xx //Guarda el número final con la coma decimal.
               }
            }
            xi=0 //El valor de la variable es 0 para poder seguir agragando números y que no se borren.
         }
         }

         //DECLARACION DE FUNCIONES:
         //Funcion resetear, inicializa todo a 0
         reset.onclick = function resetear() {
             pantalla.innerHTML="0"; //poner pantalla a 0
              x="0"; //reiniciar número en pantalla
              coma=0; //reiniciar estado coma decimal
              ni=0 //indicador de número oculto a 0;
              op="no" //borrar operación en curso.
         }

         //Función para escribir el opuesto de un número:
         opuesto.onclick = function() {
                  x = pantalla.innerHTML;//Guarda el número en pantalla en la variable  x
                  nx=Number(x); //convertir en número
                  nx=-x; //cambiar de signo
                  x=String(nx); //volver a convertir a cadena
                  pantalla.innerHTML=x;//mostrar en pantalla.
                  }

              //Declaración de las funciones suma, resta, multiplicación, división y raiz cuadrada
              //Suma
              suma.onclick = function(){
                 ni = pantalla.innerHTML; //Guarda el primer número en la variable ni para luego realizar la operación elegida.
                 operar = "+"; //Define el tipo de operación que se va a realizar a traves de caso correspondiente.
                 xi=1; //inicializar pantalla.(Cuando presiono un número se empieza a cargar el segundo número operador)
               }
               //Resta
               resta.onclick = function(){
                 ni = pantalla.innerHTML;//Guarda el primer número en la variable ni para luego realizar la operación elegida.
                 operar = "-"; //Define el tipo de operación que se va a realizar a traves de caso correspondiente.
                 xi=1; //inicializar pantalla.(Cuando presiono un número se empieza a cargar el segundo número operador)
               }
               //Multiplicación
               multiplicacion.onclick = function(){
                 ni = pantalla.innerHTML;//Guarda el primer número en la variable ni para luego realizar la operación elegida.
                 operar = "*";//Define el tipo de operación que se va a realizar a traves de caso correspondiente.
                 xi=1; //inicializar pantalla.(Cuando presiono un número se empieza a cargar el segundo número operador)
               }
               //División
               division.onclick = function(){
                 ni = pantalla.innerHTML;//Guarda el primer número en la variable ni para luego realizar la operación elegida.
                 operar = "/"; //Define el tipo de operación que se va a realizar a traves de caso correspondiente.
                 xi=1; //inicializar pantalla.(Cuando presiono un número se empieza a cargar el segundo número operador)
               }
               //Raiz cuadrada
               raiz.onclick = function(){
                 ni = pantalla.innerHTML;//Guarda el número en la variable ni para procesar la raiz cuadrada
                 operar = "r"; //Define el tipo de operación que se va a realizar a traves de caso correspondiente.
                 xi=1; //inicializar pantalla.
                 resolver();//directamente llama a la función resolver para calcular la raiz cuadrada.
               }

               //Aca se guarda el segundo número para resolver las oeraciones.
               igual.onclick = function (){
                 x = pantalla.innerHTML;
                  //Guarda el número en pantalla para luego resolver la operación elegida.
                 resolver(); //Se dispara la función resolvera la operación elegida.
               }

               //Se utiliza la función resolver que va a realizar la operación elegida según sea el caso
                function resolver (){
                  var res = 0; //Se inicia la variable res que va a ser la encargada de guardar el resultado de la operación.

                  switch(operar){ //Se activa un switch que va a realizar la operación elegida según sea el caso.
                  case "+": //Para el caso de la suma realiza la suma de los operandos 'ni' y 'x'
                  res = parseFloat(ni) + parseFloat(x); //Se convierte a número, realiza la operación y la guarda en la variable res.
                    break; //Corta y sale del ciclo.

                  case "-": //Para el caso de la resta realiza la resta de los operandos 'ni' y 'x'
                  res = ni - x; //realiza la operación y la guarda en la variable res.
                    break; //Corta y sale del ciclo.

                  case "*": //Para el caso de la multiplicación realiza la Multiplicación de los operandos 'ni' y 'x'
                  res = ni * x; //realiza la operación y la guarda en la variable res.
                    break; //Corta y sale del ciclo.

                  case "/": //Para el caso de la división realiza la división de los operandos 'ni' y 'x'
                  res = ni / x; //realiza la operación y la guarda en la variable res.
                      break; //Corta y sale del ciclo.
                  case "r": //Para el caso de la división realiza la división de los operandos 'ni' y 'x'
                  res=Math.sqrt(ni);
                        }
                          if(res>9999999){
                            pantalla.innerHTML = res.toExponential(4); //Si el número tiene más de 8 dígitos, devuelve el resultado en notación científica.
                          }else{
                            pantalla.innerHTML = res.toLocaleString('en', {maximumFractionDigits:6, useGrouping:false}) //Muestra el número con un máximo de 6 dígitos
                          }
                       //Muestra el resultado de la operación elegida en pantalla
                       xi=1; //inicializar pantalla. (Si presion algún número se borra el resultado y se visualiza el número elegido en pantalla)
                          }



//CARGA DE EVENTOS DE TECLADO PARA OPERAR CON LA CALCULADORA
document.onkeydown = teclado;
function teclado (e) { //Se crea la función teclado para ingresar los números y funciones por teclado.
         evento = e || window.event;
         tecla=evento.keyCode; //Se carga en la variable tecla el número de código de la tecla presionada.
         //Teclas númericas: se utilizarán dependiendo el código que corresponda y se cargará el número correspondiente a la variable numero que luego se mostrará en pantalla y procesará según corresponda.
         if (tecla==48 || tecla==96) {numero("0")} //Carga del número "0"
         if (tecla==49 || tecla==97) {numero("1")} //Carga del número "1"
         if (tecla==50 || tecla==98) {numero("2")} //Carga del número "2"
         if (tecla==51 || tecla==99) {numero("3")} //Carga del número "3"
         if (tecla==52 || tecla==100) {numero("4")} //Carga del número "4"
         if (tecla==53 || tecla==101) {numero("5")} //Carga del número "5"
         if (tecla==54 || tecla==102) {numero("6")} //Carga del número "6"
         if (tecla==55 || tecla==103) {numero("7")} //Carga del número "7"
         if (tecla==56 || tecla==104) {numero("8")} //Carga del número "8"
         if (tecla==57 || tecla==105) {numero("9")} //Carga del número "9"

         //Teclas especiales:
         if (tecla==110 || tecla==190) {numero(".")} //Carga de coma decimal

         //Tecla suma: realizará la suma de la operación
         if (tecla==107) {
           ni = pantalla.innerHTML; //Guarda el primer número en la variable ni para luego realizar la operación elegida.
           operar = "+"; //Define el tipo de operación que se va a realizar a traves de caso correspondiente.
           xi=1; //inicializar pantalla.(Cuando presiono un número se empieza a cargar el segundo número operador)
         }

         //Tecla resta: realizará la resta de la operación
         if (tecla==109) {
           ni = pantalla.innerHTML;//Guarda el primer número en la variable ni para luego realizar la operación elegida.
           operar = "-"; //Define el tipo de operación que se va a realizar a traves de caso correspondiente.
           xi=1; //inicializar pantalla.(Cuando presiono un número se empieza a cargar el segundo número operador)
         }

         //Tecla multiplicación: realizará la multiplicación de la operación
         if (tecla==106) {
           ni = pantalla.innerHTML;//Guarda el primer número en la variable ni para luego realizar la operación elegida.
           operar = "*";//Define el tipo de operación que se va a realizar a traves de caso correspondiente.
           xi=1; //inicializar pantalla.(Cuando presiono un número se empieza a cargar el segundo número operador)
         }

         //Tecla división: realizará la división de la operación
         if (tecla==111) {
           ni = pantalla.innerHTML;//Guarda el primer número en la variable ni para luego realizar la operación elegida.
           operar = "/"; //Define el tipo de operación que se va a realizar a traves de caso correspondiente.
           xi=1; //inicializar pantalla.(Cuando presiono un número se empieza a cargar el segundo número operador)
         }

         //Tecla intro (igual):  resuelve la operación entre dos números
         if (tecla==13) {
           x = pantalla.innerHTML; //Guarda el número en pantalla para luego resolver la operación elegida.
           resolver(); //Se dispara la función resolvera la operación elegida.
         }

         //Tecla supr (suprimir): borra todo y lo deja en 0
         if (tecla==46) {
           pantalla.innerHTML=0; //poner pantalla a 0
            x="0"; //reiniciar número en pantalla
            coma=0; //reiniciar estado coma decimal
            ni=0 //indicador de número oculto a 0;
            op="no" //borrar operación en curso.
          }
         }





//ANIMACIONES DE LA CALCULADORA (ACHICAR Y AGRANDAR IMAGEN TECLAS)

        //Teclas de operación y especiales:
        reset.addEventListener("mousedown",function(){//Animación para tecla reset
            reset.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
        })
        reset.addEventListener("mouseout",function(){
            reset.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
        })

        opuesto.addEventListener("mousedown",function(){//Animación para tecla opuesto
            opuesto.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
        })
        opuesto.addEventListener("mouseout",function(){
            opuesto.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
        })

        raiz.addEventListener("mousedown",function(){//Animación para tecla raiz
                    raiz.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                raiz.addEventListener("mouseout",function(){
                    raiz.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

        suma.addEventListener("mousedown",function(){//Animación para tecla suma
                    suma.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                suma.addEventListener("mouseout",function(){
                    suma.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

        resta.addEventListener("mousedown",function(){//Animación para tecla resta
                    resta.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                resta.addEventListener("mouseout",function(){
                    resta.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

        multiplicacion.addEventListener("mousedown",function(){//Animación para tecla multiplicación
                    multiplicacion.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                multiplicacion.addEventListener("mouseout",function(){
                    multiplicacion.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

        division.addEventListener("mousedown",function(){//Animación para tecla división
                    division.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                division.addEventListener("mouseout",function(){
                    division.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

        igual.addEventListener("mousedown",function(){//Animación para tecla igual
                    igual.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                igual.addEventListener("mouseout",function(){
                    igual.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

        punto.addEventListener("mousedown",function(){//Animación para tecla reset
                    punto.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                punto.addEventListener("mouseout",function(){
                    punto.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

        //Teclas numéricas
                cero.addEventListener("mousedown",function(){//Animación para tecla 0
                    cero.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                cero.addEventListener("mouseout",function(){
                    cero.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

                uno.addEventListener("mousedown",function(){//Animación para tecla 1
                    uno.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                uno.addEventListener("mouseout",function(){
                    uno.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

                dos.addEventListener("mousedown",function(){//Animación para tecla 2
                    dos.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                dos.addEventListener("mouseout",function(){
                    dos.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

                tres.addEventListener("mousedown",function(){//Animación para tecla 3
                    tres.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                tres.addEventListener("mouseout",function(){
                    tres.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

                cuatro.addEventListener("mousedown",function(){//Animación para tecla 4
                    cuatro.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                cuatro.addEventListener("mouseout",function(){
                    cuatro.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

                cinco.addEventListener("mousedown",function(){//Animación para tecla 5
                    cinco.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                cinco.addEventListener("mouseout",function(){
                    cinco.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

                seis.addEventListener("mousedown",function(){//Animación para tecla 6
                    seis.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                seis.addEventListener("mouseout",function(){
                    seis.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

                siete.addEventListener("mousedown",function(){//Animación para tecla 7
                    siete.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                siete.addEventListener("mouseout",function(){
                    siete.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

                ocho.addEventListener("mousedown",function(){//Animación para tecla 8
                    ocho.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                ocho.addEventListener("mouseout",function(){
                    ocho.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })

                nueve.addEventListener("mousedown",function(){//Animación para tecla 9
                    nueve.setAttribute("style","transform:scale(0.85,0.85)")//Se achica la imagen al hacer click
                })
                nueve.addEventListener("mouseout",function(){
                    nueve.setAttribute("style","transform:scale(1,1)")//La imagen vuelve al tamaño normal
                })
