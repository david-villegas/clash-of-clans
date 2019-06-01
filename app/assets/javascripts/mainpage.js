// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

///////////////////////////////////////// CALCULATOR /////////////////////////////////////////

document.addEventListener("turbolinks:load", function() {
  console.log('It works! From MainPage');

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Creación de variables extraidos de los botones principales                                                                         //
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var operandoa;
  var operandob;
  var operacion = 0;
  var resultado = document.getElementById("resultado");
  var barbaro = document.getElementById("barbaro");
  var gigante = document.getElementById("gigante");
  var rompeMuros = document.getElementById("rompeMuros");
  var mago = document.getElementById("mago");
  var dragon = document.getElementById("dragon");
  var babyDragon = document.getElementById("babyDragon");
  var dragonElectrico = document.getElementById("dragonElectrico");
  var esbirro = document.getElementById("esbirro");
  var valkiria = document.getElementById("valkiria");
  var bruja = document.getElementById("bruja");
  var lanzaRocas = document.getElementById("lanzaRocas");
  var arquera = document.getElementById("arquera");
  var duende = document.getElementById("duende");
  var globo = document.getElementById("globo");
  var sanadora = document.getElementById("sanadora");
  var pekka = document.getElementById("pekka");
  var minero = document.getElementById("minero");
  var vacio = document.getElementById("vacio");
  var montaPuerco = document.getElementById("montaPuerco");
  var golem = document.getElementById("golem");
  var lavaPops = document.getElementById("lavaPops");
  var golemHielo = document.getElementById("golemHielo");
  var rayo = document.getElementById("rayo");
  var furia = document.getElementById("furia");
  var hielo = document.getElementById("hielo");
  var veneno = document.getElementById("veneno");
  var velocidad = document.getElementById("velocidad");
  var murcielago = document.getElementById("murcielago");
  var vacio2 = document.getElementById("vacio2");
  var reyBarbaro = document.getElementById("reyBarbaro");
  var reinaArquera = document.getElementById("reinaArquera");
  var granCentinela = document.getElementById("granCentinela");
  var curacion = document.getElementById("curacion");
  var salto = document.getElementById("salto");
  var clonacion = document.getElementById("clonacion");
  var terremoto = document.getElementById("terremoto");
  var esqueletos = document.getElementById("esqueletos");
  var limpiar = document.getElementById("limpiar");
  var status = document.getElementById("status");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Creación de variables extraidos de los botones ocultos                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var obarbaro = document.getElementById("obarbaro");
  var ogigante = document.getElementById("ogigante");
  var orompeMuros = document.getElementById("orompeMuros");
  var omago = document.getElementById("omago");
  var odragon = document.getElementById("odragon");
  var obabyDragon = document.getElementById("obabyDragon");
  var odragonElectrico = document.getElementById("odragonElectrico");
  var oesbirro = document.getElementById("oesbirro");
  var ovalkiria = document.getElementById("ovalkiria");
  var obruja = document.getElementById("obruja");
  var olanzaRocas = document.getElementById("olanzaRocas");
  var oarquera = document.getElementById("oarquera");
  var oduende = document.getElementById("oduende");
  var oglobo = document.getElementById("oglobo");
  var osanadora = document.getElementById("osanadora");
  var opekka = document.getElementById("opekka");
  var ominero = document.getElementById("ominero");
  var ovacio = document.getElementById("ovacio");
  var omontaPuerco = document.getElementById("omontaPuerco");
  var ogolem = document.getElementById("ogolem");
  var olavaPops = document.getElementById("olavaPops");
  var ogolemHielo = document.getElementById("ogolemHielo");
  var orayo = document.getElementById("orayo");
  var ofuria = document.getElementById("ofuria");
  var ohielo = document.getElementById("ohielo");
  var oveneno = document.getElementById("oveneno");
  var ovelocidad = document.getElementById("ovelocidad");
  var omurcielago = document.getElementById("omurcielago");
  var ovacio2 = document.getElementById("ovacio2");
  var oreyBarbaro = document.getElementById("oreyBarbaro");
  var oreinaArquera = document.getElementById("oreinaArquera");
  var ogranCentinela = document.getElementById("ogranCentinela");
  var ocuracion = document.getElementById("ocuracion");
  var osalto = document.getElementById("osalto");
  var oclonacion = document.getElementById("oclonacion");
  var oterremoto = document.getElementById("oterremoto");
  var oesqueletos = document.getElementById("oesqueletos");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Creación de variables para el contador                                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var cbarbaro = 0;
  var cgigante = 0;
  var crompeMuros = 0;
  var cmago = 0;
  var cdragon = 0;
  var cbabyDragon = 0;
  var cdragonElectrico = 0;
  var cesbirro = 0;
  var cvalkiria = 0;
  var cbruja = 0;
  var clanzaRocas = 0;
  var carquera = 0;
  var cduende = 0;
  var cglobo = 0;
  var csanadora = 0;
  var cpekka = 0;
  var cminero = 0;
  var cvacio = 0;
  var cmontaPuerco = 0;
  var cgolem = 0;
  var clavaPops = 0;
  var cgolemHielo = 0;
  var crayo = 0;
  var cfuria =0;
  var chielo = 0;
  var cveneno = 0;
  var cvelocidad =0;
  var cmurcielago = 0;
  var cvacio2 = 0;
  var ccuracion = 0;
  var csalto = 0;
  var cclonacion = 0;
  var cterremoto = 0;
  var cesqueletos = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Programando la funcion de los botones principales                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  barbaro.onclick = function(e){resultado.textContent = operacion=operacion + 1 ; (cbarbaro=cbarbaro+1); console.log(cbarbaro);document.getElementById("obarbaro").style.display="block";document.getElementById("obarbaro").value = cbarbaro; lblbarbaro.innerHTML=cbarbaro;if (operacion >=150) {bloquear()};}

  gigante.onclick = function(e){resultado.textContent = operacion=operacion + 5 ; (cgigante=cgigante+1);console.log(cgigante);document.getElementById("ogigante").style.display="block";lblgigante.innerHTML=cgigante;if (operacion >=150) {bloquear()};}

  rompeMuros.onclick = function(e){resultado.textContent = operacion=operacion + 2 ; (crompeMuros=crompeMuros+1);console.log(crompeMuros);document.getElementById("orompeMuros").style.display="block";lblrompeMuros.innerHTML=crompeMuros;if (operacion >=150) {bloquear()};}

  mago.onclick = function(e){resultado.textContent = operacion=operacion + 4 ; (cmago=cmago+1) ;console.log(cmago);document.getElementById("omago").style.display="block";lblmago.innerHTML=cmago;if (operacion >=150) {bloquear()};}

  dragon.onclick = function(e){resultado.textContent = operacion=operacion + 20 ; (cdragon=cdragon+1) ;console.log(cdragon);document.getElementById("odragon").style.display="block";lbldragon.innerHTML=cdragon;if (operacion >=150) {bloquear()};}

  babyDragon.onclick = function(e){resultado.textContent = operacion=operacion + 10 ; (cbabyDragon=cbabyDragon+1);console.log(cbabyDragon);document.getElementById("obabyDragon").style.display="block";lblbabyDragon.innerHTML=cbabyDragon;if (operacion >=150) {bloquear()};}

  dragonElectrico.onclick = function(e){resultado.textContent = operacion=operacion + 30 ; (cdragonElectrico=cdragonElectrico+1);console.log(cdragonElectrico); document.getElementById("odragonElectrico").style.display="block";lbldragonElectrico.innerHTML=cdragonElectrico;if (operacion >=150) {bloquear()};}

  esbirro.onclick = function(e){resultado.textContent = operacion=operacion + 2 ; (cesbirro=cesbirro+1);console.log(cesbirro);document.getElementById("oesbirro").style.display="block";lblesbirro.innerHTML=cesbirro;if (operacion >=150) {bloquear()};}

  valkiria.onclick = function(e){resultado.textContent = operacion=operacion + 8 ; (cvalkiria=cvalkiria+1) ;console.log(cvalkiria);document.getElementById("ovalkiria").style.display="block";lblvalkiria.innerHTML=cvalkiria;if (operacion >=150) {bloquear()};}

  bruja.onclick = function(e){resultado.textContent = operacion=operacion + 12 ; (cbruja=cbruja+1);console.log(cbruja);document.getElementById("obruja").style.display="block";lblbruja.innerHTML=cbruja;if (operacion >=150) {bloquear()};}

  lanzaRocas.onclick = function(e){resultado.textContent = operacion=operacion + 6 ; (clanzaRocas=clanzaRocas+1);console.log(clanzaRocas);document.getElementById("olanzaRocas").style.display="block";lbllanzaRocas.innerHTML=clanzaRocas;if (operacion >=150) {bloquear()};}

  arquera.onclick = function(e){resultado.textContent = operacion=operacion + 1 ; (carquera=carquera+1);console.log(carquera);document.getElementById("oarquera").style.display="block";lblarquera.innerHTML=carquera;if (operacion >=150) {bloquear()};}

  duende.onclick = function(e){resultado.textContent = operacion=operacion + 1 ; (cduende=cduende+1);console.log(cduende);document.getElementById("oduende").style.display="block";lblduende.innerHTML=cduende;if (operacion >=150) {bloquear()};}

  globo.onclick = function(e){resultado.textContent = operacion=operacion + 5 ; (cglobo=cglobo+1);console.log(cglobo);document.getElementById("oglobo").style.display="block";lblglobo.innerHTML=cglobo;if (operacion >=150) {bloquear()};}

  sanadora.onclick = function(e){resultado.textContent = operacion=operacion + 14 ; (csanadora=csanadora+1);console.log(csanadora);document.getElementById("osanadora").style.display="block";lblsanadora.innerHTML=csanadora;if (operacion >=150) {bloquear()};}

  pekka.onclick = function(e){resultado.textContent = operacion=operacion + 25 ; (cpekka=cpekka+1);console.log(cpekka);document.getElementById("opekka").style.display="block";lblpekka.innerHTML=cpekka;if (operacion >=150) {bloquear()};}

  minero.onclick = function(e){resultado.textContent = operacion=operacion + 6 ; (cminero=cminero+1);console.log(cminero);document.getElementById("ominero").style.display="block";lblminero.innerHTML=cminero;if (operacion >=150) {bloquear()};}

  vacio.onclick = function(e){resultado.textContent = operacion=operacion + 0 ; (cvacio=cvacio+1);console.log(cvacio);document.getElementById("ovacio").style.display="block";lblvacio.innerHTML=cvacio;if (operacion >=150) {bloquear()};}

  montaPuerco.onclick = function(e){resultado.textContent = operacion=operacion + 5 ; (cmontaPuerco=cmontaPuerco+1) ;console.log(cmontaPuerco);    document.getElementById("omontaPuerco").style.display="block";lblmontaPuerco.innerHTML=cmontaPuerco;if (operacion >=150) {bloquear()};}

  golem.onclick = function(e){resultado.textContent = operacion=operacion + 30 ; (cgolem=cgolem+1); console.log(cgolem);    document.getElementById("ogolem").style.display="block";lblgolem.innerHTML=cgolem;if (operacion >=150) {bloquear()};}

  lavaPops.onclick = function(e){resultado.textContent = operacion=operacion + 30 ; (clavaPops=clavaPops+1);console.log(clavaPops);document.getElementById("olavaPops").style.display="block";lbllavaPops.innerHTML=clavaPops;if (operacion >=150) {bloquear()};}

  golemHielo.onclick = function(e){resultado.textContent = operacion=operacion + 15 ; (cgolemHielo=cgolemHielo+1);console.log(cgolemHielo);document.getElementById("ogolemHielo").style.display="block";lblgolemHielo.innerHTML=cgolemHielo;if (operacion >=150) {bloquear()};}

  rayo.onclick = function(e){resultado.textContent = operacion=operacion + 10 ; (crayo=crayo+1) ;console.log(crayo);document.getElementById("orayo").style.display="block";lblrayo.innerHTML=crayo;if (operacion >=150) {bloquear()};}

  furia.onclick = function(e){resultado.textContent = operacion=operacion + 10 ; (cfuria=cfuria+1);console.log(cfuria);document.getElementById("ofuria").style.display="block";lblfuria.innerHTML=cfuria;if (operacion >=150) {bloquear()};}

  hielo.onclick = function(e){resultado.textContent = operacion=operacion + 5 ; (chielo=chielo+1);console.log(chielo);document.getElementById("ohielo").style.display="block";lblhielo.innerHTML=chielo;if (operacion >=150) {bloquear()};}

  veneno.onclick = function(e){resultado.textContent = operacion=operacion + 5 ; (cveneno=cveneno+1) ;console.log(cveneno);document.getElementById("oveneno").style.display="block";lblveneno.innerHTML=cveneno;if (operacion >=150) {bloquear()};}

  velocidad.onclick = function(e){resultado.textContent = operacion=operacion + 5 ; (cvelocidad=cvelocidad+1);console.log(cvelocidad);document.getElementById("ovelocidad").style.display="block";lblvelocidad.innerHTML=cvelocidad;if (operacion >=150) {bloquear()};}

  murcielago.onclick = function(e){resultado.textContent = operacion=operacion + 5 ; (cmurcielago=cmurcielago+1);console.log(cmurcielago);document.getElementById("omurcielago").style.display="block";lblmurcielago.innerHTML=cmurcielago;if (operacion >=150) {bloquear()};}

  vacio2.onclick = function(e){resultado.textContent = operacion=operacion + 0 ; (cvacio2=cvacio2+1);console.log(cvacio2);document.getElementById("ovacio2").style.display="block";lblvacio2.innerHTML=cvacio2;if (operacion >=150) {bloquear()};}

  reyBarbaro.onclick = function(e){resultado.textContent = operacion=operacion + 20 ;document.getElementById("oreyBarbaro").style.display="block";document.getElementById("reyBarbaro").disabled=true;if (operacion >=150) {bloquear()};}

  reinaArquera.onclick = function(e){resultado.textContent = operacion=operacion + 20 ;document.getElementById("oreinaArquera").style.display="block";document.getElementById("reinaArquera").disabled=true;if (operacion >=150) {bloquear()};}

  granCentinela.onclick = function(e){resultado.textContent = operacion=operacion + 20 ;document.getElementById("ogranCentinela").style.display="block";document.getElementById("granCentinela").disabled=true;if (operacion >=150) {bloquear()};}

  curacion.onclick = function(e){resultado.textContent = operacion=operacion + 10 ; (ccuracion=ccuracion+1);console.log(ccuracion);document.getElementById("ocuracion").style.display="block";lblcuracion.innerHTML=ccuracion;if (operacion >=150) {bloquear()};}

  salto.onclick = function(e){resultado.textContent = operacion=operacion + 10 ; (csalto=csalto+1);console.log(csalto);document.getElementById("osalto").style.display="block";lblsalto.innerHTML=csalto;if (operacion >=150) {bloquear()};}

  clonacion.onclick = function(e){resultado.textContent = operacion=operacion + 20 ; (cclonacion=cclonacion+1);console.log(cclonacion);document.getElementById("oclonacion").style.display="block";lblclonacion.innerHTML=cclonacion;if (operacion >=150) {bloquear()};}

  terremoto.onclick = function(e){resultado.textContent = operacion=operacion + 5 ; (cterremoto=cterremoto+1);console.log(cterremoto);document.getElementById("oterremoto").style.display="block";lblterremoto.innerHTML=cterremoto;if (operacion >=150) {bloquear()};}

  esqueletos.onclick = function(e){resultado.textContent = operacion=operacion + 5 ; (cesqueletos=cesqueletos+1);console.log(cesqueletos);document.getElementById("oesqueletos").style.display="block";lblesqueletos.innerHTML=cesqueletos;if (operacion >=150) {bloquear()}; }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Programando la funcion de los botones ocultos                                                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Barbaro
  obarbaro.onclick = function(e){resultado.textContent = operacion=operacion - 1 ; (cbarbaro=cbarbaro-1); console.log(cbarbaro) ; if (cbarbaro <= 0)document.getElementById("obarbaro").style.display="none";lblbarbaro.innerHTML=cbarbaro;if (operacion <150) {desbloquear()};}
  //Gigante
  ogigante.onclick = function(e){resultado.textContent = operacion=operacion - 5 ; (cgigante=cgigante-1);console.log(cgigante);if (cgigante <= 0)document.getElementById("ogigante").style.display="none";lblgigante.innerHTML=cgigante;if (operacion <150) {desbloquear()};}
  //Rompe Muros
  orompeMuros.onclick = function(e){resultado.textContent = operacion=operacion - 2 ; (crompeMuros=crompeMuros-1);console.log(crompeMuros);if (crompeMuros <= 0)document.getElementById("orompeMuros").style.display="none";lblrompeMuros.innerHTML=crompeMuros;if (operacion <150) {desbloquear()};}
  //Mago
  omago.onclick = function(e){resultado.textContent = operacion=operacion - 4 ; (cmago=cmago-1) ;console.log(cmago);if (cmago <= 0)document.getElementById("omago").style.display="none";lblmago.innerHTML=cmago;if (operacion <150) {desbloquear()};}
  //Dragon
  odragon.onclick = function(e){resultado.textContent = operacion=operacion - 20 ; (cdragon=cdragon-1) ;console.log(cdragon);if (cdragon <= 0)document.getElementById("odragon").style.display="none";lbldragon.innerHTML=cdragon;if (operacion <150) {desbloquear()};}
  //Baby Dragon
  obabyDragon.onclick = function(e){resultado.textContent = operacion=operacion - 10 ; (cbabyDragon=cbabyDragon-1);console.log(cbabyDragon);if (cbabyDragon <= 0)document.getElementById("obabyDragon").style.display="none";lblbabyDragon.innerHTML=cbabyDragon;if (operacion <150) {desbloquear()};}
  //Dragon Electrico
  odragonElectrico.onclick = function(e){resultado.textContent = operacion=operacion - 30 ; (cdragonElectrico=cdragonElectrico-1);console.log(cdragonElectrico); if (cdragonElectrico <= 0)document.getElementById("odragonElectrico").style.display="none";lbldragonElectrico.innerHTML=cdragonElectrico;if (operacion <150) {desbloquear()};}
  //Esbirro
  oesbirro.onclick = function(e){resultado.textContent = operacion=operacion - 2 ; (cesbirro=cesbirro-1);console.log(cesbirro);if (cesbirro <= 0)document.getElementById("oesbirro").style.display="none";lblesbirro.innerHTML=cesbirro;if (operacion <150) {desbloquear()};}
  //Valkiria
  ovalkiria.onclick = function(e){resultado.textContent = operacion=operacion - 8 ; (cvalkiria=cvalkiria-1) ;console.log(cvalkiria);if (cvalkiria <= 0)document.getElementById("ovalkiria").style.display="none";lblvalkiria.innerHTML=cvalkiria;if (operacion <150) {desbloquear()};}
  //Bruja
  obruja.onclick = function(e){resultado.textContent = operacion=operacion - 12 ; (cbruja=cbruja-1);console.log(cbruja);if (cbruja <= 0)document.getElementById("obruja").style.display="none";lblbruja.innerHTML=cbruja;if (operacion <150) {desbloquear()};}
  //Lanza Rocas
  olanzaRocas.onclick = function(e){resultado.textContent = operacion=operacion - 6 ; (clanzaRocas=clanzaRocas-1);console.log(clanzaRocas);if (clanzaRocas <= 0)document.getElementById("olanzaRocas").style.display="none";lbllanzaRocas.innerHTML=clanzaRocas;if (operacion <150) {desbloquear()};}
  //Arquera
  oarquera.onclick = function(e){resultado.textContent = operacion=operacion - 1 ; (carquera=carquera-1);console.log(carquera);if (carquera <= 0)document.getElementById("oarquera").style.display="none";lblarquera.innerHTML=carquera;if (operacion <150) {desbloquear()};}
  //Duende
  oduende.onclick = function(e){resultado.textContent = operacion=operacion - 1 ; (cduende=cduende-1);console.log(cduende);if (cduende <= 0)document.getElementById("oduende").style.display="none";lblduende.innerHTML=cduende;if (operacion <150) {desbloquear()};}
  //Globo
  oglobo.onclick = function(e){resultado.textContent = operacion=operacion - 5 ; (cglobo=cglobo-1);console.log(cglobo);if (cglobo <= 0)document.getElementById("oglobo").style.display="none";lblglobo.innerHTML=cglobo;if (operacion <150) {desbloquear()};}
  //Sanadora
  osanadora.onclick = function(e){resultado.textContent = operacion=operacion - 14 ; (csanadora=csanadora-1);console.log(csanadora);if (csanadora <= 0)document.getElementById("osanadora").style.display="none";lblsanadora.innerHTML=csanadora;if (operacion <150) {desbloquear()};}
  //Pekka
  opekka.onclick = function(e){resultado.textContent = operacion=operacion - 25 ; (cpekka=cpekka-1);console.log(cpekka);if (cpekka <= 0)document.getElementById("opekka").style.display="none";lblpekka.innerHTML=cpekka;if (operacion <150) {desbloquear()};}
  //Minero
  ominero.onclick = function(e){resultado.textContent = operacion=operacion - 6 ; (cminero=cminero-1);console.log(cminero);if (cminero <= 0)document.getElementById("ominero").style.display="none";lblminero.innerHTML=cminero;if (operacion <150) {desbloquear()};}
  //Vacio
  ovacio.onclick = function(e){resultado.textContent = operacion=operacion - 0 ; (cvacio=cvacio-1);console.log(cvacio);if (cvacio <= 0)document.getElementById("ovacio").style.display="none";lblvacio.innerHTML=cvacio;if (operacion <150) {desbloquear()};}
  //Monta Puercos
  omontaPuerco.onclick = function(e){resultado.textContent = operacion=operacion - 5 ; (cmontaPuerco=cmontaPuerco-1) ;console.log(cmontaPuerco);   if (cmontaPuerco <= 0) document.getElementById("omontaPuerco").style.display="none";lblmontaPuerco.innerHTML=cmontaPuerco;if (operacion <150) {desbloquear()};}
  //Golem
  ogolem.onclick = function(e){resultado.textContent = operacion=operacion - 30 ; (cgolem=cgolem-1); console.log(cgolem); if (cgolem <= 0)document.getElementById("ogolem").style.display="none";lblgolem.innerHTML=cgolem;if (operacion <150) {desbloquear()};}
  //Lava Pops
  olavaPops.onclick = function(e){resultado.textContent = operacion=operacion - 30 ; (clavaPops=clavaPops-1);console.log(clavaPops);if (clavaPops <= 0)document.getElementById("olavaPops").style.display="none";lbllavaPops.innerHTML=clavaPops;if (operacion <150) {desbloquear()};}
  //Golem de Hielo
  ogolemHielo.onclick = function(e){resultado.textContent = operacion=operacion - 15 ; (cgolemHielo=cgolemHielo-1);console.log(cgolemHielo);if (cgolemHielo <= 0)document.getElementById("ogolemHielo").style.display="none";lblgolemHielo.innerHTML=cgolemHielo;if (operacion <150) {desbloquear()};}
  //Hechizo de Rayo
  orayo.onclick = function(e){resultado.textContent = operacion=operacion - 10 ; (crayo=crayo-1) ;console.log(crayo);if (crayo <= 0)document.getElementById("orayo").style.display="none";lblrayo.innerHTML=crayo;if (operacion <150) {desbloquear()};}
  //Hechizo de Furia
  ofuria.onclick = function(e){resultado.textContent = operacion=operacion - 10 ; (cfuria=cfuria-1);console.log(cfuria);if (cfuria <= 0)document.getElementById("ofuria").style.display="none";lblfuria.innerHTML=cfuria;if (operacion <150) {desbloquear()};}
  //Hechizo de Hielo
  ohielo.onclick = function(e){resultado.textContent = operacion=operacion - 5 ; (chielo=chielo-1);console.log(chielo);if (chielo <= 0)document.getElementById("ohielo").style.display="none";lblhielo.innerHTML=chielo;if (operacion <150) {desbloquear()};}
  //Hechizo de Veneno
  oveneno.onclick = function(e){resultado.textContent = operacion=operacion - 5 ; (cveneno=cveneno-1) ;console.log(cveneno);if (cveneno <= 0)document.getElementById("oveneno").style.display="none";lblveneno.innerHTML=cveneno;if (operacion <150) {desbloquear()};}
  //Hechizo de Velocidad
  ovelocidad.onclick = function(e){resultado.textContent = operacion=operacion - 5 ; (cvelocidad=cvelocidad-1);console.log(cvelocidad);if (cvelocidad <= 0)document.getElementById("ovelocidad").style.display="none";lblvelocidad.innerHTML=cvelocidad;if (operacion <150) {desbloquear()};}
  //Hechizo de Murcielagos
  omurcielago.onclick = function(e){resultado.textContent = operacion=operacion - 5 ; (cmurcielago=cmurcielago-1);console.log(cmurcielago);if (cmurcielago <= 0)document.getElementById("omurcielago").style.display="none";lblmurcielago.innerHTML=cmurcielago;if (operacion <150) {desbloquear()};}
  //Vacio2
  ovacio2.onclick = function(e){resultado.textContent = operacion=operacion - 0 ; (cvacio2=cvacio2-1);console.log(cvacio2);if (cvacio2 <= 0)document.getElementById("ovacio2").style.display="none";lblvacio2.innerHTML=cvacio2;if (operacion <150) {desbloquear()};}
  //Rey Barbaro
  oreyBarbaro.onclick = function(e){resultado.textContent = operacion=operacion - 20; document.getElementById("oreyBarbaro").style.display="none";document.getElementById("reyBarbaro").disabled=false;if (operacion <150) {desbloquear()};}
  //Reina Arquera
  oreinaArquera.onclick = function(e){resultado.textContent = operacion=operacion - 20; document.getElementById("oreinaArquera").style.display="none";document.getElementById("reinaArquera").disabled=false;if (operacion <150) {desbloquear()};}
  //Gran Centinela
  ogranCentinela.onclick = function(e){resultado.textContent = operacion=operacion - 20; document.getElementById("ogranCentinela").style.display="none";document.getElementById("granCentinela").disabled=false;if (operacion <150) {desbloquear()};}
  //Hechizo de Curación
  ocuracion.onclick = function(e){resultado.textContent = operacion=operacion - 10 ; (ccuracion=ccuracion-1);console.log(ccuracion);if (ccuracion <= 0)document.getElementById("ocuracion").style.display="none";lblcuracion.innerHTML=ccuracion;if (operacion <150) {desbloquear()};}
  //Hechizo de Salto
  osalto.onclick = function(e){resultado.textContent = operacion=operacion - 10 ; (csalto=csalto-1);console.log(csalto);if (csalto <= 0)document.getElementById("osalto").style.display="none";lblsalto.innerHTML=csalto;if (operacion <150) {desbloquear()};}
  //Hechizo de Clonación
  oclonacion.onclick = function(e){resultado.textContent = operacion=operacion - 20 ; (cclonacion=cclonacion-1);console.log(cclonacion);if (cclonacion <= 0)document.getElementById("oclonacion").style.display="none";lblclonacion.innerHTML=cclonacion;if (operacion <150) {desbloquear()};}
  //Hechizo de Terremoto
  oterremoto.onclick = function(e){resultado.textContent = operacion=operacion - 5 ; (cterremoto=cterremoto-1);console.log(cterremoto);if (cterremoto <= 0)document.getElementById("oterremoto").style.display="none";lblterremoto.innerHTML=cterremoto;if (operacion <150) {desbloquear()};}
  //Hechizo de Esqueletos
  oesqueletos.onclick = function(e){resultado.textContent = operacion=operacion - 5 ; (cesqueletos=cesqueletos-1);console.log(cesqueletos);if (cesqueletos <= 0)document.getElementById("oesqueletos").style.display="none";lblesqueletos.innerHTML=cesqueletos;if (operacion <150) {desbloquear()};}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//colocando los botones ocultos con el estilo osculto                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function ocultar(){
    vacio.style.display="none";
    vacio2.style.display="none";
    obarbaro.style.display="none";
    ogigante.style.display="none";
    orompeMuros.style.display="none";
    omago.style.display="none";
    odragon.style.display="none";
    obabyDragon.style.display="none";
    odragonElectrico.style.display="none";
    oesbirro.style.display="none";
    ovalkiria.style.display="none";
    obruja.style.display="none";
    olanzaRocas.style.display="none";
    oarquera.style.display="none";
    oduende.style.display="none";
    oglobo.style.display="none";
    osanadora.style.display="none";
    opekka.style.display="none";
    ominero.style.display="none";
    ovacio.style.display="none";
    omontaPuerco.style.display="none";
    ogolem.style.display="none";
    olavaPops.style.display="none";
    ogolemHielo.style.display="none";
    orayo.style.display="none";
    ofuria.style.display="none";
    ohielo.style.display="none";
    oveneno.style.display="none";
    ovelocidad.style.display="none";
    omurcielago.style.display="none";
    ovacio2.style.display="none";
    oreyBarbaro.style.display="none";
    oreinaArquera.style.display="none";
    ogranCentinela.style.display="none";
    ocuracion.style.display="none";
    osalto.style.display="none";
    oclonacion.style.display="none";
    oterremoto.style.display="none";
    oesqueletos.style.display="none";
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Boton de Limpiar                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  limpiar.onclick = function(e){resultado.textContent = "";cbarbaro = 0; cgigante = 0;crompeMuros = 0;cmago = 0; cdragon = 0;cbabyDragon = 0;cdragonElectrico = 0;cesbirro = 0;cvalkiria = 0;cbruja = 0;clanzaRocas = 0;carquera = 0;cduende = 0;cglobo = 0;csanadora = 0;cpekka = 0;cminero = 0;cmontaPuerco = 0;cgolem = 0;clavaPops = 0;cgolemHielo = 0;crayo = 0;cfuria =0;chielo = 0;cveneno = 0;cvelocidad =0;cmurcielago = 0;ccuracion = 0;csalto = 0;cclonacion = 0;cterremoto = 0;cesqueletos = 0; operacion=0; cvacio=0; cvacio2=0; ocultar();desbloquear()}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion para bloquear botones si la cantidad de tropas supera los 150 espacios                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function bloquear() {
    status.src="/assets/aguilaActiva.png";
    // status.innerHTML="Aguila Activada";
    barbaro.disabled=true;
    gigante.disabled=true;
    rompeMuros.disabled=true;
    mago.disabled=true;
    dragon.disabled=true;
    babyDragon.disabled=true;
    dragonElectrico.disabled=true;
    esbirro.disabled=true;
    valkiria.disabled=true;
    bruja.disabled=true;
    lanzaRocas.disabled=true;
    arquera.disabled=true;
    duende.disabled=true;
    globo.disabled=true;
    sanadora.disabled=true;
    pekka.disabled=true;
    minero.disabled=true;
    vacio.disabled=true;
    montaPuerco.disabled=true;
    golem.disabled=true;
    lavaPops.disabled=true;
    golemHielo.disabled=true;
    rayo.disabled=true;
    furia.disabled=true;
    hielo.disabled=true;
    veneno.disabled=true;
    velocidad.disabled=true;
    murcielago.disabled=true;
    vacio2.disabled=true;
    curacion.disabled=true;
    salto.disabled=true;
    clonacion.disabled=true;
    terremoto.disabled=true;
    esqueletos.disabled=true;
    reyBarbaro.disabled=true;
    reinaArquera.disabled=true;
    granCentinela.disabled=true;
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion para desbloquear botones si la cantidad de tropas es inferior a los 150 espacios                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function desbloquear(){
    status.src="/assets/aguilaDesactivada.png";
    // status.innerHTML="Aguila Desactivada";
    barbaro.disabled=false;
    gigante.disabled=false;
    rompeMuros.disabled=false;
    mago.disabled=false;
    dragon.disabled=false;
    babyDragon.disabled=false;
    dragonElectrico.disabled=false;
    esbirro.disabled=false;
    valkiria.disabled=false;
    bruja.disabled=false;
    lanzaRocas.disabled=false;
    arquera.disabled=false;
    duende.disabled=false;
    globo.disabled=false;
    sanadora.disabled=false;
    pekka.disabled=false;
    minero.disabled=false;
    vacio.disabled=false;
    montaPuerco.disabled=false;
    golem.disabled=false;
    lavaPops.disabled=false;
    golemHielo.disabled=false;
    rayo.disabled=false;
    furia.disabled=false;
    hielo.disabled=false;
    veneno.disabled=false;
    velocidad.disabled=false;
    murcielago.disabled=false;
    vacio2.disabled=false;
    curacion.disabled=false;
    salto.disabled=false;
    clonacion.disabled=false;
    terremoto.disabled=false;
    esqueletos.disabled=false;
    reyBarbaro.disabled=false;
    reinaArquera.disabled=false;
    granCentinela.disabled=false;
  }

})

///////////////////////////////////////// END CALCULATOR /////////////////////////////////////////
