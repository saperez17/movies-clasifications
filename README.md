# movies-clasifications
<h1>Instrucciones</h1>
Para accede a la pagina web que permite realizar las operacion CRUD de peliculas y clasificaciones se puede acceder a la siguiente direccion:
https://movie-classification-api.herokuapp.com/

<h2>Instalacion</h2>
Para instalar y correr el proyecto de forma local se debe:
<ol>
  <li>Descargar el codigo fuente de este repositorio</li>
  <li>Desde el directorio raiz ejectuar npm i para instalar todas las dependencias necesarias</li>
  <li>Luego ejectuar nodemon app.js para correr el servidor local</li>
  <li>Desde el navegador ingresar la siguiente URL http://127.0.0.1:8000/</li>
  </ol>
<h2>Wordpress shortcode plugin</h2>
El codigo contenido en el archivo functions.php contiene el codigo fuente del shorcode. Este se debe agregar al archivo functions.php del proyecto wordpress. Luego de esto es
posible utilizarlo de la forma: [holamundo] -> <h1>Hola Mundo</h1>

<h2>REST API</h2>
<ul>
  <li>GET /movies: Retrieves all movies</li>
  <li>GET /clasifications: Retrieves all clasifications</li>
  <li>POST /movies: Register a new movie</li>
  <li>POST /clasifications: Register a new clasification</li>
  <li>PATCH /movies: Update movie given Id</li>
  <li>PATCH /clasifications: Update clasification given Id</li>
  <li>DELETE /movies: Delete movie given Id</li>
  <li>DELETE /clasifications: Delete clasification given Id</li>
<ul>