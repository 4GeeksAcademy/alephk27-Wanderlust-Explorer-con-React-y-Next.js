
# Wanderlust Explorer — App Interactiva con React y Next.js

## Tu reto
Wanderlust Labs es una startup de travel-tech que está construyendo una plataforma para descubrir y guardar experiencias únicas alrededor del mundo: desde tours gastronómicos en Bangkok hasta rutas de vela por el Adriático. Su diseñadora de producto ya ha preparado referencias visuales, y el equipo de ingeniería necesita un desarrollador frontend que dé vida al MVP del explorador.
Tu misión es construir el explorador de experiencias: una aplicación multipágina con React y Next.js donde los usuarios puedan explorar, buscar y filtrar experiencias sin recargar la página. Antes de escribir un solo componente, busca 2 o 3 interfaces reales que admires y que encajen con la estética esperada: una UI de descubrimiento limpia con tarjetas, una barra de búsqueda y un sistema de filtros. Úsalas como referencia de diseño y documéntalas en tu README bajo una sección "Design References".
Tu dataset será un array de 100 experiencias generadas con IA. La PM quiere que la búsqueda y los filtros vivan en la URL para que los usuarios puedan compartir enlaces como /experiences?search=vela&category=adventure&destination=Croatia y aterrizar directamente en una vista prefiltrada.

## Páginas requeridas
•	/ — Home: sección hero con un botón que navega a /experiences
•	/experiences — Explorador: listado completo de tarjetas con barra de búsqueda y al menos dos filtros (categoría y destino). La búsqueda y los filtros activos deben reflejarse en la URL como query parameters y deben prerrellenar los inputs al cargar la página
•	/experiences/[id] — Detalle: información completa de una experiencia, obtenida del dataset local por su ID
•	/favorites — Favoritos: lista de experiencias que el usuario ha marcado como favoritas (guardadas en estado de componente por ahora)
•	/profile — Perfil: página estática con un perfil de usuario simulado y un resumen con el número de favoritos guardados
Comportamiento de la búsqueda
La búsqueda debe filtrar las experiencias cuyo título coincida con el término buscado. Usa una regex case-insensitive para esto: algo como /term/i. El filtro por categoría y destino debe funcionar de forma independiente y combinarse con la búsqueda.
## Dataset
Usa un asistente de código con IA para generar un array de 100 objetos de experiencia. Cada objeto debe tener como mínimo: id, title, description, category (una de: Adventure, Culture, Food, Wellness, Nature), destination (ciudad + país), price, rating e imageUrl (cualquier placeholder). Guárdalo como un fichero TypeScript local.
## Favoritos
Un icono de corazón en cada tarjeta debe activar o desactivar la experiencia en la lista de favoritos del usuario. Los favoritos se guardan en un useState de nivel superior y se pasan hacia abajo como props donde sea necesario. No se requiere persistencia por ahora.
Este es el tipo de funcionalidad que aparece en sprints reales de producto: filtros compartibles por URL, estado manejado desde la URL y composición de componentes. Constrúyelo como algo que pondrías en tu portfolio — porque deberías.
 