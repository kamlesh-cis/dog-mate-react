export function fetchBreeds() {
  // create request
  const request = new Request('https://dog.ceo/api/breeds/list', {
    method: 'GET',
  });

  // fetch using that request
  const breeds = fetch(request).then(
    response => {
      return response.json()
    }
  );

  // return response type and payload
  return {
    type: 'FETCH_BREEDS',
    payload: breeds
  }

};