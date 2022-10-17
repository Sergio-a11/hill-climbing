let fila;
let columna;
let matriz = new Array();
let nodos = new Array();
let nodoSeleccionado;
let nodoObjetivo;
let nodoInicio;
var primero;
var segundo;

function generarMatriz()
{
    fila = document.getElementById("fila").value;
    columna = document.getElementById("columna").value;
    console.log("🚀 ~ file: app.js ~ line 5 ~ columna", columna)
    console.log("🚀 ~ file: app.js ~ line 3 ~ fila", fila);
    
    let matriz = document.getElementById('matriz');
    let string = `<table>`;
    for(i=1; i<=fila; i++)
    {
        //console.log("🚀 ~ file: app.js ~ line 18 ~ i", i)
        
        string += `<tr>`;
        for(j=1; j<=columna; j++)
        {
            //console.log("🚀 ~ file: app.js ~ line 23 ~ j", j)
            string += `<td><input type="text" class="matriz" onfocus="seleccion(`+i+j+`)" id="`+i+j+`"/></td>`;
        }
        string += `</tr>`;
    }
    string +=`</table>`;
    matriz.innerHTML = string;
    document.getElementById("btnGrafo").disabled = false;
}

function arbol()
{
    for(i=0;i<fila;i++)
    {
        matriz[i] = new Array(columna);
    }
    for(i=1; i<=fila; i++)
    {
        for(j=1; j<=columna; j++)
        {
            matriz[i-1][j-1] = document.getElementById(i+""+j).value;
        }
    }
    console.log("🚀 ~ file: app.js ~ line 44 ~ matriz", matriz)
    obtenerNodos();
    document.getElementById("btnInicio").disabled = false;
    document.getElementById("btnDestino").disabled = false;
    document.getElementById("btnConexion").disabled = false;
}



function seleccion (e)
{
    nodoSeleccionado = document.getElementById(e);
    //console.log("🚀 ~ file: app.js ~ line 49 ~ document.getElementById(e);", document.getElementById(e))
}

function objetivo()
{
    if(nodoSeleccionado.value == '')
    {
        alert("El nodo destino no puede estar vacio");
    }
    else if(nodoObjetivo != null)
    {
        if(confirm("Desea remplazar el nodo objetivo"))
        {
            nodoObjetivo.style.background = "#FFFFFF";
            nodoObjetivo = nodoSeleccionado;
            nodoSeleccionado.style.background = "#FF0000";
            console.log("🚀 ~ file: app.js ~ line 80 ~ nodoInicio", nodoObjetivo)
        }
    }
    else{
        nodoSeleccionado.style.background = "#FF0000";
        nodoObjetivo = nodoSeleccionado;
        console.log("🚀 ~ file: app.js ~ line 56 ~ destinoVar", nodoSeleccionado)
    }
    document.getElementById("btnDistancia").disabled = false;
}

function inicio()
{
    if(nodoSeleccionado.value == '')
    {
        alert("El nodo inicio no puede estar vacio");
    }
    else if(nodoInicio != null)
    {
        if(confirm("Desea remplazar el nodo de inicio"))
        {
            nodoInicio.style.background = "#FFFFFF";
            nodoInicio = nodoSeleccionado;
            nodoSeleccionado.style.background = "#00FF00";
            console.log("🚀 ~ file: app.js ~ line 80 ~ nodoInicio", nodoInicio)
        }
    }
    else{
        
        nodoSeleccionado.style.background = "#00FF00";
        nodoInicio = nodoSeleccionado;
        console.log("🚀 ~ file: app.js ~ line 76 ~ nodoInicio", nodoInicio)
    }
    
}


function obtenerNodos()
{
    nodos = [];
    for(i=0; i<fila; i++)
    {
        for(j=0; j<columna; j++)
        {
            if(matriz[i][j] != '')
            {
                nodos.push(new Nodo(matriz[i][j],0));
            }
        }
    }
}

