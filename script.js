const api = "https://alishbakha1.github.io/-api-random-images/index.json";

// Function to fetch data from the API
async function getapi(url) {
  try {
    // Fetch data from the URL
    const response = await fetch(url);
    
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse JSON data
    const data = await response.json();
    console.log(data)

    let cardsHTML = "";

    // Iterate over the fetched data
    data.forEach(element => {
      cardsHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <img src="${element.image_url}" class="card-img-top" alt="Animal Image">
            <div class="card-body">
              <h5 class="card-title">Category: ${element.image_category}</h5>
              <p class="card-text">${element.image_description}</p>
              <a href="${element.image_url}" target="_blank" class="btn btn-warning">Download</a>
            </div>
          </div>
        </div>
      `;
    });

    // Inject the generated HTML into the DOM
    document.getElementById("all-data").innerHTML = cardsHTML;

  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching data:", error);
    document.getElementById("all-data").innerHTML = `<p class="text-danger">Failed to load data. Please try again later.</p>`;
  }
}

// Call the function to get data from the API
getapi(api);
