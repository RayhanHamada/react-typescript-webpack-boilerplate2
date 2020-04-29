export const fetchUser = () => {
  const request = fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then(res => res.json());
  return request;
};
