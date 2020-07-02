import axios from 'axios';

export const APP_BASE_URL = 'https://api.unsplash.com';

export default axios.create({
  baseURL: APP_BASE_URL,
  responseType: 'json',
  timeout: 3000,
  headers: {
    Authorization:
      'Client-ID aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5',
  },
  transformResponse: [
    (data) => {
      if (typeof data === 'string') {
        try {
          return JSON.parse(data);
        } catch (err) {
          return data;
        }
      } else {
        return data;
      }
    },
  ],
});
