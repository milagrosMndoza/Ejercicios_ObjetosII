
var assert = require('assert');


//Ejercicio 1 

function Ejercicio1(inicio, fin){
var numInicial = inicio;
var numFinal =fin;

  var objeto = {
    inicial: numInicial,
    final: numFinal,
    calcular: function (){
    var ini = objeto.inicial;
    var fin = objeto.final;
    var sumarNum= (fin-ini +1)*(fin+ini)/2;
    return sumarNum;
      
    }
  }
   
  return objeto.calcular();    
  
}

//Ejercicio 2

function Ejercicio2(nombre, edad, ocupacion, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
  this.genero = genero;
  this.mensajito = function(){
    if(this.edad >= 17 && this.ocupacion == ('Web Developer' || 'Estudiante Laboratoria')&& this.genero == "femenino"){
      return "You're awesome";
    
    }
    else{
      return "upsiii";
    }
  }
  return this.mensajito();
}
var coder = new Ejercicio2("ana", 19, "Web Developer", "femenino");
var coder2 = new Ejercicio2("jose", 20, "Web Developer", "masculino");
var coder3 = new Ejercicio2("ana", 16, 'Estudiante Laboratoriá', "femenino");
//console.log(coder.mensajito());

//Ejercicio 3:
function Ejercicio3(arreglo) {        
var objeto = {};
for (var i in arreglo)  
{
  objeto["propiedad"+ (parseInt(i)+1)+ "-->"]  = arreglo[i];   var str=[];
  var resultado = Object.keys(objeto);
}
  for (var j in arreglo)  
 { 
    str.push(resultado[j]+objeto[resultado[j]]);
 }   
    return str.join(";");
 }
   var prueba1 = [6,9,8,3,2,4];
   var prueba2 = [500, 200, 800];


//Ejercicio 4:

function Ejercicio4(nombre, apellido, edad, genero, ciudad, pais){
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.genero = genero;
this.ciudad = ciudad;
this.pais = pais
this.ficha = function(){
return "Nombre y Apellido: "+ this.nombre
+ " " + this.apellido +"\n"+"Edad: " +this.edad+"\n"+"Pais: " + this.pais;
}
//return ficha();
}

var paciente = new Ejercicio4("Mily", "Mendoza", 20, "femenino","Tacna","Peru");
var paciente2 = new Ejercicio4("José", "Castro", 39, "masculino","Piura","Italia");


describe('Ejercicios Objetos II', function(){
  describe('Ejercicio 1', function(){
      it('Prueba de 1 y 10', function(){
      assert.equal(55, Ejercicio1(1,10));
    });
      it('Prueba de 22 y 30', function(){
      assert.equal(234, Ejercicio1(22,30));
    });
    });
    describe('Ejercicio 2', function(){
      it('Prueba con: ana, 19, Web Developer, femenino', function(){
      assert.equal("You're awesome", coder.mensajito());
    });
      it('Prueba con: jose, 20, Web Developer, masculino', function(){
      assert.equal("upsiii", coder2.mensajito());
  }); 
      it('ana, 16, Estudiante Laboratoria, femenino', function(){
      assert.equal("upsiii", coder3.mensajito());
  }); 
  });   
    describe('Ejercicio 3', function(){
      it('Prueba con:[6,9,8,3,2,4]', function(){
      assert.equal('propiedad1-->6;propiedad2-->9;propiedad3-->8;propiedad4-->3;propiedad5-->2;propiedad6-->4', Ejercicio3(prueba1));
    });
      it('Prueba con:[500, 200, 800]', function(){
      assert.equal('propiedad1-->500;propiedad2-->200;propiedad3-->800', Ejercicio3(prueba2));
    });
    });
    describe('Ejercicio 4', function(){
      it('Prueba con: Mily, Mendoza, 20, femenino, Tacna, Perú', function(){
      assert.deepEqual('Nombre y Apellido: Mily Mendoza\nEdad: 20\nPais: Peru', paciente.ficha());
    });
      it('Prueba con: José, Castro, 39, masculino, Piura, Italia', function(){
      assert.deepEqual('Nombre y Apellido: José Castro\nEdad: 39\nPais: Italia', paciente2.ficha());
    });
     
});
});
  