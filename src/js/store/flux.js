import { createHashRouter } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [	
				{
					name: "",
					address: "",
					email: "",
					phone: ""
				}
				
			],
			contact: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getData: async () => {

				console.log("Hola desde getData");

				try{
					
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Miguel');

					if (!response.ok) {
						
						getActions().createAgenda();

					}

					const data = await response.json();

					console.log(data.contacts);

					setStore({contact : data.contacts});
					

				}
				catch(error){

					alert("Error al hacer el getData");

				}
			},
			createAgenda: async () => {

				try {
					
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Miguel',{method: "POST"});

					
				} catch (error) {
					
					alert("Error: en createAgenda");
				}
				
			},
			

		}
	};
};

export default getState;
