

/* Función que recibe una palabra en input y si no se repite se 
mete dentro de mapa como clave, si se repite no; 
si se introduce campo vacío en input se muestra el resultado en caja de texto
y se vacía el input*/

globalThis.mapa=new Map();


var contador=0;
function mapaRepeticiones(palabra){
    
    console.log(palabra);
    if(palabra==""){
        document.getElementsByTagName("input")[0].value="";
        console.log(mapa);
        var msg="";
        for([clave,valor] of mapa){
            msg+="Clave: "+clave+" , "+"Valor: "+valor+"\n";
        }
        document.getElementsByName("resultado")[0].value=msg;
    
    }else if(isNaN(palabra)){
        
        if(mapa.get(palabra)==undefined){
            contador=0;
            mapa.set(palabra,1); 
            
        }else{
            
            contador++;
            mapa.set(palabra,contador+1);
        }

    
}
    
    
}
