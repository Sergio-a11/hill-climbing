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
            if(valor == 0)
            {
                alert("Recorrido, " + recorrido);
                return recorrido;
            }
            PesoRecorrido = [];
            valor = 0;
            console.log("reco",recorrido);
        }
    });

    var aux = 0;
    while(aux < arbol.length)
    {
         //los hijos del ultimo del recorrido
        //ver el ultimo valor del recorrido
        //hace un find en el arbol y mira los hijos de ese y decide cual sigue por el menor
        //tercer paso
        
        //si el siguiente nod no es el objetivo
        arbol.forEach(j => {
            var nodoDos = arbol.find(({ nombre }) => nombre == recorrido[recorrido.length-1]);
            console.log("tertcer paso", nodoDos);
            nodoDos.hijo.forEach(a => {
                console.log("a", a);
                recorrido.forEach(ap => {
                    console.log("ap", ap);
                    console.log("mirar", ap==a.nombre);
                    if (ap != a.nombre) {
                        console.log("entro");
                        //PesoRecorrido.push(ap.valorDestino);
                    }
                });
            });
           
        aux+=2; 
        });
    }

    console.log("rra",recorrido.length);
            var ll=recorrido.length;
            var f = "x";
           if(ll.nombre != destino && ll.hijo != destino){
            ll.nombre= f;
            recorrido.push(f);
           }
           alert("Recorrido, " + recorrido);
    return recorrido;
}


//restauración
/**
 * nodoDos.hijo.forEach(a => {
                console.log("a", a);
                recorrido.forEach(ap => {
                    console.log("ap", ap);
                    console.log("a.noimbre", a.nombre)
                    console.log(ap==a.nombre);
                    //revisar por entra a uno que ya visstto y es ultimo y pone el valor del que ya visito
                    if (ap != a.nombre) {
                        console.log("entro");
                        PesoRecorrido.push(ap.valorDestino);
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
            console.log("valor previo busqueda", valor)
            console.log("hijos previo a buiscar", i.hijo);
            recorrido.push(i.hijo.find(({ valorDestino }) => valorDestino == valor).nombre);
            if(valor == 0)
            {
                alert("Recorrido, " + recorrido);
                return recorrido;
            }
            PesoRecorrido = [];
            valor = 0;
            console.log("reco22",recorrido);
 */







/**
 * i.hijo.forEach(k => {
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
 */
/**
 *  if (recorrido.nombre != destino) {
                //recorrido.push(i.nombre);
                console.log("recorrido", recorrido.nombre, destino);
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

                
            }else{
                recorrido.push(i.nombre);
            }
            console.log("reco2",recorrido);
            ll.hijo.forEach( h2 => {
                console.log("h2",h2);
                recorrido.forEach(r => {
                    if (r != H2.nombre) {
                        PesoRecorrido.push(k.valorDestino);
                    }
                });
            }
            );
 */