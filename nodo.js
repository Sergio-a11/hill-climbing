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