function conectarNodos()
{
    if(nodoSeleccionado.value == '')
    {
        alert("El nodo no puede estar vacio");
    }
    else{
        
        nodos.forEach(i => {
            if(i.nombre == nodoSeleccionado.value)
            {
                document.getElementById("conexiones").innerHTML = "Selecione el nodo a conetar";
                if(primero != null)
                {
                    nodos.forEach(j=> {
                        if(j.nombre == primero.nombre)
                        {
                            //i=segundo
                            //j=primero
                            //al primero del enlace se le agrega el nodo 2 como hijo
                            //luego al 2 se le agrega al 1 ya que los enlaces son viceversa
                            //se debe hacer un condicional para parar y no devolverse
                            //por el padre y luego hijo infinito
                            console.log("🚀 ~ file: app.js ~ line 149 ~ primero", primero)
                            if(primero.hijo == null)
                            {
                                j.hijo = new Array(i);
                            }else{
                                j.hijo.push(i);
                            }

                            if(i.hijo == null)
                            {
                                i.hijo = new Array(j);
                            }else{
                                i.hijo.push(j);
                            }
                            
                            //posUno es el input tsxt del primer nodo del enlace
                            //nodo sellecionado es el segundo
                            console.log("🚀 ~ file: app.js ~ line 167 ~ nodoSeleccionado", nodoSeleccionado.id)
                           
                        } 
                    })
                    
                    primero = null;
                    segundo = null;
                    document.getElementById("conexiones").innerHTML = "";
                }
                else{
                    primero = i;
                    console.log("🚀 ~ file: app.js ~ line 142 ~ primero", primero)
                    
                }
            }
        });
    }
}

function crearDistancias()
{
    //document.getElementById("btnArbol").disabled = false;
    for(i=1; i<=fila; i++)
    {
        for(j=1; j<=columna; j++)
        {
            if(matriz[i-1][j-1] != '')
            {
                var nodo = document.getElementById(i+""+j)
                if(nodo.id != nodoObjetivo.id)
                {
                    var uno = nodo.id.split("");
                    console.log("uno", uno)
                    var auxDestino = nodoObjetivo.id.split("");
                    console.log("auxDestino", auxDestino)
                    var distanciaColumnas;
                    var distanciaFilas;
                    distanciaColumnas = Math.abs(uno[1]-auxDestino[1]);
                    distanciaFilas = Math.abs(uno[0]-auxDestino[0]);
                    console.log("distanciaColumnas", distanciaColumnas);
                    console.log("distanciaFilas", distanciaFilas);
                    hipotenusa =  Math.round((Math.sqrt(distanciaColumnas+distanciaFilas))*100)/100;
                    console.log("hipotenusa", Math.round((Math.sqrt(distanciaColumnas+distanciaFilas))*100)/100);
                    nodos.find(({nombre})=>nombre == nodo.value).valorDestino = hipotenusa;

                }
                
            }
        }
    }
    console.log(busqueda(nodoInicio.value, nodoObjetivo.value, nodos));
}

/*
function crearArbol()
{
    var arbolParaBusqueda = new Set();
    nodos.forEach(i => {
        if(i.nombre == nodoInicio.value)
        {
            console.log("i",i);
            i.hijo.forEach(j => {
                console.log("j",j);
                j.hijo.forEach(k => {
                    console.log("k",k);
                    if(k.nombre == i.nombre)
                    {
                        console.log("here");
                        //j.hijo.
                    }
                    arbolParaBusqueda.add(i);
                })
                
            });
        }
        else
        {
            arbolParaBusqueda.add(i);
        }
    });
    console.log(arbolParaBusqueda);
    busqueda(nodoInicio.value, nodoObjetivo.value, arbolParaBusqueda);
}
*/
//nodoB = new Array([{"nombre":document.getElementById(27).value, "peso":3,},{"nombre":document.getElementById(74).value, "peso":5}])
//console.log("🚀 ~ file: app.js ~ line 106 ~ nodoB", nodoB[0][0]["nombre"]);

//evaluar que el hijo de su hijo no es si mismo
//nodos[0]["hijo"][0]["hijo"][0]

//TODO boton de reset para la matriz
//TODO validar que destino e inicio no sea iguales
//cuando establezca el destino se establece los valores hasta el destino