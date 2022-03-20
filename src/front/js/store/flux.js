const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			mapBoxToken: "pk.eyJ1IjoiYmVzbWFycXVlcyIsImEiOiJja3p2cGRucDQwMGliMm9rNnpuOG90MG9nIn0.5n3XuDKIqcxsIDs-1VGs7g",
			name:"",
			country:"",
			city:"",
			base: "",
			locationsInput: [],
			locations: [],
			resultObject: []
		},
		actions: {
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				if( token && token !== "" && token !== undefined) setStore({token: token});
			},

			logout: () => {
				sessionStorage.removeItem("token");
				setStore({token: null});
			},
			login: async (user, password) => {
				const opts = {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({ 
					  user: user,
					  password: password
					  }),
				  };
				
				try{
					const resp = await fetch("https://3001-nozigs-nozigs-8fn6hvofjfr.ws-eu34.gitpod.io/api/token", opts)
	
					if (resp.status !== 200) {
						alert("There was an error!");
						return false;
					}
					
					const data = await resp.json();
					console.log("this came from the backend", data);	
					sessionStorage.setItem("token", data.access_token);
					setStore({token: data.access_token})
					return true;
				}
				catch(error){
					console.error("There's an error logging in")
				}
			},
			getMessage: () => {
				const store = getStore();
				const opts = {
					headers: {
						"Authorization" : "Bearer " + store.token
					}
				}
				// fetching data from the backend
				fetch("https://3001-nozigs-nozigs-8fn6hvofjfr.ws-eu34.gitpod.io/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			saveName: (name) => {
				const store = getStore();

				setStore({name: name});
			},
			saveCountry: (country) => {
				const store = getStore();

				setStore({country: country});
			},
			saveCity: (city) => { 
				const store = getStore();

				setStore({city:city});
			},
			saveBase: (base) => {
				const store = getStore();

				setStore({base: base})

				/* Return something has base address */

				if(store.base == ""){
					store.locations[0] = "Please insert your base address";
				}else{
					store.locations[0] = store.base;
				};
			},

			saveLocations: (locationsInput) => {
				const store = getStore();

				setStore({locationsInput : locationsInput});

				/* bug cleaning for .map isnt a fuction */
				if(store.locations != ""){
					store.locations = [];
				}

				/* Return something has base address */
				if(store.base == ""){
					store.locations[0] = "Please insert your base address";
				}else{
					store.locations[0] = store.base;
				};

				/*push all the locations to the store.locations */
				for (let i = 0; i < locationsInput.length; i++){
					store.locations.push(locationsInput[i]);
				}
				
			},

			fetchLocationData: () => {

				const store = getStore();
				/**fetch location data */
				
				
			
				
				
			},

			
			
			getDataFromFront: (name,country,city,base,locations) => {
				const store = getStore();

				setStore({locations: locations})

				setStore({ testVar: name + country + city + base + locations})

				console.log(store.testVar);

				console.log(store.locations);
				
					
				

				

			},
		}
	};
};

export default getState;
