import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;

const userRequests = {};
userRequests.createUsers = function(userData){
    return axios.post(`${baseUrl}/users`, userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });
    
}

userRequests.loginUsers = function(userData){
    return axios.post(`${baseUrl}/users/login`, userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });
   
};

userRequests.searchByEmail = async function (email) {
    return axios
      .get(`${baseUrl}/users/search_by_email?email=${email}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };

export default userRequests;