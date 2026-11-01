'use strict';

const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};

const testFetch = async () => {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occured:', error);
  }
};

testFetch();
