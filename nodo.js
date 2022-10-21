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
    let PesosRecorrido = new Array();
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
    var aux2 = arbol.length;
    var f = true;
    labelterminar: while(aux < arbol.length)
    {
         //los hijos del ultimo del recorrido
        //ver el ultimo valor del recorrido
        //hace un find en el arbol y mira los hijos de ese y decide cual sigue por el menor
        //tercer paso
        
        //si el siguiente nod no es el objetivo
        arbol.forEach(ji => {
            var nodoDos = arbol.find(({ nombre }) => nombre == recorrido[recorrido.length-1]);
            console.log("tertcer paso", nodoDos);
            nodoDos.hijo.forEach(a => {
                console.log("a", a);
                console.log("avd", a.valorDestino);
                recorrido.forEach(ap => {
                    console.log("ap", ap);
                    console.log("apvd", ap.valorDestino);
                    console.log("mirar", ap==a.nombre);
                    if (ap != a.nombre) {
                        console.log("entro");
                        PesosRecorrido.push(a.valorDestino);
                    }
                });
            });
            console.log("PesoRecorrido: ", PesosRecorrido);
            if(PesosRecorrido.length > 1)
            {
                if(!PesosRecorrido[0]==0)
                {
                    valor = PesosRecorrido[0];
                    PesosRecorrido.forEach(j => {
                        if(j<valor)
                        {
                            valor = j;
                        }
                    })
                }
            }else{
                valor = PesosRecorrido[0];
            }
            console.log("valor previo busqueda", valor);
            console.log("hijos previo a buiscar", nodoDos.hijo);
            if(/*valor != 0 &&*/ nodoDos.hijo.nombre!= destino && f==true){
                var b = nodoDos.hijo.find(({ valorDestino }) => valorDestino == valor).nombre;
                console.log("valorate que si entro", b);
                recorrido.push(b);
            }
            
            if(recorrido[recorrido.length-1] == destino && f==true){
                console.log("aqui toy");
                alert("Recorrido, ", recorrido);
                aux=aux2;
                f=false;
            }
  
            PesoRecorrido = [];
            valor = 0;
            console.log("reco22",recorrido);
            document.getElementById("conexiones").innerHTML = recorrido.toString();
        aux+=2; 
        });
    }

    console.log("rra",recorrido.length);
            var ll=recorrido.length-1;
            var f = "X";
           if(ll.nombre != destino && ll.hijo != destino){
            ll.nombre= f;
            recorrido.push(f);
           }
           
    return recorrido;
}

//pal punto muerto
/**
 * if(recorrido[recorrido.length-1] != destino && f==true || aux>= arbol.length){
                    var ll=recorrido.length-1;
                    if(ll.nombre != destino && nodoDos.hijo != destino){
                    f=false;
                    document.getElementById("conexiones").innerHTML = recorrido.toString()+"-> X";
                    return recorrido;
                   } 
                }
 */


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
                      
            //reciclke//
            else{
                
                
                var d = destino;
                recorrido.push(d);
                alert("Recorrido, ", recorrido);
                aux= arbol.length;
                return recorrido;
            }*/
            //recorrido.push(.hijo.find(({ valorDestino }) => valorDestino == valor).nombre);
            /*if(valor == 0)
            {
                
            }
            
            //console.log("hijos previo",nodoDos.hijo.find(({ valorDestino }) => valorDestino == valor).nombre);
            //recorrido.push(nodoDos.hijo.find(({ valorDestino }) => valorDestino == valor).nombre);
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