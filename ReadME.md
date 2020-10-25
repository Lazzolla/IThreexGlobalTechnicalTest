Hola! Gracias por tomarse el tiempo de revisar mi código. </br>
<h1>Introducción</h1> </br>
Dentro de este repositorio usted encontrara dos carpetas principales, dentro de /lab-frontend encontrará la aplicación React que corresponde con las especificaciones de la prueba técnica provista. Además en el nivel superior del repo encontrará la carpeta /lab-backend. Esta carpeta incluye la RESTapi que utilicé para el desarrollo de esta prueba y quise ponerla a su disposición. La misma está construida en Node.js con Express.js </br>
<h1>Dockerfiles</h1></br>
Incluí un dockerfile para el frontend como así también para el backend. Para ser sincero, esta es mi primer experiencia con Docker por lo que espero haber entendido bien cuáles eran los requisitos. Ambos archivos dockerfile debieran permitir construir una imagen sin errores.</br>
La variable de entorno para el proyecto React necesaria para suministrar la url del servidor es < REACT_APP_API > esta variable espera un valor como < http://localhost:8080 > Luego, en el archivo /src/_services/barcode.service.js se completa la url agregando el endpoint < /barcode/compareprice/ > </br>
La decisión de construir una URL compuesta se debe a mi interés por mostrar una estructura de proyecto más eficiente que permite reutilizar la url de la RESTapi sin necesidad de reescribir en cada llamada la url base. Si lo desea puede reemplazar la url en /src/_services/barcode.service.js línea 13 por < ‘/’ > para pasar a través de la variable de entorno la url completa. </br>
Para suministrar la variable de entorno, interpreté que debía hacerse a través de la línea de comandos al momento de cargar la imagen en un contenedor.
 Para crear la imagen utilicé el comando:</br>
 < docker build  --tag <yourTagName> . > </br>
Para montar la imagen en un contenedor y pasarle la variable de entorno:</br>
 < docker run -p 3000:3000 --name <yourContainerName> -e REACT_APP_API=<yourRESTapiURL> -d <yourTagName> > </br>
<h1>Lector de código de barras</h1></br>
Para los fines prácticos de este test utilicé un componente React muy sencillo que permite realizar la lectura a través de la cámara del dispositivo. Este componente lee solamente códigos de barras cifrados en UCP-A. Seleccioné esta opción por ser, a mi entender, la más común entre todas las opciones y por no tener una especificación en los requisitos, lo que entiendo, es debido a que no hace realmente a los fines de esta prueba.</br>
<h1>Proyección de la aplicación</h1> </br>
Tomando el ejercicio propuesto, me propuse mostrar una estructura de proyecto que anticipe el desarrollo de una aplicación más compleja. Agregué varios hooks personalizados para manejar inputs, errores y medias queries. La idea detrás de esto es la reutilización de esas lógicas en otros componentes y una mejora de la eficiencia. En el hook de errores (UseHandleErrors.js) utilizo las herramientas que brinda el módulo Axios para capturar errores en todas las solicitudes y respuestas HTTP. La idea es mostrar una estructura de proyecto y no tanto una solución específica. Por lo que de momento la aplicación solo contempla errores relacionados con la variable de entorno especificada en las instrucciones.</br>
Con respecto a los estilos generales. Tomé la decisión de incorporar React-bootstrap al proyecto a los fines de agilizar el desarrollo del ejercicio. No profundicé mucho en el diseño ya que interpreté que lo que se deseaba testear no era necesariamente en esa dirección. Aunque sí me preocupe por que la aplicación fuera responsive.</br>
<h1>Backend</h1> </br>
En la carpeta llamada /lab-backend del repositorio de la aplicación encontrará la RESTapi que construí para la prueba. El servidor corre en el puerto 8080. Usted puede iniciar el servidor clonando el repositorio, luego ejecutando < npm install > y finalmente < npm run start > </br>
Si desea crear una imagen. Incluí también un archivo Dockerfile para tal fin. Utilicé los siguientes comandos para crearla y montarla: </br>
Para crear la imagen: < docker build –tag <yourTagName> .  > </br>
Para montar la image: < docker run –p 8080:80 –name <yourContainerName> -d <yourTagName> > </br>
<h1>Notas finales</h1> </br>
Por último, quiero agradecer por la oportunidad de mostrar mi conocimiento. Espero haber interpretado correctamente las necesidades de esta prueba pero de no ser así, estoy a su disposición para aclarar cualquier decisión que haya tomado y que tal vez no se ajuste a lo pedido o para reforzar conceptos.  




