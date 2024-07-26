// API KEY   	3ed55eb237fc74541d928d2bb9e04ecb

/* scripts.js

document.addEventListener('DOMContentLoaded', () => {
const applyFiltersButton = document.getElementById('applyFilters');

applyFiltersButton.addEventListener('click', () => {
    const filters = document.querySelectorAll('.filter-item');
    filters.forEach(filter => {
    const minInput = filter.querySelector('input[type="number"]:first-of-type');
    const maxInput = filter.querySelector('input[type="number"]:last-of-type');

    const minValue = (minInput.value);
    const maxValue = (maxInput.value);

    if (minValue > maxValue) {
        alert('Minimum value cannot be greater than maximum value');
        return;
    }

    // Apply your filter logic here
    console.log(`Filtering ${filter.querySelector('label').textContent} from ${minValue} to ${maxValue}`);
    });
});
});
  

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('location');
    const label = input.previousElementSibling;
  
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        label.classList.add('hidden');
      } else {
        label.classList.remove('hidden');
      }
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const locationInput = document.getElementById('location');
    const searchTerm = document.getElementById('searchTerm');

searchBtn.addEventListener('click', async () => {
    const location = locationInput.value.trim();
    if (!location) {
        alert('Please enter a city and state or a zip code.');
        return;
    }

  /*     let query = '';
        const zipCodePattern = /^\d{5}(?:[-\s]\d{4})?$/;
        if (zipCodePattern.test(location)) {
            // Input is a zip code
            query = `address2=${encodeURIComponent(location)}`;
            console.log('Input is a zip code:', query);
        } else {
            // Input is assumed to be city, state
            const parts = location.split(',').map(part => part.trim());
            if (parts.length !== 2) {
                alert('Please enter a valid city and state.');
                return;
            }
            const [city, state] = parts;
            query = `address2=${encodeURIComponent(city)},${encodeURIComponent(state)}`;
            console.log('Input is a city and state:', query);
        }

        searchTerm.textContent = location; 

        async function fetchPropertyDetails(query) {
            const url = `https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?${query}`;
            const options = {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'apikey': '3ed55eb237fc74541d928d2bb9e04ecb'
                }
            };
        
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                console.log(data);
                } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
        
        // Example usage of the async function
        const query = 'address=123%20Main%20St&city=Anytown&state=CA&zip=12345';
        fetchPropertyDetails(query);
        
  });  
});  

function showProperties(id) {
    localStorage.setItem("Id", id);
    window.location.href = `${window.location.origin}/user.html`; 
}  */
