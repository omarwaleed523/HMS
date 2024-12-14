import axios from 'axios';

const API_URL = 'http://localhost:3001/appointments';

export const fetchAppointments = () => axios.get(API_URL);
export const createAppointment = async (data) => {
    try {
      const response = await axios.post(API_URL, data);
      console.log('Appointment Created:', response.data);
      return response.data;
    } catch (error) {
      console.error('Backend Error:', error.response?.data);
      console.error('Request Error:', error.message);
    }
  };
  export const updateAppointment = async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      console.log('Appointment Updated:', response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to update appointment:', error.message);
    }
  };
export const deleteAppointment = (id) => axios.delete(`${API_URL}/${id}`);
