import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getOneSneaker } from "../services/sneakerService";

import { updateSneaker } from "../services/sneakerService";
import './css/show.scss'


export default function Edit(props){

    const [sneaker, setSneaker] = useState(null);

    const params = useParams();
    const nav = useNavigate();


    async function updateSneakers() {
        setSneaker(await getOneSneaker(params.id));
    }

    useEffect(() => updateSneakers(), []);


    function handleChange(e){
        setSneaker({...sneaker, 
            [e.target.name]: e.target.value});
    
    }

    async function handleSubmit(event){
        event.preventDefault();
        updateSneaker(sneaker, params.id);
        await nav(`/sneakers/${params.id}`);
    }

    const loaded = () => {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='sneakShow sneakEdit'>
                        <div className='showLeft editLeft'>
                            <div className='editImgInp'>
                                <h4>Image</h4>
                                <input id='imgInp' type="text"
                                        className='input' 
                                        value={sneaker.image}
                                        name='image' 
                                        onChange={handleChange}/>
                            </div>
                        </div>

                        <div className='showRight editRight'>
                            
                            <div className='sneak_brand'>
                                <h4>Brand</h4>
                                <input type='text'
                                        className='input'
                                        value={sneaker.brand}
                                        name='brand' 
                                        onChange={handleChange}/>
                            </div>

                            <h4>Name</h4>
                            <input type='text' className='input'
                                    value={sneaker.name} 
                                    name='name'
                                    onChange={handleChange}/> 

                        

                            <div className='sneak_descrip'>
                                <h4>Description</h4>
                                <input type='text' className='input'
                                    value={sneaker.description} 
                                    name='description'
                                    onChange={handleChange}/>
                            </div>

                            <div className='sneak_price'>
                                <h4>Price</h4>
                                <input type='text' className='input'
                                    value={sneaker.price} 
                                    name='price'
                                    onChange={handleChange}/>
                            </div>

                            <button>Save Changes</button> 
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    const loading = () => {

        return <h1>Loading...</h1>;
    };

    return sneaker ? loaded() : loading();

}