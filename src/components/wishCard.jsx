import React from 'react'

const WishCard = () => {
  return (
    <div class="wishContainer textCenter">
    <div class="wishStrip mg-y-md">
        <h3>1</h3>
        <div class="wishImg align-items-center">
            <img src="/Assets/Images/kyotRedBlanky.jpg" alt="kyot cat" />
        </div>
        <h3>Red blanket (does not include cat)</h3>
        <h3><i class="fa-solid fa-indian-rupee-sign mg-r-sm"></i>11999</h3>
        <div class="wishActionButtons pd-r-sm">
            <button class="btn btn-success mg-y-sm"><i class="fas fa-shopping-cart mg-r-sm"></i>Add to
                Cart</button>
            <button class="btn btn-caution mg-y-sm"><i class="fas fa-trash mg-r-sm"></i>Delete</button>
        </div>
    </div>
</div>
  )
}

export default WishCard