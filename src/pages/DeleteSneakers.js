//This page is a hidden page
//And will not be visable to the User

//To delete something from the database
//go to it's show page and add /delete
//Ex: /sneakers/1/delete
import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { deleteSneaker } from "../services/sneakerService";


export default function Delete(){
    const params = useParams();
    const nav = useNavigate();

    useEffect(() => deleteThisSneaker(), []);

    async function deleteThisSneaker(){
        await deleteSneaker(params.id)
        nav('/sneakers');
    
    }
    return null;

}