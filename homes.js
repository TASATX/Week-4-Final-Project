document.addEventListener('DOMContentLoaded', fetchDataByIds);

function convertPriceToNumber(priceString) {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ''));
};

function convertPriceToNumber(bedroomsString) {
    return parseFloat(bedroomsString.replace(/[^0-9.-]+/g, ''));
};

function convertPriceToNumber(bathsString) {
    return parseFloat(bathsString.replace(/[^0-9.-]+/g, ''));
};

function convertPriceToNumber(sizeString) {
    return parseFloat(sizeString.replace(/[^0-9.-]+/g, ''));
};

async function fetchDataByIds() {
    try {
        const response = await fetch('https://retoolapi.dev/t7khno/data/');

        if (!response.ok) {
            throw new Error("Requested resource not found");
        }

        const data = await response.json();
        console.log('All data:', data);

        const idArray = JSON.parse(localStorage.getItem('idArray'));
        console.log('Retrieved ids:', idArray);

        if (idArray) {
            const filteredData = data.filter(el => idArray.includes(el.id));
            console.log('Filtered data by ids:', filteredData);

            window.filteredData = filteredData;
        }

    } catch (error) {
        console.log(error);
    }
}

function applyFilters() {
    const minPrice = parseFloat(document.getElementById('minPrice').value.replace(/[^0-9.-]+/g, ''));
    const maxPrice = parseFloat(document.getElementById('maxPrice').value.replace(/[^0-9.-]+/g, ''));
    const minBedrooms = parseFloat(document.getElementById('minBedrooms').value.replace(/[^0-9.-]+/g, ''));
    const maxBedrooms = parseFloat(document.getElementById('maxBedrooms').value.replace(/[^0-9.-]+/g, ''));
    const minBaths = parseFloat(document.getElementById('minBaths').value);
    const maxBaths = parseFloat(document.getElementById('maxBaths').value);
    const minSqFt = parseFloat(document.getElementById('minSize').value);
    const maxSqFt = parseFloat(document.getElementById('maxSize').value);

    let filteredResults = window.filteredData;

    if (minPrice || maxPrice) {
        filteredResults = filteredResults.filter(item => {
            const price = convertPriceToNumber(item.Price);
            return (!minPrice || price >= minPrice) &&
                   (!maxPrice || price <= maxPrice);
        });
    }

    if (minBedrooms || maxBedrooms) {
        filteredResults = filteredResults.filter(item => {
            return (!minBedrooms || item.Bedrooms >= minBedrooms) &&
                   (!maxBedrooms || item.Bedrooms <= maxBedrooms);
        });
    }

    if (minBaths || maxBaths) {
        filteredResults = filteredResults.filter(item => {
            return (!minBaths || item.Baths >= minBaths) &&
                   (!maxBaths || item.Baths <= maxBaths);
        });
    }

    if (minSqFt || maxSqFt) {
        filteredResults = filteredResults.filter(item => {
            return (!minSqFt || item.Size >= minSqFt) &&
                   (!maxSqFt || item.Size <= maxSqFt);
        });
    }

    console.log(filteredResults.slice(0, 6));
    displayData(filteredResults.slice(0, 6));
}

function displayData(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    data.forEach(item => {
        const itemBlock = document.createElement('div');
        itemBlock.className = 'result-block'; // Make sure this matches your CSS
        itemBlock.innerHTML = `
            <h2>Property ID: ${item.id}</h2>
            <p><strong>Price:</strong> ${item.Price}</p>
            <p><strong>Bedrooms:</strong> ${item.Bedrooms}</p>
            <p><strong>Baths:</strong> ${item.Baths}</p>
            <p><strong>Living Sq Ft:</strong> ${item.LivingSqFt}</p>
        `;
        resultsContainer.appendChild(itemBlock);
    });
}