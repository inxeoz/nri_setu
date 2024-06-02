import { state, update } from './Global';

const base =
  'https://w4bg0ee1f8.execute-api.ap-south-1.amazonaws.com/default/verify';
async function verifyCredentials({ utype, session, username, password }) {
  try {
    const response = await fetch(base, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, utype, session }),
    });
    const verified = response.headers.get('verified');
    console.log(typeof verified);

    const cookies = response.headers.get('Set-Cookie');
    console.log(cookies);

    update('cookies', cookies);
    console.log(verified);
    update('verified', verified === 'true');
    return response.text();
  } catch (error) {
    console.error('Error occurred while verifying credentials:', error);
    throw new Error('An error occurred while verifying credentials');
  }
}

async function fetchData(url) {
  try {
    const response = await fetch(url, {
      headers: {
        Cookie: state.cookies,
      },
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    throw new Error('An error occurred while fetching data');
  }
}

async function fetchGet(url) {
  try {
    const response = await fetch(url, {
      headers: {
        Cookie: state.cookies,
      },
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    throw new Error('An error occurred while fetching data');
  }
}

async function fetchPost({ base_url, data }) {
  try {
    const response = await fetch(base_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.text();
  } catch (error) {
    console.error('Error occurred while verifying credentials:', error);
    throw new Error('An error occurred while verifying credentials');
  }
}
export { fetchPost, fetchGet };
export { verifyCredentials, fetchData };
