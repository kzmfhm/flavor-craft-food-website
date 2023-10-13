import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import Cart from '../../components/Cart';

const Sweet = () => {
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
    <div id="sweet">
         <div class="row menu-heading">
         <h3>Sweet Backers</h3>
         </div>
         <div class="row">
           <div class="col-sm-6 col-12">
             <div class="card">
                  <h2 class="card-title">Rice and Noodles</h2>
                  <div class="card-body">
                  <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Veg Hakka Noodles
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>200
                        </p>
                      </div>
                    
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Chilli Garlic Noodles
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>210
                        </p>
                      </div>
                   
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Steamed Rice<span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>190
                        </p>
                      </div>
                     
                    </div>
             
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Chicken Hakka Noodles
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>220
                        </p>
                      </div>
                  
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Chicken Garlic Noodles
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>230
                        </p>
                      </div>
                     
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Chicken Fried Rice
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>230
                        </p>
                      </div>
                  
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Mix Meat Fried Rice
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>300
                        </p>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <h2 class="card-title">Main Course</h2>
                  <div class="card-body">
                  <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Veg Garlic Sauce<span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>350
                        </p>
                      </div>
                 
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Veg Garlic Sauce
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>350
                        </p>
                      </div>
                     
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Potato Garlic Sauce
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>350
                        </p>
                      </div>
                   
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Mixed Vegetable Sauce
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>370
                        </p>
                      </div>
                
                    </div>
                    <hr class="foot-item-hr" />

                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Stir Fried Asian Green<span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>370
                        </p>
                      </div>
                  
                    </div>
                    <hr class="foot-item-hr" />
                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Burnt Garlic Rice
                          <span>
                            <img
                              class="veg-icon"
                              src="./images/veg.webp"
                              alt="veg-icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>395
                        </p>
                      </div>
                    
                    </div>
                 
                    <hr class="foot-item-hr" />
                    <div class="row food-item">
                      <div class="col-9 food-item-name">
                        <p>
                          Shredded Chicken
                          <span>
                            <img
                              class="non-veg-icon"
                              src="./images/non-veg.webp"
                              alt="non-veg icon"
                            />
                          </span>
                        </p>
                        <p class="text-muted-small">
                          <i class="fas fa-rupee-sign"></i>640
                        </p>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="checkout-row" ref={cartRef}>
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

export default Sweet