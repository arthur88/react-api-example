import React from "react";
import { useAsync } from "react-async";

const loadApi = async () =>
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function Typecode() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadApi });

  if (isLoading) return "Loading...";
  if (error)
    return `<div className='alert alert-danger'>${error.message}</div>`;
  if (data)
    return (
      <div className="container">
        <div>
          <h2>React Async - Random Users</h2>
        </div>
        <div class="row">
          {data.map(user => (
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <div key={user.username} className="card">
                <div className="card-body">
                  <div className="card-title">
                    {user.name} ({user.username})
                  </div>
                  <div className="card-subtitle text-muted">
                    {user.company.bs}
                  </div>
                  <br />
                  <div className="card-text">Email: {user.email} </div>
                  <div className="card-text">
                    Address: {user.address.street}, {user.address.suite},{" "}
                    {user.address.city}
                  </div>
                  <div className="card-text">
                    ZIP code: {user.address.zipcode}{" "}
                  </div>
                  <div className="card-text">
                    GEO Location: {user.address.geo.lat}, {user.address.geo.lng}
                  </div>
                  <div className="card-text">Phone: {user.phone} </div>
                  <div className="card-text">Email: {user.email} </div>
                  <div className="card-text">www: {user.website} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Typecode;
