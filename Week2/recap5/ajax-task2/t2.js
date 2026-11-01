'use strict';

const fetchData = async () => {
  const user = {
    name: 'Johanna',
    job: 'Student',
  };

  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  console.log(data);
};

fetchData();
