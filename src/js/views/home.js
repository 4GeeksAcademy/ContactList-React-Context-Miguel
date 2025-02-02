import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import  ContactCard  from "../component/ContactCard";
import { object } from "prop-types";
import { Context } from "../store/appContext";
import { useEffect } from "react";




export const Home = () => {

	const {store,actions} = useContext(Context);
	
	console.log(store.contact);
	

	useEffect(() => {

		actions.getData();

		
		
	},[])
	
	return(

		<div className="text-center mt-5">

		<h1>Bienvenido a la Lista de CONTACTOS</h1>

			

			{
				store.contact.map((torrija)=>{

					return(
						
						<ContactCard contact = {torrija}  key={torrija.key}/>
						
					)
				})
			}

		</div>

	)
	
};
