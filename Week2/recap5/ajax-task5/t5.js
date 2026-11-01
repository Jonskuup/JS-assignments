const apiURL = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

//
/**
 * ASYNKRONINEN fetch-funktio (vain GET funktioille)
 * TODO: lisää http headerit parametreihin muiden metodien käyttöä varten
 * @param {*} url - URL address of the API resource
 * @returns - json data of the response
 */

const fetchData = async (url) => {
  const response = await fetch(apiURL + url);
  if (!response.ok) {
    throw new Error('Response not ok!');
  }

  const data = await response.json();

  return data;
};

// your code here
// STILL MISSING HIGHLIGHT STUFF ETC
const tableElement = document.querySelector('table');
//get red to dialog
const dialogElement = document.querySelector('dialog');
// close modal when it gets closed
dialogElement.addEventListener('click', (event) => {
  dialogElement.close();
});

//create DOM elements for daily menu
const renderDailyMenu = (courses) => {
  //create new container element
  const menuElement = document.createElement('div');

  const ul = document.createElement('ul');
  menuElement.append(ul);
  for (const course of courses) {
    const li = document.createElement('li');
    li.textContent = course.name;
    //TODO: lisää hinta ja erityisruokavalioiden detaljit domiin
    ul.append(li);
  }
  return menuElement;
};

// create list of restaurantsand add to DOM
const renderRestaurantData = (restaurants) => {
  // loop thorugh all restaurants in the array
  for (const restaurant of restaurants) {
    // create dom elements for each restaurant
    const tableRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const addressCell = document.createElement('td');
    //build dom
    tableElement.append(tableRow);
    tableRow.append(nameCell);
    tableRow.append(addressCell);
    //add content
    nameCell.textContent = restaurant.name;
    addressCell.textContent = restaurant.address;

    tableRow.addEventListener('click', async (event) => {
      //remove highlight from all rows and add to clicked row
      tableElement.querySelectorAll('tr').forEach((row) => {
        row.classList.remove('highlight');
      });
      tableRow.classList.add('highlight');
      // reset dialog element
      dialogElement.innerHTML = '';
      // add new content
      const title = document.createElement('h2');
      title.textContent = restaurant.name;
      const details = document.createElement('p');
      details.textContent = `${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}`;

      dialogElement.append(title);
      dialogElement.append(details);
      // get daily menu
      try {
        const coursesData = await fetchData(
          '/restaurants/daily/' + restaurant._id + '/en'
        );
        console.log(coursesData);
        const menu = renderDailyMenu(coursesData.courses);
        dialogElement.append(menu);
      } catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent =
          'Could not load daily menu: ' + error.message;
        dialogElement.append(errorMessage);
      }

      dialogElement.showModal();
    });
  }
};

// main function in this app
const updateRestaurants = async () => {
  try {
    const restaurants = await fetchData('/restaurants');
    renderRestaurantData(restaurants);
  } catch (error) {
    dialogElement.textContent = 'api connection error!' + error.message;
    dialogElement.showModal();
  }
};

updateRestaurants();
