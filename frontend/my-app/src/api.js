import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your Django server URL

export const getCustomers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/customers/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

export const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/customers/`, customerData);
    return response.data;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders/`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const createOrderItem = async (orderItemData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/order-items/`, orderItemData);
    return response.data;
  } catch (error) {
    console.error('Error creating order item:', error);
    throw error;
  }
};

// Add more API calls as needed
