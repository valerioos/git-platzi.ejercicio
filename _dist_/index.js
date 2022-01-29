/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

 const baseUrl = "https://platzi-avo.vercel.app/api/avo";

 const appNode = document.querySelector("#app")

//web api

window.fetch(baseUrl)

.then((respuesta) => respuesta.json())

.then((responseJson) => {
    const todosLosItems = [];

    responseJson.data.forEach((item) => {
        

        const imagen = document.createElement("img");
        imagen.src = `https://platzi-avo.vercel.app/${item.image}`;
        

        const title = document.createElement("h2");
        title.textContent = item.name;
        title.style.fontSize = "3rem";
        

        const price = document.createElement("div");
        price.textContent = item.price;
       
        
        const container = document.createElement("div");
        container.append(imagen, title, price);

        todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
});