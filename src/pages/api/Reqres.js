import React from "react";

const Mdata = ({ dat, index }) => (
  <tr>
    <td>{dat.id}</td>
    <td>{dat.email}</td>
    <td>
      {dat.first_name} {dat.last_name}
    </td>
    <td>
      <img src={dat.avatar} alt={dat.last_name} />
    </td>
  </tr>
);

export default class Reqres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page")
      .then(res => res.json())
      .then(mapdata => {
        this.setState({
          loading: false,
          mapdata
        });
      });
  }

  loading() {
    return "Loading...";
  }

  error() {
    return this.state.error.message;
  }

  show() {
    const { error, mapdata } = this.state;

    if (error) {
      return this.error();
    }

    return (
      <React.Fragment>
        <br />
        <table className="table table-bordered table-condensed table-hover table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>mail</th>
              <th>full name</th>
              <th>avatar</th>
            </tr>
          </thead>
          <tbody>
            {mapdata.data.map((dat, key) => (
              <Mdata dat={dat} index={key} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  render() {
    if (this.state.loading) {
      return this.loading();
    } else if (this.state.error) {
      return this.error();
    } else {
      return this.show();
    }
  }
}
