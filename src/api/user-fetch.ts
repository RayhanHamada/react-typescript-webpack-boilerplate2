export const fetchUser = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
