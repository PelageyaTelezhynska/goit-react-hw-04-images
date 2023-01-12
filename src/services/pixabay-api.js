import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30950897-80d6e23e9a51a92c0c7387081';

export const fetchPictures = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      key: API_KEY,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data.hits;
};
