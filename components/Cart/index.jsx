import { useState } from 'react';  
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Cart = () => {
  const [isVisible, setIsVisible] = useState(true);  

  const handleClose = () => {
    setIsVisible(false);  
  };

  return isVisible ? ( 
    <div className='payment-card'>
     <div className="modal-header">
          <h5 className="modal-title">
            Cart
          </h5>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="cart-row">
            <div className="payment-info">
              <span className="check-icon">
                <i className="fas fa-check-circle green-icon"></i>
              </span>
              Select Menu
            </div>
            <div className="payment-info">
              <span className="check-icon">
                <i className="fab fa-whatsapp green-icon"></i>
              </span>
              Place order via Whatsapp
            </div>
            <div className="payment-info">
              <span className="check-icon">
                <i className="fab fa-google-pay green-icon"></i>
              </span>
              Google Pay.
            </div>
          </div>
          <hr className="cartHr" />
          <div className="cart-content-div">
            <h1>Fill this Cart</h1>
          </div>
          <div className="user-info-div">
            <div className="mb-3 px-2">
              <label htmlFor="address">Address *</label> <br />
              <textarea
                type="text"
                className="form-control"
                id="address"
              ></textarea>
            </div>
            <div className="mb-3 px-2">
              <label htmlFor="note">Note (optional)</label> <br />
              <textarea
                type="text"
                className="form-control"
                id="note"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a
            className="btn clear-btn"
            onClick={handleClose}
          >
            Clear Cart
          </a>
          <a className="btn order-btn">
            Order Now
          </a>
        </div>
      </div>
   
  ) : null;
}

export default Cart;
