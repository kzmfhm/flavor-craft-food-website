import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import Cart from '../../components/Cart';

const Pizza = () => {
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    if (showCart && cartRef.current) {
      // Scroll to the cart section
      cartRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [showCart]);
  return (
    <div>
         <div id="pizza">
            <div class="row menu-heading">
            <h3>Pizza Shop</h3>
            </div>
            <div class="row">
            <div class="col-sm-6 col-12">
                <div class="card">
                  <h2 class="card-title">Soups</h2>
                  <div class="card-body">
                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Veg Manchow
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>150
                        </p>
                      </div>
                    
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Sweet Corn
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>150
                        </p>
                      </div>
                    
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Hot 'N' Sour<span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>150
                        </p>
                      </div>
                  
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Chicken Manchow
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>170
                        </p>
                      </div>
                   
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Chicken Sweet Corn
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>170
                        </p>
                      </div>
                   
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Chicken Hot 'N' Sour
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>170
                        </p>
                      </div>
                   
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-12">
                <div class="card">
                  <h2 class="card-title">Mocktails</h2>
                  <div class="card-body">
                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>Midnight Beauty</p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>120
                        </p>
                      </div>
                     
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>Mojito</p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>150
                        </p>
                      </div>
                    
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>Pink Lemonade</p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>140
                        </p>
                      </div>
                   
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>Silver Lining</p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>140
                        </p>
                      </div>
                 
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>Sweet Memories</p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>150
                        </p>
                      </div>
                     
                    </div>
                    <hr class="foot-item-hr" />
                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>Virgin Mojito</p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>230
                        </p>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row checkout-row" ref={cartRef}>
          <button
            type="button"
            className="btn know-more-btn"
            data-toggle="modal"
            data-target="#example-modal"
            onClick={toggleCart}
          >
            <i className="fas fa-shopping-cart"></i> Go to Cart
          </button>
        </div>
        
        </div>
          {showCart && <Cart />}
        </div>
   
  )
}

export default Pizza