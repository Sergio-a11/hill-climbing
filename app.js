let fila;
let columna;
let matriz = new Array();
let nodoSeleccionado;
let nodoObjetivo;
let nodoInicio;

function test ()
{
    fila = document.getElementById("fila").value;
    columna = document.getElementById("columna").value;
    console.log("🚀 ~ file: app.js ~ line 5 ~ columna", columna)
    console.log("🚀 ~ file: app.js ~ line 3 ~ fila", fila);
    
    let matriz = document.getElementById('matriz');
    let string = `<table>`;
    for(i=1; i<=columna; i++)
    {
        string += `<tr>`;
        for(j=1; j<=fila; j++)
        {
            string += `<td><input type="text" class="matriz" onfocus="seleccion(`+i+j+`)" id="`+i+j+`"/></td>`;

        }
        string += `</tr>`;
    }
    string +=`</table>`;
    matriz.innerHTML = string;
}

function arbol()
{
    for(i=0;i<columna;i++)
    {
        matriz[i] = new Array(fila);
    }
    for(i=1; i<=columna; i++)
    {
        for(j=1; j<=fila; j++)
        {
            matriz[i-1][j-1] = document.getElementById(i+""+j).value;
        }
    }
    console.log("🚀 ~ file: app.js ~ line 44 ~ matriz", matriz)
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
            nodoSeleccionado.style.background = "#00FF00";
            console.log("🚀 ~ file: app.js ~ line 80 ~ nodoInicio", nodoObjetivo)
        }
    }
    else{
        nodoSeleccionado.style.background = "#00FF00";
        nodoObjetivo = nodoSeleccionado;
        console.log("🚀 ~ file: app.js ~ line 56 ~ destinoVar", nodoSeleccionado)
    }
    
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
            nodoSeleccionado.style.background = "#FF0000";
            console.log("🚀 ~ file: app.js ~ line 80 ~ nodoInicio", nodoInicio)
        }
    }
    else{
        
        nodoSeleccionado.style.background = "#FF0000";
        nodoInicio = nodoSeleccionado;
        console.log("🚀 ~ file: app.js ~ line 76 ~ nodoInicio", nodoInicio)
    }
    
}


//TODO boton de reset para la matriz
//TODO validar que destino e inicio no sea iguales