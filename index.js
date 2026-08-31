const express = require("express");
const app = express();
const PORT = 3000; // Puerto en el que escuchará el servidor

// Aquí definiríamos las rutas

//Sabores de pizzas 
app.get("/api/v1/pizzas", (req, res) => {
    const pizzas = [
        {
            id: 1,
            nombre: "Hawaiana", 
            ingredientes: "Piña, Jamon, salchicha"
        },

        {
            id: 2, 
            nombre: "Peperoni", 
            ingredientes: "Peperoni"
        },

        {
            id: 3, 
            nombre: "Mexicana", 
            ingredientes: "Jamon, Aguacate, Frijoles, Salchicha, Chile, Champiñones"
        }, 

        {
            id: 4, 
            nombre: "Pastor", 
            ingredientes: "Pastor, Cebolla, Cilantro"
        }, 

        {
            id: 5, 
            nombre: "Carnes Frias", 
            ingredientes: "Jamon, Salchicha, Pierna, Chorizo"
        }
        ];
    return res.json(pizzas);
});

//Tipo de tanaños
app.get("/api/v1/tamanios", (req, res) => {
    const pizzas = [
        {
            id: 1, 
            Tipo: "Individual", 
            Costo: 60
        },

        {
            id: 2, 
            Tipo: "Chica", 
            Costo: 150
        },

        {
            id: 3, 
            nombre: "Grande", 
            Costo: 250
        },

        {
            id: 4, 
            nombre: "Familiar", 
            ingredientes: 350
        }, 

         {
            id: 5, 
            Tipo: "Jumbo", 
            Costo: 450
        }, 

        {
            id: 6, 
            Tipo: "Rectangular", 
            Costo: 500
        }
        ];
    return res.json(tamanios);
});

//bebidas
app.get("/api/v1/bebidas", (req, res) => {
    const pizzas = [
        {
            id: 1, 
            nombre: "Agua", 
            Precio: 30
        },

        {
            id: 2, 
            nombre: "Coca-cola 2.5L", 
             Precio: 70
        },

        {
            id: 3, 
            nombre: "Sprite 3L", 
             Precio: 60
        },
        
        {
            id: 4, 
            nombre: "Jarritos 2.5L", 
             Precio: 40
        }, 

        {
            id: 4, 
            nombre: "Manzanita Sol", 
             Precio: 60
        }
        ];
    return res.json(bebidas);
});




// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
