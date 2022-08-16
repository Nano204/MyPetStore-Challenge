// Defino la varible de texto original
const textoOriginal =
  "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";

//Construyo una función pára determinar los palindromos que siga siendo útil si cambia el texto original
const hallarPalindromos = (textoOriginal) => {
  //Invierto el texto original para hacer comparaciones
  const textoInvertido = textoOriginal.split("").reverse().join("");
  //Defino un array donde guardar los palindromos
  const palindromos = [];

  //Establesco un bucle que observe establesca el largo de las palabras
  //El enunciado dice "palíndromos con más de 3 letras" entiendase por eso ">3" y no ">=3"
  for (let count = 4; count < textoOriginal.length; count++) {
    //Establesco un bucle que recorra el texto original
    for (let i = 0; i + count < textoOriginal.length; i++) {
      //Defino una variable elemento a partir de una fracción de la cadena (teniendo en cuenta su largo)
      const element = textoOriginal.slice(i, i + count);
      //Condición 1: Pregunto si el elemento no esta contenido en el array
      //Se verifica este Array porque es más corto que el siguiente
      !palindromos.includes(element) &&
        //Condición 2: Pregunto si el elemento esta contenido en la cadena invertida
        textoInvertido.includes(element) &&
        //En caso de que apliquen la dos condiciones anteriores, se añade el elemento al array
        (palindromos.push(element),
        //Se añade el invertido al array directamente con dos fines:
        //1. Posicionarlos juntos
        //2. Detener la busqueda con la primera condición
        palindromos.push(element.split("").reverse().join("")));
    }
  }
  //Devuelvo el array
  return palindromos;
};

//Muestro en cosola el resultado haciendo el llamado a la función
console.log(hallarPalindromos(textoOriginal));
