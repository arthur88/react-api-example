import React from "react";

const Home = () => (
  <section className="Home">
    <div className="alert alert-info">
      Please click on `Fetch from API` to see working REST API solution with
      `useEffect`
    </div>
    <h3>Using following API's</h3>
    <ul>
      <li>
        <code>Typecode:</code> https://jsonplaceholder.typicode.com/users
      </li>
      <li>
        <code>Reqres</code>: https://reqres.in/api/users?page
      </li>
      <li>
        <code>Vilnius Traffic API</code>:
        https://arcgis.sviesoforai.lt/arcgis/rest/services/VIS/Vilnius_sde_dynamic/MapServer/12/query?where=1%3D1&outFields=*&outSR=4326&f=json
      </li>
    </ul>
  </section>
);

export default Home;
