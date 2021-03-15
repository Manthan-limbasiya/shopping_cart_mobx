import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import BackspaceIcon from '@material-ui/icons/Backspace';
import AddIcon from '@material-ui/icons/Add';
import { observer } from 'mobx-react';
const Cart = observer((props) => {
    const { Cart, totalQuantity, totalPrice, Inc, Dec, Delete } = props.store
    const add = Cart.slice()
    return (
        <div className="cart">
            <div className="container">
                <h3>Your Cart</h3>
                {add.length > 0 ? <>
                    <div className="row">
                        <div className="col-9">
                            <div className="cart_heading">
                                <div className="row">
                                    <div className="col-2">Picture</div>
                                    <div className="col-2">Name</div>
                                    <div className="col-2">Price</div>
                                    <div className="col-2">Inc/Dec</div>
                                    <div className="col-2">Total Price</div>
                                    <div className="col-2">Remove</div>
                                </div>
                            </div>
                            {add.map(product => (
                                <div className="row verticalalign" key={product.id}>
                                    <div className="col-2">
                                        <div className="cart_image">
                                            <img src={product.img} alt="Image_Name" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart_name">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart_price">
                                            {product.price}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="detail_info">
                                            <div className="detail_incdec">
                                                <span className="dec" onClick={() => Dec(product.id)}><RemoveIcon /></span>
                                                <span className="quantity">{product.quantity}</span>
                                                <span className="inc" onClick={() => Inc(product.id)}><AddIcon /></span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart_total text-center">
                                            {product.price * product.quantity}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cert_remove" onClick={() => Delete(product.id)}>
                                            <BackspaceIcon />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-3">
                            <div className="summary">
                                <div className="summary_heading">
                                    Summary
                                </div>
                                <div className="summary_details">
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Items:
                                        </div>
                                        <div className="col-6">
                                            {totalQuantity}
                                        </div>
                                    </div>
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Price:
                                        </div>
                                        <div className="col-6">
                                            {totalPrice}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </> : "Your Cart is Empty"}
            </div>
        </div>
    )
})

export default Cart;
