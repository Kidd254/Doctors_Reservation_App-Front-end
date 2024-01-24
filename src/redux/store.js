import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import doctorsReducer from './reducers/doctorsSlice';
import reservationReducer from './reducers/reservationSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        doctors: doctorsReducer,
        reservation: reservationReducer,
    },
});

export default store;