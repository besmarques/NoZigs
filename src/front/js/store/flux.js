const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      mapBoxToken:
        "pk.eyJ1IjoiYmVzbWFycXVlcyIsImEiOiJja3p2cGRucDQwMGliMm9rNnpuOG90MG9nIn0.5n3XuDKIqcxsIDs-1VGs7g",
      name: "",
      locations: [],
      geometry: [],
    },
    actions: {
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        if (token && token !== "" && token !== undefined)
          setStore({ token: token });
      },

      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
      },

      login: async (username, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        };

        let res = false;

        try {
          const resp = await fetch(
            "https://3001-nozigs-nozigs-r5bk3wf3fd2.ws-eu38.gitpod.io/api/login",
            opts
          );

          const data = await resp.json();

          if (!resp.ok) {
            res = { err: data.error };
          } else {
            // save the token in the localStorage
            sessionStorage.setItem("token", data.token);
            setStore({ token: data.token });
            res = { msg: data.message };
          }
        } catch (error) {
          console.error("Error logging in");
        }
        return res;
      },
      getMessage: () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };
        // fetching data from the backend
        fetch(
          "https://3001-nozigs-nozigs-8fn6hvofjfr.ws-eu38.gitpod.io/api/hello",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      saveName: (name) => {
        //get the store
        const store = getStore();

        setStore({ name: name });
      },
      saveLocations: (data) => {
        const store = getStore();

        setStore({ locations: data });
      },
      saveGeometry: (geo) => {
        const store = getStore();

        setStore({ geometry: geo });
      },
    },
  };
};

export default getState;
