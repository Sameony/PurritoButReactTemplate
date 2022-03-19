import React from 'react'

const CartCard = () => {
  return (
    <div class="cartStrip mg-y-md">
                        <div class="cartImg align-items-center">
                            <img src="/Assets/Images/kyotComfy.jpg" alt="kyot cat" />
                        </div>
                        <div class="cartDetails align-items-center flex-col">
                            <h3>White blanket</h3>
                            <h3 class="fw-xl"><i class="fa-solid fa-indian-rupee-sign mg-r-sm"></i>11999</h3>
                            <div class="cartQty">
                                <button class="btn btn-primary">&nbsp;-&nbsp;</button>
                                <input type="text" name="cartInput" value="2" />
                                <button class="btn btn-primary">+</button>
                            </div>

                            <div class="cartActionButtons flex flex-col flex-spc-arnd pd-r-sm">

                                <button class="btn btn-wishlist mg-y-sm"><i class="fas fa-heart mg-r-sm"></i>Add to
                                    Wishlist</button>
                                <button class="btn btn-primary mg-b-sm"><i class="fas fa-trash mg-r-sm"></i>Remove from
                                    cart</button>
                            </div>
                        </div>

                    </div>
  )
}

export default CartCard