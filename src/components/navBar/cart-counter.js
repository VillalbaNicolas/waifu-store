const CartCounter = ({counter, update}) => {
    return(
        <div className="cart-counter">
            <p onClick={() => {
                if(counter >= 0){
                    update(counter--)
                }
            }}>-</p>
            <p>{counter}</p>
            <p onClick={() => {
               update(counter++) 
            }}>+</p>
        </div>
    )

}

export default CartCounter;