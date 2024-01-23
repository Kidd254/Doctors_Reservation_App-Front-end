import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const reservationRequests = {};

reservationRequests.geByUserId = async function (user_id) {
  return axios
    .get(`${API_BASE_URL}/reservations?user_id=${user_id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

reservationRequests.createReservation = async function (reservationData) {
  return axios
    .post(`${API_BASE_URL}/reservations`, reservationData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

reservationRequests.updateReservation = async function (reservationId, editedData) {
  return axios
    .put(`${API_BASE_URL}/reservations/${reservationId}`, editedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

reservationRequests.showReservation = async function (reservationId) {
  return axios
    .get(`${API_BASE_URL}/reservations/${reservationId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

reservationRequests.getallreservation = async function () {
  return axios
    .get(`${API_BASE_URL}/reservations/getall`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

reservationRequests.deleteReservation = async function (reservationId) {
  return axios
    .delete(`${API_BASE_URL}/reservations/${reservationId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export default reservationRequests;