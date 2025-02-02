import { useContext } from "react";
import React from "react";

import { Context } from "../store/appContext";


 const ContactCard = ({contact}) => {

    const {actions} = useContext(Context);
    console.log(contact);
    
    const deleteContact = async () => {

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Miguel/contacts/${contact.id}`,{method: "DELETE"});

            actions.getData();

        } catch (error) {
            
        }
    }

    const borrar = () => {

        alert("Estas seguro");

        deleteContact();

    }
    return(
        <>
        
        
            <div className=" border m-4">
                <p>Name : {contact.name}</p>
                <p>Phone :{contact.phone}</p>
                <p>Address: {contact.address}</p>
                <p>Email: {contact.email}</p>
                <button type="button" class="btn-close" onClick={borrar} aria-label="Close"></button>
            </div>
        

        
        </>

    )
}


export default ContactCard  ;