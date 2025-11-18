// Función asíncrona para cargar los datos
async function cargarProductos() {
    // 🎯 1. Define la URL de tu "API"
    // En GitHub Pages, el archivo JSON estará en la misma ruta
    const urlAPI = './data.json'; 

    const container = document.getElementById('productos-container');

    try {
        // 🚀 2. Usa fetch() para obtener los datos de la URL
        const respuesta = await fetch(urlAPI);
        
        // 🛑 Manejo de errores: si la respuesta no es exitosa (ej. 404)
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        // ✨ 3. Convierte la respuesta a formato JSON
        const productos = await respuesta.json();

        // 🖼️ 4. Recorre los datos y crea el HTML
        productos.forEach(producto => {
            // Crea un nuevo div para la tarjeta de producto
            const card = document.createElement('div');
            card.classList.add('producto-card');

            // Define el contenido HTML de la tarjeta
            card.innerHTML = `
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio.toFixed(2)}</p>
            `;

            // Agrega la tarjeta al contenedor principal
            container.appendChild(card);
        });

    } catch (error) {
        // ⚠️ Muestra un mensaje de error si algo falla
        console.error('Hubo un problema al cargar los productos:', error);
        container.innerHTML = '<p style="color: red;">No se pudieron cargar los datos. Revisa la consola para más detalles.</p>';
    }
}

// 🟢 Llama a la función al cargar la página
cargarProductos();