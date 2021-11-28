const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  const response = await fetch(BASE_URL);

  const data: User[] = await response.json();

  return data;
};