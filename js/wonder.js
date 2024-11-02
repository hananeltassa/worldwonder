document.addEventListener("DOMContentLoaded", function() {
    const wonderDetailContainer = document.getElementById("wonder-detail");
    const imageContainer = document.getElementById("image-container");
    
    const urlParams = new URLSearchParams(window.location.search);
    const wonderName = urlParams.get('name');

    
    fetch("https://www.world-wonders-api.org/v0/wonders")
        .then(response => {
            return response.json();
        })
        .then(data => {
            const wonder = data.find(wonder => wonder.name === wonderName);
            
            document.getElementById("wonder-name").innerText = wonder.name;
            document.getElementById("wonder-image").src = wonder.links.images[0];
            document.getElementById("wonder-location").innerText = wonder.location;
            document.getElementById("wonder-description").innerText = wonder.summary;
            document.getElementById("wonder-build-year").innerText = wonder.build_year; 
            document.getElementById("wonder-time-period").innerText = wonder.time_period; 
            document.getElementById("google-maps-link").href = wonder.links.google_maps; 

        })
        .catch(error => {
            console.error('Error fetching wonder details:', error);
            wonderDetailContainer.innerHTML = `<p>Error loading wonder details. Please try again later.</p>`;
        });
});
