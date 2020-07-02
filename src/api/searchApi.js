import api from './baseApi';

const searchUsers = ({term}) => {
  return api.get(`/search/users?query=${term}&page=1&per_page=20`);
};

const getUserPhoto = ({username}) => {
  return api.get(`/users/${username}/photos`);
};

export default {
  searchUsers,
  getUserPhoto,
};
