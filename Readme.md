# 🚀 5 Proyectos Iniciales con React

Este repositorio contiene 5 proyectos didácticos de React que demuestran el uso de diferentes hooks y técnicas de estilos en aplicaciones modernas.

---

## 📋 Tabla de Contenidos

1. [Lista de Tareas - useState y Event Handlers](#1-lista-de-tareas---usestate-y-event-handlers)
2. [Widget de Clima - useEffect y CSS Modules](#2-widget-de-clima---useeffect-y-css-modules)
3. [Selector de Emoji - useRef y CSS Modules con Sass](#3-selector-de-emoji---useref-y-css-modules-con-sass)
4. [Biblioteca de Libros - useContext, React Router y CSS-in-JS Nativo](#4-biblioteca-de-libros---usecontext-react-router-y-css-in-js-nativo)
5. [Buscador - useMemo y Styled Components](#5-buscador---usememo-y-styled-components)

---

## 💡 Conceptos Explicados de Forma Simple

### useState y Event Handlers

**¿Qué es?**  
Imagina que tienes una pizarra donde anotas información que puede cambiar. `useState` es como tener esa pizarra en React. Cada vez que cambias lo que está escrito, React "redibuja" la pantalla para mostrar el nuevo contenido.

**Ejemplo en la vida real:**  
Es como una lista de compras en tu refrigerador:
- Tienes una lista vacía al inicio
- Cada vez que agregas un ítem, la lista se actualiza
- Puedes tachar cosas cuando las compras
- La lista siempre muestra el estado actual

**En el proyecto:**  
Cuando escribes "Comprar leche" en el input y presionas "Agregar", el componente guarda ese texto y lo agrega a tu lista de tareas visible.

---

### useEffect y CSS Modules

**¿Qué es?**  
`useEffect` hace que tu componente reaccione a cambios o realice acciones cuando aparece en pantalla. CSS Modules son como darle un "apellido único" a tus estilos para que no se mezclen con otros.

**Ejemplo en la vida real:**  
Es como una alarma en tu teléfono:
- Cuando abres la app del clima, automáticamente busca el clima actual (efecto inicial)
- Si cambias de ciudad, automáticamente busca el clima de esa nueva ciudad (efecto reactivo)
- El título de tu navegador se actualiza solo para mostrar la ciudad actual

**En el proyecto:**  
Al abrir la app, automáticamente carga el clima de Londres. Cada vez que buscas otra ciudad, se actualiza solo sin que tengas que hacer nada más.

---

### useRef y CSS Modules con Sass

**¿Qué es?**  
`useRef` es como tener el "control remoto directo" de un elemento en la pantalla. A diferencia de useState, no redibuja todo, solo interactúa con ese elemento específico. Sass es CSS con superpoderes (variables, funciones).

**Ejemplo en la vida real:**  
Es como un editor de texto donde insertas un emoji:
- Tienes el cursor en medio de una frase
- Haces click en un emoji
- El emoji se inserta exactamente donde estaba el cursor, no al final
- El cursor sigue ahí, listo para seguir escribiendo

**En el proyecto:**  
Cuando escribes "Hola " y el cursor está después del espacio, al elegir 😊, se inserta ahí: "Hola 😊", no al final del texto. También detecta si haces click fuera del selector para cerrarlo.

---

### useContext, React Router Dom, useNavigate y CSS-in-JS Nativo

**¿Qué es?**  
`useContext` es como un "baúl de información compartida" que todos los componentes pueden acceder sin tener que pasarse la información de mano en mano. React Router es como un mapa de navegación entre páginas. CSS-in-JS nativo es escribir estilos directamente en JavaScript sin instalar nada extra.

**Ejemplo en la vida real:**  
Es como una biblioteca familiar:
- Tienes una estantería compartida (Context) donde todos guardan y sacan libros
- Cada habitación de tu casa es una página diferente (Router)
- Puedes moverte entre habitaciones con puertas (Navigate)
- Cada habitación tiene su propia decoración definida en el mismo lugar (CSS-in-JS)

**En el proyecto:**  
Agregas un libro en la página "Crear", este se guarda en el "baúl compartido", te redirige automáticamente a la página principal y ahí puedes ver el libro que acabas de agregar. Todos los componentes pueden acceder a la lista de libros sin pasar props.

---

### useMemo y Styled Components

**¿Qué es?**  
`useMemo` es como guardar el resultado de un cálculo complejo para no tener que repetirlo cada vez. Styled Components son componentes que ya vienen con sus estilos incorporados, escritos como si fuera CSS normal.

**Ejemplo en la vida real:**  
Es como buscar contactos en tu teléfono:
- Tienes 1000 contactos
- Escribes "Juan" en el buscador
- El teléfono filtra la lista una vez
- Si no cambias nada, no vuelve a filtrar todo otra vez (ahorra trabajo)
- Cada botón y campo de búsqueda tiene su estilo propio definido como componente reutilizable

**En el proyecto:**  
Cuando buscas "Maria", el sistema filtra entre personas, calendarios y emails. El filtrado solo se recalcula si cambias el texto o los datos, no en cada pequeño cambio de la pantalla. Los botones se ven consistentes porque son componentes estilizados reutilizables.

---

## 1. Lista de Tareas - useState y Event Handlers

**Carpeta:** `lista-de-tareas-con-usestate`

### 📝 Descripción
Aplicación de gestión de tareas que permite crear, editar y eliminar tareas pendientes.

### 🔧 Tecnologías Implementadas

#### **useState**
Hook fundamental para manejar el estado local del componente:

```javascript
const [title, setTitle] = useState("Hola Mundo");
const [todos, setTodos] = useState([]);
```

- `title`: Almacena el valor del input de nueva tarea
- `todos`: Array que contiene todas las tareas creadas
- Cada tarea tiene estructura: `{ id, title, completed }`

#### **Event Handlers**
Manejo de eventos para la interacción del usuario:

1. **handleChange**: Captura cambios en el input
   ```javascript
   function handleChange(event) {
     const value = event.target.value;
     setTitle(value);
   }
   ```

2. **handleSubmit**: Crea nueva tarea
   ```javascript
   function handleSubmit(e) {
     e.preventDefault();
     const newTodo = {
       id: crypto.randomUUID(),
       title: title,
       completed: false
     };
     const temp = [...todos];
     temp.unshift(newTodo);
     setTodos(temp);
     setTitle("");
   }
   ```

3. **handleUpdate**: Actualiza el título de una tarea existente
4. **handleDelete**: Elimina una tarea filtrando por ID

### 💡 Conceptos Clave
- Inmutabilidad del estado (uso de spread operator `...`)
- Controlled components (input controlado por estado)
- Paso de funciones como props
- Uso de `crypto.randomUUID()` para IDs únicos

---

## 2. Widget de Clima - useEffect y CSS Modules

**Carpeta:** `widget-de-clima-con-use_effect`

### 📝 Descripción
Widget que muestra información meteorológica de ciudades usando una API externa.

### 🔧 Tecnologías Implementadas

#### **useEffect**
Hook para efectos secundarios y ciclo de vida:

```javascript
// Efecto inicial: carga datos al montar componente
useEffect(() => {
  loadInfo();
}, []); // Array vacío = solo se ejecuta una vez

// Efecto reactivo: actualiza título cuando cambia el clima
useEffect(() => {
  document.title = `weather | ${weather?.location.name ?? ""}`;
}, [weather]); // Se ejecuta cuando weather cambia
```

**Casos de uso implementados:**
- **Montaje inicial**: Carga datos de Londres por defecto
- **Actualización de título**: Sincroniza título del navegador con ciudad actual
- **Llamadas asíncronas**: Fetch a API meteorológica

#### **CSS Modules**
Sistema de estilos con scope local:

```javascript
import styles from "./weatherApp.module.css";

<div className={styles.weatherContainer}>
  <WeatherForm onChangeCity={handleChangeCity} />
</div>
```

**Ventajas implementadas:**
- Estilos con scope local (no colisiones de clases)
- Importación como objetos JavaScript
- Nomenclatura tipo camelCase para acceder a clases
- Mejor mantenibilidad y modularidad

### 💡 Conceptos Clave
- Variables de entorno con `process.env.REACT_APP_*`
- Loading states (componente de carga mientras fetch)
- Optional chaining (`?.`) para acceso seguro a propiedades
- Async/await para peticiones HTTP

---

## 3. Selector de Emoji - useRef y CSS Modules con Sass

**Carpeta:** `selector-de-emoji-con-use_ref`

### 📝 Descripción
Selector de emojis interactivo con buscador que permite insertar emojis en un input manteniendo la posición del cursor.

### 🔧 Tecnologías Implementadas

#### **useRef**
Hook para referencias DOM y valores mutables:

```javascript
// Ref para el input (pasado desde componente padre)
const inputRef = useRef(null);

// Ref para el contenedor del selector
const containerRef = useRef(null);
```

**Usos implementados:**

1. **Manipulación directa del DOM:**
   ```javascript
   const cursorPos = inputRef.current.selectionStart; // Posición del cursor
   const text = inputRef.current.value; // Texto actual
   inputRef.current.focus(); // Enfocar input
   ```

2. **Inserción de emoji en posición del cursor:**
   ```javascript
   const prev = text.slice(0, cursorPos);
   const next = text.slice(cursorPos);
   inputRef.current.value = prev + emoji.symbol + next;
   ```

3. **Detección de clicks fuera del componente:**
   ```javascript
   useEffect(() => {
     window.addEventListener('click', e => {
       if (!containerRef.current.contains(e.target)) {
         setIsOpen(false);
       }
     });
   }, [isOpen]);
   ```

#### **forwardRef**
Permite pasar refs a componentes hijos:
```javascript
export default forwardRef(EmojiPicker);
```

#### **CSS Modules con Sass (.scss)**
Potencia de Sass con scope local de CSS Modules:

```javascript
import styles from "./emojiPicker.module.scss";
```

**Características usadas:**
- Variables Sass
- Nesting de selectores
- Mixins y funciones
- Scope local automático

### 💡 Conceptos Clave
- Referencias mutables vs estado
- Manipulación imperativa del DOM (cuando es necesario)
- Event listeners en window
- forwardRef para componentes reutilizables
- Filtrado y búsqueda en tiempo real

---

## 4. Biblioteca de Libros - useContext, React Router y CSS-in-JS Nativo

**Carpeta:** `biblioteca-de-libros-con-use_context`

### 📝 Descripción
Aplicación completa de gestión de biblioteca personal con rutas, contexto global y estilos inline dinámicos.

### 🔧 Tecnologías Implementadas

#### **useContext**
Gestión de estado global sin prop drilling:

```javascript
// Creación del contexto
const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
  deleteItem: (id) => {}
});

// Provider que envuelve la aplicación
<AppContext.Provider value={{items, createItem, getItem, updateItem, deleteItem}}>
  {children}
</AppContext.Provider>

// Hook personalizado para consumir el contexto
export function useAppContext() {
  return useContext(AppContext);
}
```

**Ventajas:**
- Estado compartido entre componentes sin pasar props
- CRUD completo centralizado
- Mayor limpieza y mantenibilidad del código

#### **React Router Dom**
Navegación entre vistas:

```javascript
import { Route, Routes, BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="create" element={<Create />} />
    <Route path="view/:bookId" element={<View />} />
  </Routes>
</BrowserRouter>
```

**Características:**
- Rutas dinámicas con parámetros (`:bookId`)
- Navegación declarativa
- Componentes específicos por ruta

#### **useNavigate**
Navegación programática:

```javascript
const navigate = useNavigate();

function handleSubmit(e) {
  e.preventDefault();
  store.createItem(newBook);
  navigate("/"); // Redirección a home
}
```

#### **CSS-in-JS Nativo (sin librerías externas)**
Estilos definidos como objetos JavaScript:

```javascript
const inputStyles = {
  formContainer: {
    width: "400px",
    margin: "0 auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    margin: "15px 0",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
  }
};

// Aplicación de estilos
<div style={inputStyles.formContainer}>
  <input style={inputStyles.input} />
</div>
```

**Ventajas:**
- Estilos colocados con el componente
- Sin dependencias externas
- Valores dinámicos con JavaScript
- Type safety con objetos

### 💡 Conceptos Clave
- Patrón Provider/Consumer
- Custom hooks para abstraer lógica
- FileReader API para cargar imágenes
- Switch statements para formularios complejos
- Rutas parametrizadas

---

## 5. Buscador - useMemo y Styled Components

**Carpeta:** `buscador-con-use_memo`

### 📝 Descripción
Buscador universal que filtra entre diferentes tipos de datos (personas, calendario, emails) con optimización de rendimiento.

### 🔧 Tecnologías Implementadas

#### **useMemo**
Optimización mediante memoización de cálculos costosos:

```javascript
const filteredItems = useMemo(
  () => findMatch(items, query),
  [items, query]
);
```

**¿Por qué useMemo?**
- Evita re-calcular filtros en cada renderizado
- Solo recalcula cuando `items` o `query` cambian
- Mejora rendimiento con listas grandes
- Previene trabajo innecesario

**Función de filtrado:**
```javascript
function findMatch(items, query) {
  const res = items.filter(i => {
    return i.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 
           && query.length > 0 
           && query !== " ";
  });
  setResults(res);
  return res;
}
```

#### **Styled Components**
Biblioteca para CSS-in-JS con template literals:

```javascript
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 1px black;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

const SearchBarContainer = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
`;
```

**Características usadas:**
- Sintaxis CSS nativa dentro de template literals
- Pseudo-selectores (`:hover`)
- Componentes estilizados reutilizables
- Estilos con scope automático
- Props dinámicas para estilos condicionales

### 💡 Conceptos Clave
- Diferencia entre useMemo y useCallback
- Cuándo optimizar (listas grandes, cálculos complejos)
- Filtrado case-insensitive
- Categorización de datos
- Template literals para estilos

---

## 🚀 Instalación y Ejecución

Cada proyecto se ejecuta independientemente:

```bash
# Navegar al proyecto deseado
cd nombre-del-proyecto

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

### Notas Especiales

**Widget de Clima:**
Requiere archivo `.env` con las siguientes variables:
```env
REACT_APP_URL=https://api.weatherapi.com/v1/current.json?
REACT_APP_KEY=tu_api_key_aqui
```

---

## 📚 Resumen de Hooks y Técnicas

| Proyecto | Hook Principal | Técnica de Estilos | Característica Extra |
|----------|---------------|-------------------|---------------------|
| Lista de Tareas | useState | CSS tradicional | Event handlers |
| Widget de Clima | useEffect | CSS Modules | API fetch |
| Selector de Emoji | useRef | CSS Modules + Sass | forwardRef |
| Biblioteca | useContext | CSS-in-JS nativo | React Router |
| Buscador | useMemo | Styled Components | Optimización |

---

## 🎯 Objetivos de Aprendizaje

Estos proyectos cubren:

✅ Gestión de estado local y global  
✅ Ciclo de vida y efectos secundarios  
✅ Referencias y manipulación del DOM  
✅ Contexto y patrones de arquitectura  
✅ Optimización de rendimiento  
✅ Navegación y ruteo  
✅ Diferentes aproximaciones a estilos en React  
✅ Integración con APIs externas  
✅ Manejo de formularios  
✅ Event handling avanzado  

---

## 🤝 Contribuciones

Estos proyectos son de carácter educativo. Siéntete libre de usarlos como base para tu aprendizaje de React.

---

## 📄 Licencia

Proyectos educativos de código abierto para la comunidad.