//  curl "https://retoolapi.dev/t7khno/data"

/*
let State = "NY";
let City = "New York";
let RegionName = ""; 

async function fetchData() {
  try {
    const response = await fetch('https://retoolapi.dev/t7khno/data/');

    if (!response.ok) {
      throw new Error("Requested resource not found");
    }

    const data = await response.json();
    console.log('All data:', data);

    const filteredData = data.filter(el => el.City === City && el.State === State);
    console.log('Filtered data by City and State:', filteredData);

    const idArray = filteredData.map(el => el.id);
    console.log('Array of ids:', idArray);

    localStorage.setItem('idArray', JSON.stringify(idArray));

  } catch (error) {
    console.log(error);
  }
}

fetchData();  */

