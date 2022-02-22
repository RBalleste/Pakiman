var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion =[];
coleccion.push(new Pakiman("Cauchin", 45,49,49,65,65,45));
coleccion.push(new Pakiman("Pokacho", 39,52,43,60,50,65));
coleccion.push(new Pakiman("Tocinauro", 44,48,65,50,64,43));

for(var p of coleccion)
{
    p.mostrar();
}


