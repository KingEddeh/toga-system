import React, { useState } from 'react';
import { createCustomer, createOrder, createOrderItem } from '../api';

const CreateOrderForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [orderItems, setOrderItems] = useState([{ product: '', quantity: 1 }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddOrderItem = () => {
    setOrderItems([...orderItems, { product: '', quantity: 1 }]);
  };

  const handleOrderItemChange = (index, field, value) => {
    const newOrderItems = [...orderItems];
    newOrderItems[index][field] = value;
    setOrderItems(newOrderItems);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Create customer
      const customer = await createCustomer({ name: customerName });

      // Create order
      const order = await createOrder({ customer: customer.id });

      // Create order items
      for (const item of orderItems) {
        await createOrderItem({ order: order.id, product: item.product, quantity: item.quantity });
      }

      setLoading(false);
      alert('Order created successfully!');
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Order</h1>
      {error && <div>Error: {error.message}</div>}
      <div>
        <label>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>
      </div>
      <h2>Order Items</h2>
      {orderItems.map((item, index) => (
        <div key={index}>
          <label>
            Product:
            <input
              type="text"
              value={item.product}
              onChange={(e) => handleOrderItemChange(index, 'product', e.target.value)}
              required
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleOrderItemChange(index, 'quantity', e.target.value)}
              required
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddOrderItem}>
        Add Order Item
      </button>
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Order'}
      </button>
    </form>
  );
};

export default CreateOrderForm;