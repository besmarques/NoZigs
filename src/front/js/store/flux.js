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
			locations: [],
			route: [],
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
			saveLocations: (data) => { 
				const store = getStore();

				setStore({locations:data});
			},
			getBestRoute: () => {
				const store = getStore();

				let coordinatesData = [];

				for(let i = 0; i < store.locations.length; i++){
					coordinatesData.push(store.locations[i].features[0].geometry.coordinates);
				}

				console.log("object with data",coordinatesData);

				let coordinatesString = "";

				coordinatesString = coordinatesData.join(";");
				
				console.log("string for fetch",coordinatesString);

				let route = [];

				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };

				fetch("https://api.mapbox.com/optimized-trips/v1/mapbox/walking/" + coordinatesString + "?access_token=" + store.mapBoxToken , requestOptions)
				  .then(response => response.json())
				  .then(result => route.push(result))
				  .catch(error => console.log('error', error));
				  
				  //setStore({route : route});
				  console.log("route", route);
				  console.log("route.length", route[0].waypoints);

				
				  let tempRoute = [];

				  for(let i = 0; i < route.length; i++){
					  for(let z = 0; z < route[i].waypoints.length; z++){
						  tempRoute.push(route[i].waypoints[z].waypoint_index);
						  console.log("temproute",tempRoute);
					  }
				  }
  


			},

		
		}
	};
};

export default getState;
