/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
   let tipo;
   let precio;
   let pesoKg;
   let seguir = "si";
   let acumuladorDePeso = 0;
   let precioMascarosLiquidos = 0;
   let flagMasCarosLiquido = 0;
   let masCarosLiquidosMarca= 0;
   let flagMasLivianoSolidos = 0;
   let masLivianosSolidosMarca;
   let pesoMasLivianoSolidos;
   

   do {
     
    tipo = prompt("ingrese el tipo de producto solido o liquido");
    while (!(tipo == "liquido" || tipo == "solido")){
      tipo = prompt("Producto incorrecto ingrese liquido o solido");
    }

    precio = parseFloat(prompt("Ingrese el precio del producto"));
    while ( precio <=0 ||  isNaN(precio)){

      precio = parseFloat(prompt("incorrecto. Ingrese el precio del producto"))
    }
    pesoKg = parseFloat(prompt("ingrese el peso en kg"));
    while (pesoKg <=0 || isNaN(pesoKg)){
      preciokg = prompt("incorrecto ingrese un peso");
    }
    marca= prompt("ingrese la marca del producto");
   

    acumuladorDePeso += pesoKg; 

    switch (tipo) {
      case "líquido":
        if (!(flagMasCarosLiquido) || precio > precioMascarosLiquidos ) {
          precioMascarosLiquidos = precio;
          flagMasCarosLiquido = 0;
          masCarosLiquidosMarca = marca;
        }
        break;
      case "sólido":
        if (!(flagMasLivianoSolidos) || peso < pesoMasLivianoSolidos) {
          pesoMasLivianoSolidos = peso;
          flagMasLivianoSolidos = 0;
          masLivianosSolidosMarca = marca;
        }
    }

    seguir = prompt("¿Desea ingresar otro producto?").toLowerCase();
  } while (seguir == "si");

  alert("A) El peso total es de " + acumuladorDePeso);

  alert("B) La marca de el producto liquido mas cara es de " + masCarosLiquidosMarca + " y cuesta $" + precioMascarosLiquidos);

  alert("C) La marca de el producto solido mas liviano es de " + masLivianosSolidosMarca + " y pesa " + pesoMasLivianoSolidos + "kg");

}

    
    



    


  
