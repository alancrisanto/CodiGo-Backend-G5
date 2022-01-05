console.log("Hola desde el navegador")

fetch("http://127.0.0.1:5000/productos", {method:"GET"})
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
});

fetch("http://127.0.0.1:5000/productos", {
    method:"POST",
    body: JSON.stringify({
        nombre: "Paneton con harto bromato",
        precio: 17.5,
        disponible: true,
        fecha_vencimiento: "2022-01-30",
    }),
    headers: {
        "Content-Type": "application/json"
    },
})
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
});


axios.get("http://127.0.0.1:5000/productos")
.then ((response) => {
    return response.json;
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})