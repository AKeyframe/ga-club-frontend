import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './css/sneakers.scss'
import { getSneakers } from "../services/sneakerService";

export default function Sneakers(props){


    const [sneakers, setSneakers] = useState(null);
    const [map, setMap] = useState(null);
    

    async function updateSneakers() {
        setSneakers(await getSneakers());
    }

    useEffect(() => updateSneakers(), []);

    const loaded = () => {
        

        return sneakers.map((sneak, i) => {
            return(
                <div key={sneak.id}>
                    <div className='sneak background'>
                        <Link to={`/sneakers/${sneak.id}`}>
                            <div className='sneakImgThumb' >
                                <img src={sneak.image}/>
                            </div>

                            <div>
                                <h4>{sneak.name}</h4>
                            </div>
                        </Link>
                            <div>
                                <p>${sneak.price}</p>
                            </div>
                    </div>
                </div>
            );
        });
    }


    const loading = () => {
       
        return <h1>Loading...</h1>;
    };

    return sneakers ? <div className='sneakGrid'>{loaded()}</div> : loading();
}