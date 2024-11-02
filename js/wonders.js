document.addEventListener("DOMContentLoaded", function(){

    const wondersList = document.getElementById("wonders-list");

    fetch("https://www.world-wonders-api.org/v0/wonders")
        .then(response => response.json())
        .then(data=> {
            data.forEach(wonder => {
                const wonderBox = document.createElement("div");

                wonderBox.className = "wonder-box";
                const imgURL = wonder.links.images[0];

                wonderBox.innerHTML = `
                <img src="${imgURL}" alt="${wonder.name}" class="wonder-image"/>
                <h2>${wonder.name}</h2>
                <p>${wonder.location}</p>
                <a href="./wonder.html?id=${wonder.id}" class="wonder-link">Learn More</a>`;

                wondersList.appendChild(wonderBox); 
            });
        })
        .catch(error => {
            wondersList.innerHTML = `<p>Error loading .... Please try again later.</p>`;
            console.error("Error fetching wonders:", error);
        })
})