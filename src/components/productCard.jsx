import React from 'react'

const ProductCard = () => {
  return (
    <div class="productCard pd-sm mg-sm">
                <img src="Images/kyotAsleep.jpg" alt="red blanket for a cat" />
                <div class="cardContent">
                    <div class="priceContainer mg-y-sm pd-sm">
                        <h3 class="cardHead">White Blanket</h3>
                        <div class="rateMe prim-color">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="productPrice fw-xxl"><i class="fa-solid fa-indian-rupee-sign"></i> 8999
                            <strike class="fs-sm"><i class="fa-solid fa-indian-rupee-sign"></i>14400</strike>
                        </div>

                    </div>
                </div>
                <div class="filterHead">
                    <button class="btn btn-success mg-y-sm"><i class="fas fa-shopping-cart mg-r-sm"></i>Add to
                        Cart</button>
                    <button class="btn btn-primary mg-y-sm"><i class="fas fa-heart mg-r-sm"></i> Wishlist</button>
                </div>

            </div>
  )
}

export default ProductCard