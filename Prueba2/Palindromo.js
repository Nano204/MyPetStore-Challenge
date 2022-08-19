// Defino la varible de texto original
const textoOriginal =
  "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";

//Construyo una función pára determinar los palindromos que siga siendo útil si cambia el texto original
const hallarPalindromos = (textoOriginal) => {
  //Defino un array donde guardar los palindromos
  const palindromos = [];

  //Establesco un bucle que observe establesca el largo de las palabras
  //El enunciado dice "palíndromos con más de 3 letras" entiendase por eso ">3" y no ">=3"
  for (let count = textoOriginal.length; count > 3; count--) {
    //Establesco un bucle que recorra el texto original
    for (let i = 0; i + count < textoOriginal.length; i++) {
      //Defino una variable elemento a partir de una fracción de la cadena (teniendo en cuenta su largo)
      const element = textoOriginal.slice(i, i + count);
      //Invierto el texto original y lo comparo
      element === element.split("").reverse().join("") &&
        //Pusheo el elemento en el array
        palindromos.push(element);
    }
  }
  //Devuelvo el array
  return palindromos;
};

//Muestro en cosola el resultado haciendo el llamado a la función
console.log(hallarPalindromos(textoOriginal));
