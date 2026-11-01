'use strict';

const fetchData = async () => {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) {
      throw new Error('User not found');
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('An error occured: ', error.message);
  }
};

fetchData();
