# Desafío guiado - Tienda de joyas

Este desafío tiene como objetivo desarrollar una API REST para una tienda de joyas llamada My Precious Spa. La API deberá manejar información sobre las joyas disponibles, permitiendo operaciones como filtrado, paginación y ordenamiento.

## Descripción

La tienda de joyas My Precious Spa desea actualizar su aplicación de escritorio a una moderna API REST para gestionar la información de sus productos. Utilizarás un archivo de apoyo que contiene un arreglo de objetos con los detalles de las joyas.

## Requisitos

### 1. Ruta GET `/joyas`

Crear una ruta que devuelva todas las joyas almacenadas en la base de datos en formato HATEOAS. La respuesta debe incluir enlaces relacionados con las joyas y la API.

### 2. Ruta GET `/joyas/categoria/:categoria`

Crear una ruta que devuelva solo las joyas correspondientes a la categoría proporcionada en el parámetro de la ruta.

### 3. Ruta GET `/joyas` con Filtrado

Crear una ruta que permita filtrar las joyas por diferentes campos. La filtración debe ser posible mediante el uso de Query Strings.

### 4. Manejo de Error para ID No Existente

Crear una ruta que devuelva un mensaje de error en formato JSON cuando se consulte un ID de joya que no exista en la base de datos.

### 5. Paginación de Joyas

Implementar la paginación de joyas usando Query Strings para especificar el número de página y el límite de resultados por página.

### 6. Ordenamiento de Joyas

Permitir el ordenamiento de las joyas por su valor usando Query Strings para especificar el orden ascendente o descendente.

## Autor

Este proyecto fue desarrollado por **Valeria Torrealba**.
