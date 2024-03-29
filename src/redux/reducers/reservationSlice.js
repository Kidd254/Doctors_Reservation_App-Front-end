import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reservationRequests from '../../requests/reservationRequests';

const initialState = {
  loading: false,
  error: null,
  reservation: null,
  data: null
};

export const geByUserId = createAsyncThunk(
  'users/geByUserId',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await reservationRequests.geByUserId(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Create Reservation
export const createReservation = createAsyncThunk(
  'reservation/createReservation',
  async (reservationData, { rejectWithValue }) => {
    try {
      const response = await reservationRequests.createReservation(
        reservationData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Update Reservation
export const updateReservation = createAsyncThunk(
  'reservation/updateReservation',
  async ({ reservationId, editedData }, { rejectWithValue }) => {
    try {
      const response = await reservationRequests.updateReservation(
        reservationId,
        editedData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Show Reservation
export const showReservation = createAsyncThunk(
  'reservation/showReservation',
  async (reservationId, { rejectWithValue }) => {
    try {
      const response = await reservationRequests.showReservation(reservationId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getallreservation = createAsyncThunk(
  'reservation/getallreservation',
  async (_, { rejectWithValue }) => {
    try {
      const response = await reservationRequests.getallreservation();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Delete Reservation
export const deleteReservation = createAsyncThunk(
  'reservation/deleteReservation',
  async (reservationId, { rejectWithValue }) => {
    try {
      const response = await reservationRequests.deleteReservation(
        reservationId
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(geByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(geByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.reservation = action.payload;
      })
      .addCase(geByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(showReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getallreservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getallreservation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getallreservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default reservationSlice.reducer;
