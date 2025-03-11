import React, { useEffect, useState } from "react";

const DataTest = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/customer/customers") // Replace with your API URL
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the structure
        setItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.first_name} {item.middle_name} {item.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataTest;