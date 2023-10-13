import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import Cart from '../../components/Cart';

const FastFood = () => {
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
    <div class="menu-div">
       <div id="fastfood">
            <div class="row menu-heading">
            <h3>Fast Food Shop</h3>
            </div>
            <div class="row">
             <div class="col-sm-6 col-12">
                <div class="card">
                  <h2 class="card-title">Steamed fastfood</h2>
                  <div class="card-body">
                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Veggie Food
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>80
                        </p>
                      </div>
                   
                    </div>
                    <hr class="foot-item-hr" />
                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Paneer Food
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>90
                        </p>
                      </div>
                   
                    </div>
                    <hr class="foot-item-hr" />
                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Mushroom Food
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>115
                        </p>
                      </div>
                  
                    </div>
                    <hr class="foot-item-hr" />
                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Corn and Cheese Food
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>130
                        </p>
                      </div>
                     
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Chicken Food
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>90
                        </p>
                      </div>
                     
                    </div>
                    <hr class="foot-item-hr" />
                     <div class="row food-item">
                     <div class="col-9 food-item-name">
                        <p>
                          Chicken and Cheese Food
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>140
                        </p>
                      </div>
                      
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Fish Food
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>130
                        </p>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-12">
                <div class="card">
                  <h2 class="card-title">Fried fastfood</h2>
                  <div class="card-body">
                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Veggie Fried Food
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>125
                        </p>
                      </div>
                     
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Paneer Fried Food
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>135
                        </p>
                      </div>
                    
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Mushroom Fried Food
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>145
                        </p>
                      </div>
                     
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Corn Cheese Fried Food
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>160
                        </p>
                      </div>
                      
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Chicken Fried Food
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>135
                        </p>
                      </div>
                      
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Chicken Schezwan Fried Food
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>155
                        </p>
                      </div>
                      
                    </div>
                    <hr class="foot-item-hr" />
                    <div class="row food-item">
                    <div class="col-9 food-item-name">
                        <p>
                          Fish Fried Food
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>155
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
                class="btn know-more-btn"
                data-toggle="modal"
                data-target="#example-modal"
                onClick={toggleCart}
              >
                <i class="fas fa-shopping-cart"></i> Go to Cart
              </button>
            </div>
          </div>
         
          {showCart && <Cart />}
           </div>
        )
}

export default FastFood