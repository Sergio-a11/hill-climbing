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