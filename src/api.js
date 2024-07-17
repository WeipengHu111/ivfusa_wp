import axios from 'axios';

const API_URL = 'http://localhost:1337/api/offices?populate=*';

export const getOfficeContent = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('API response:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching office content:', error);
    return [];
  }
};
