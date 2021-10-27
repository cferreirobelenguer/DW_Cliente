

<!-- Haz una web que implemente un juego de encontrar un número aleatorio bajo las
premisas que se explican a continuación:

La página calculará un número del 1 al 100
Luego preguntará al usuario por el número
Si el usuario escribe algo que no es un número, se indica error
Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego
Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es
Si se cancela cualquier cuadro, se cancela el juego
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adivinar juego</title>
</head>
<body>
    
    <script>
        function adivinarNumero(){
            var acertado=false;
            var numero=Math.floor(Math.random()*(100-1)+1);
            console.log(numero);
            
        while(!acertado==true){
            var numeroUsuario=prompt("Introduzca un número");
            if(numeroUsuario==null){
                alert("Error no ha introducido número");
                break;
            }
            if(numeroUsuario==""){
                alert("Error no ha introducido número");
                break;
            }
            if(!isNaN(numeroUsuario)){
                numeroUsuario=parseInt(numeroUsuario);
                    if(numeroUsuario>numero){
                        alert("Ha introducido un número mayor");
                        do{
                            numeroUsuario=parseInt("Introduzca un número");
                        } while(numeroUsuario>numero)
                    }else if(numeroUsuario<numero){
                        alert("Ha introducido un número menor");
                    }else if(numeroUsuario==numero){
                        alert("ENHORABUENA HA ACERTADO EL NÚMERO");
                    }
            
                if(numeroUsuario==numero){
                    alert("HAS ACERTADO");
                    acertado=true;
                    
                }
            }else{
                do{
                    var numeroUsuario=prompt("Error,introduzca un número");
                }while(isNaN(numeroUsuario));
            }
        }
            
        }
        adivinarNumero();
    </script>
</body>
</html>
