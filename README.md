# Rick and Morty Location Explorer

Una aplicación React que permite explorar ubicaciones y personajes del universo de Rick and Morty utilizando la API oficial.

## 🚀 Características

- Exploración de ubicaciones: Navega por diferentes dimensiones del universo Rick and Morty
- Información de personajes: Visualiza detalles de los residentes de cada ubicación
- Búsqueda personalizada: Busca ubicaciones específicas por número (1-126)
- Interfaz responsiva: Diseño adaptable para diferentes dispositivos
- Validación de entrada: Validación en tiempo real para búsquedas
- Estados de carga: Indicadores visuales durante las peticiones a la API

## 🛠️ Tecnologías Utilizadas

- React 19.1.1: Biblioteca principal para la interfaz de usuario
- Vite: Herramienta de construcción y desarrollo
- Axios: Cliente HTTP para peticiones a la API
- Jest: Framework de testing
- Testing Library: Utilidades para testing de componentes React
- ESLint: Linter para mantener calidad del código
- CSS3: Estilos personalizados con gradientes y animaciones

## 📋 Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (versión 16 o superior)
- npm (viene incluido con Node.js)

## 🔧 Instalación y Ejecución

### 1. Clonar o descargar el proyecto

# Si tienes el proyecto en un repositorio

git clone <url-del-repositorio>
cd Actividad4

### 2. Instalar dependencias

npm install

### 3. Ejecutar en modo desarrollo

npm run dev

Esto iniciará el servidor de desarrollo. La aplicación estará disponible en:

- URL local: http://localhost:5173
- URL de red: Se mostrará en la terminal para acceso desde otros dispositivos

### 4. Otros comandos disponibles

# Construir para producción

npm run build

# Previsualizar build de producción

npm run preview

# Ejecutar linter

npm run lint

# Ejecutar pruebas

npm test

## 🎮 Cómo usar la aplicación

1. Exploración automática: Al cargar la página, se muestra una ubicación aleatoria
2. Búsqueda específica:
   - Ingresa un número entre 1 y 126 en el campo de búsqueda
   - Presiona "Search" o Enter para buscar
   - La validación te alertará si el número está fuera del rango
3. Visualización:
   - Ve la información de la ubicación (nombre, tipo, dimensión, población)
   - Explora las tarjetas de personajes residentes
   - Cada tarjeta muestra imagen, nombre, estado, origen y episodios

## 🧪 Testing

El proyecto incluye pruebas unitarias para los componentes principales:

- Card.test.jsx: Pruebas del componente de tarjetas de personajes
- InputSearch.test.jsx: Pruebas de validación del componente de búsqueda
- LocationInfo.test.jsx: Pruebas del componente de información de ubicación

Ejecuta las pruebas con:

npm test

## 🌐 API Utilizada

Este proyecto consume la [Rick and Morty API](https://rickandmortyapi.com/):

- Ubicaciones: `https://rickandmortyapi.com/api/location/{id}`
- Personajes: `https://rickandmortyapi.com/api/character/{id}`

## 📱 Diseño Responsivo

La aplicación está optimizada para:

- Desktop: Diseño completo con múltiples columnas
- Tablet: Adaptación de tamaños y espaciados
- Mobile: Layout de una columna con elementos redimensionados

## 🎨 Personalización

Los estilos principales se encuentran en:

- `src/App.css`: Estilos específicos de componentes
- `src/index.css`: Estilos globales

La aplicación utiliza:

- Fuente: Gloria Hallelujah (Google Fonts)
- Colores: Paleta inspirada en Rick and Morty
- Animaciones: Loader con efecto ripple

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto es de uso educativo y utiliza la API pública de Rick and Morty.
