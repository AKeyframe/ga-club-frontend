import "./css/cart.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";



export default function Cart(props){

    const [renderCart, setRender] = useState([]);

    //Load the cart info when first loaded
    useEffect(() => setRender([...props.cart.current]), []);

    let sum=0;
    //get the total price of all the items in the cart. 
    props.cart.current.forEach((item, i) => {
        sum+=item.price;
    });


    //remove the item from the cart. Update the page
    function handleClick(i){
       props.cart.current.splice(i, 1)
       setRender([...props.cart.current]);
    }

    //if the cart isn't empty display the items and prices
    if(props.cart.current.length != 0){
        return(
        
                <div className='cart'>
                    <div className='cartItems'>
                        {renderCart.map((item, i) => {
                            return(
                                <div key={i} className='item'>
                                    <div className='itemIB'>
                                        <div>
                                            <img src={item.image}
                                                className='imgSThumb'/>
                                        </div>
                                        <div className='itemRemove'>
                                            <button onClick={() => handleClick(i)}>Remove</button>
                                        </div>
                                           
                                    </div>
                                    <div>
                                        <h4>{item.brand}</h4>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <h4>Price: ${item.price}</h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className='cartSum'>
                        <div className='sum'>
                            <div className='OS'>
                                <h2>Order Summary</h2>
                            </div>
                            
                            <table>
                                <tr>
                                    <td><h3>Items:</h3></td>
                                    <td><h3>${sum}</h3></td>
                                </tr>
                                <tr>
                                    <td><h3>Shipping {'&'} Handling:</h3></td>
                                    <td><h3>$5.99</h3></td>
                                </tr>
                                <tr>
                                    <td><h3>Before Tax:</h3></td>
                                    <td><h3>${sum+5.99}</h3></td>
                                </tr>
                                <tr>
                                    <td><h3>Estimated Tax:</h3></td>
                                    <td><h3>${Math.round(((sum+5.99)*.12)*100)/100}</h3></td>
                                </tr>
                                <tr>
                                    <td><hr /></td>
                                    <td><hr /></td>
                                </tr>
                                <tr>
                                    <td><h2>Order Total:</h2></td>
                                    <td><h2>${Math.round(((sum+5.99)+(Math.round(((sum+5.99)*.12)*100)/100))*100)/100}</h2></td>
                                </tr>

                            </table>
                            
                            <div className='center'>
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>

                </div>
        
        );
    //Otherwise display the empty cart page
    } else{
        return(
            <div>
                <div className='cart'>
                    <div className='emptyCart' >
                        <h1>Your Cart Is Empty</h1>
                        <p>Check out some  
                                    <Link to='/sneakers'> shoes...</Link>
                        </p>
                    </div>
                    

                    <div className='cartSum'>
                        <div className='sum'>
                            <div>
                                <h2>Order Summary</h2>
                            </div>
                            
                            <table>
                                <tr>
                                    <td><h3>Items:</h3></td>
                                    <td><h3></h3></td>
                                </tr>
                                <tr>
                                    <td><h3>Shipping {'&'} Handling:</h3></td>
                                    <td><h3></h3></td>
                                </tr>
                                <tr>
                                    <td><h3>Before Tax:</h3></td>
                                    <td><h3></h3></td>
                                </tr>
                                <tr>
                                    <td><h3>Estimated Tax:</h3></td>
                                    <td><h3></h3></td>
                                </tr>
                                <tr>
                                    <td><hr /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><h2>Order Total:</h2></td>
                                    <td><h2></h2></td>
                                </tr>

                            </table>

                            <div className='center'>
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}