// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';

function parseJSON(response) {
  return response.json();
}

function parseError(data) {
  const error = new Error(data.message);
  throw error;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then(parseError);
}

export default function request(url, headerKey, headerValue) {
  let options = null;
  const headers = new Headers();
  headers.append('mode', 'cors');
  if (headerKey && headerValue) {
    headers.append(headerKey, headerValue);

    options = {
      headers,
    };
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
