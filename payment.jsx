import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Payment() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPremiumPurchased, setIsPremiumPurchased] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'free') {
      alert('Your free plan activated');
    }
  };

  const handlePurchase = () => {
    if (selectedOption === 'premium') {
      setIsPremiumPurchased(true);
    } else {
      alert('Please select the Premium option to make a purchase.');
    }
  };


  return (
    <div style={styles.container}>
      <h1>Please choose your plan</h1>
      <div>
     
        <div>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="free"
              checked={selectedOption === 'free'}
              onChange={() => handleOptionSelect('free')}
            />
            Free Plan (Rs. 0)
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="premium"
              checked={selectedOption === 'premium'}
              onChange={() => handleOptionSelect('premium')}
            />
            Premium (Rs. 599)
          </label>
        </div>
      </div>

      {selectedOption === 'premium' && !isPremiumPurchased && (
        <div>
          <Link to="https://buy.stripe.com/test_4gwcMQa8H97z6Ri3cc">
            <button>
              Purchase Premium
            </button>
          </Link>
        </div>
      )}

      {isPremiumPurchased && (
        <div style={styles.successMessage}>
          Congratulations! You've purchased the Premium access.
          <br></br>
          <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    height:'200px',
    margin: '200px auto',
    padding: '60px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: 'linear-gradient(to bottom, #4c90af, #2b4b80)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '20px 40px',
    cursor: 'pointer',
    fontSize: '20px',
  },
  successMessage: {
    color: '#009900',
    fontWeight: 'bold',
    marginTop: '20px',
  },
};

export default Payment;