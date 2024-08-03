document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const locationInput = document.getElementById('location');
    const resultsContainer = document.getElementById('results');
    const subHeader = document.querySelector('.sub__header');

    searchBtn.addEventListener('click', async () => {
        const searchValue = locationInput.value.trim().toLowerCase();
        if (searchValue) {
            subHeader.innerHTML = `Search Results for <b class="blue">${searchValue}</b>`;
            localStorage.setItem('searchParam', searchValue);

            try {
                const response = await fetch('https://retoolapi.dev/t7khno/data/');
                if (!response.ok) {
                    throw new Error("Requested resource not found");
                }

                const data = await response.json();
                console.log('All data:', data);

                function filterHomes() {
                    let filteredHomes = [];
                  
                    if (searchValue.includes(',')) {
                    const [city, state] = searchValue.split(',').map(item => item.trim().toLowerCase());
                    filteredHomes = data.filter((home) => {
                        return (
                          home.City.toLowerCase() === city &&
                          home.State.toLowerCase() === state
                        );
                      });
                    } else {
                      filteredHomes = data.filter((home) => {
                        return (
                          home.City.toLowerCase().includes(searchValue) ||
                          home.State.toLowerCase().includes(searchValue) ||
                          home.ZipCode.includes(searchValue)
                        );
                      });
                    }

                console.log('Filtered data:', filteredHomes);

                const homeIds = filteredHomes.map(home => home.id);
                localStorage.setItem('filteredHomeIds', JSON.stringify(homeIds));

                displayHomes(filteredHomes);

            } 
            filterHomes();

        }       catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                resultsContainer.innerHTML = '<p>Failed to load homes.</p>';
            }

            window.location.href = 'listings.html';

        } else {
            alert('Please enter a City, ST or Zip Code.');
        }
        console.log(searchValue);
    });
});

    function displayHomes(homes) {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; 

        if (homes.length > 0)  {
            homes.forEach(home => {
            const homeElement = document.createElement('div');
            homeElement.className = 'home-item';
            homeElement.innerHTML = `
                <p>City: ${home.City}</p>
                <p>State: ${home.State}</p>
                <p>ZipCode: ${home.ZipCode}</p>
            `;
            resultsContainer.appendChild(homeElement);
            });            
        } else {    
            resultsContainer.innerHTML = '<p> No Homes Found.</p>';

    }
} 

function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }



 
