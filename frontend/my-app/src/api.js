import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Django server URL

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

export const getBundles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/bundles/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bundles:', error);
    throw error;
  }
};

export const createBundle = async (bundleData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/bundles/`, bundleData);
    return response.data;
  } catch (error) {
    console.error('Error creating bundle:', error);
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
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

export const getOrderItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order-items/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order items:', error);
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

export const getRentals = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/rentals/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching rentals:', error);
    throw error;
  }
};

export const createRental = async (rentalData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/rentals/`, rentalData);
    return response.data;
  } catch (error) {
    console.error('Error creating rental:', error);
    throw error;
  }
};

export const getPayments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/payments/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching payments:', error);
    throw error;
  }
};

export const createPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/payments/`, paymentData);
    return response.data;
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
};

// Add more API calls as needed
