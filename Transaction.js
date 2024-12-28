import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [upiId, setUpiId] = useState('');

  useEffect(() => {
    if (upiId) {
      fetchTransactions();
    }
  }, [upiId]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`/api/transactions/${upiId}`);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleInputChange = (e) => {
    setUpiId(e.target.value);
  };

  return (
    <div>
      <h1>Transactions</h1>
      <input
        type="text"
        placeholder="Enter UPI ID"
        value={upiId}
        onChange={handleInputChange}
      />
      <button onClick={fetchTransactions}>Fetch Transactions</button>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            <p>Sender UPI ID: {transaction.sender_upi_id}</p>
            <p>Receiver UPI ID: {transaction.receiver_upi_id}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Timestamp: {new Date(transaction.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transaction;