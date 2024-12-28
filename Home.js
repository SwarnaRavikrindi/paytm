import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Digital Wallet</h1>
      <p>Manage your transactions and balance easily.</p>
      <nav>
        <ul>
          <li>
            <Link to="/transfer">Transfer Money</Link>
          </li>
          <li>
            <Link to="/transactions">View Transactions</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;