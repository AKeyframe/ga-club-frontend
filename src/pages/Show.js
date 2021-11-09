import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { getOneSneaker } from "../services/sneakerService";

import './css/show.scss'
import Filter from "../components/Filter";

export default function Show(props){

    const [sneaker, setSneaker] = useState(null);
    const params = useParams();
    const nav = useNavigate();


    async function updateSneakers() {
        setSneaker(await getOneSneaker(params.id));
    }

    useEffect(() => updateSneakers(), []);


    function handleClick(){
   
        props.cart.current.push({
            name: sneaker.name,
            brand: sneaker.brand,
            description: sneaker.description,
            price: sneaker.price,
            image: sneaker.image
        })

       nav('/cart');
    }

    const loaded = () => {
        return (
            <div>
                <div className='sneakShow'>
                    <div className='showLeft'>
                        <div className='sneak_img'>
                            <img src={sneaker.image} />
                        </div>
                    </div>

                    <div className='showRight'>
                        
                        <div className='sneak_brand'>
                            <h2>{sneaker.brand}'s</h2>
                        </div>

                        <h1 className='sneak_name'>
                            {sneaker.name}</h1>
                       


                        <div className='sneak_descrip'>
                            <p>{sneaker.description}</p>
                        </div>
                        <div className='sneak_price'>
                            <h2>Price: ${sneaker.price}</h2>
                        </div>

                        <button onClick={handleClick}>Add to Cart</button> 
                    </div>
                </div>
            </div>
        );
    }

    const loading = () => {

        return <h1>Loading...</h1>;
    };

    return sneaker ? loaded() : loading();

}