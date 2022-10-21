class Nodo
{
    constructor(nombre, valorDestino, hijo)
    {
        this.nombre = nombre;
        this.valorDestino = valorDestino;
        this.hijo = hijo;
    }
}

arbolin = new Nodo("A",7, new Array(
    [new Nodo("B",6,new Array(
        [new Nodo("D", 3, null)])), 
    new Nodo("C",4,null)]));


function busqueda(inicio, destino, arbol) {
    //busca el nodo de incio en el array
    //mira los hijos de incio arbol.hijo 
    //si el hijo es igual a null es una hoja
    //si tiene varios hijos y uno es null ese ya lo visito
    //el menor valor a destino y sigue por ahi
    //let recorrido = new Array(); 
    //recorrido.push(i.nombre) <- guadra el recorrido en un array
    let recorrido = new Array();
    let PesoRecorrido = new Array();
    let valor = 0;
    arbol.forEach(i => {
        if (i.nombre == inicio) {
            recorrido.push(i.nombre);
            
            i.hijo.forEach(k => {
                console.log("k",k);
                recorrido.forEach(r => {
                    if (r != k.nombre) {
                        PesoRecorrido.push(k.valorDestino);
                    }
                });                
            });
            if(PesoRecorrido.length > 1)
            {
                if(!PesoRecorrido[0]==0)
                {

                    valor = PesoRecorrido[0];
                    PesoRecorrido.forEach(j => {
                        if(j<valor)
                        {
                            valor = j;
                        }
                    })
                }

            }else{
                valor = PesoRecorrido[0];
            }
            console.log("valor",valor);
            console.log("PesoRecorrido",PesoRecorrido);
            recorrido.push(i.hijo.find(({ valorDestino }) => valorDestino == valor).nombre);
            PesoRecorrido = [];
            valor = 0;
            console.log("reco",recorrido);
        } //los hijos del ultimo del recorrido
        //ver el ultimo valor del recorrido
        //hace un find en el arbol y mira los hijos de ese y decide cual sigue por el menor
        else {
            if (i.hijo != destino) {
                //recorrido.push(i.nombre);
                i.hijo.forEach(k => {
                    console.log("k",k);
                    recorrido.forEach(r => {
                        if (r != k.nombre) {
                            PesoRecorrido.push(k.valorDestino);
                        }
                    });                
                });
                if(PesoRecorrido.length > 1)
                {
                    if(!PesoRecorrido[0]==0)
                    {
    
                        valor = PesoRecorrido[0];
                        PesoRecorrido.forEach(j => {
                            if(j<valor)
                            {
                                valor = j;
                            }
                        })
                    }
    
                }else{
                    valor = PesoRecorrido[0];
                }
                console.log("valor",valor);
                console.log("PesoRecorrido",PesoRecorrido);
                recorrido.push(i.hijo.find(({ valorDestino }) => valorDestino == valor).nombre);
                PesoRecorrido = [];
                valor = 0;
                console.log("reco",recorrido);
            }
        }

    });
    return recorrido;
}

let nodosParaVisitar = new Array();
let nodosVisitado = new Array();
let ArbolFinal = [];

function crearArbol2(inicio, objetivo, nodos)
{

    nodosParaVisitar = []; // el nodo
    nodosVisitado = []; // solo el nombre
    nodosVisitado.push(nodos.find(({ nombre }) => nombre == inicio).nombre);
    if(nodosVisitado.length == 1)
    {
        ArbolFinal.push(new Nodo(inicio, nodos.find(({ nombre }) => nombre == inicio).valorDestino), null)
        nodos.find(({ nombre }) => nombre == nodosVisitado[0]).hijo.forEach(i => {
            console.log("🚀 ~ file: nodo.js ~ line 119 ~ nodos.find ~ i", i)
            nodosParaVisitar.push(i);
            if(ArbolFinal[0].hijo == null)
            {
                ArbolFinal[0].hijo = new Array(new Nodo(i.nombre, i.valorDestino, null));

            }else{
                ArbolFinal[0].hijo.push(new Nodo(i.nombre, i.valorDestino, null))
            }
        });
    }

    
    while(nodosParaVisitar.length > 0 || nodosVisitado[nodosVisitado.length-1] != objetivo)
    {
        //primer nodo
        let nodoActual = nodosParaVisitar.shift();
        
        if(nodoActual && !nodosVisitado.includes(nodoActual['nombre']))
        {
            console.log("🚀 ~ file: nodo.js ~ line 126 ~ nodoActual", nodoActual)
            console.log("🚀 ~ file: nodo.js ~ line 132 ~ entro", nodoActual['nombre'])
            
            nodosVisitado.push(nodoActual['nombre']);
            nodos.find(({ nombre }) => nombre == nodoActual['nombre']).hijo.forEach(i => {
                nodosParaVisitar.push(i);
                console.log("🚀 ~ file: nodo.js ~ line 138 ~ nodos.find ~ i", i)
                
                ahondar(ArbolFinal[0].hijo[0], nodoActual['nombre'], i)

            });
        }
    }
    

    console.log(nodosVisitado);
}

function ahondar(nodo, actual, j)
{
    if(nodo["nombre"].includes(actual))
    {
        console.log(nodo.hijo)
        if(nodo.hijo == null)
        {
            nodo.hijo = new Array(new Nodo(j.nombre, j.valorDestino, null));
        }
        else{
            nodo.hijo.push(new Nodo(j.nombre, j.valorDestino, null));
        }
        return;
    }
    else
    {
        console.log(nodo.hijo)
        if(nodo.hijo == null)
        {
            ahondar(nodo, nodo.nombre, nodos.find(({ nombre }) => nombre == nodo.nombre))
            return;
        }
    }

}