import React, { Component } from "react";

export default class CRUD extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: "1", name: "John", designation: "SE", salary: "200000" },
        { id: "2", name: "Henry", designation: "PM", salary: "100000" },
        { id: "3", name: "McArthy", designation: "TL", salary: "300000" },
        { id: "4", name: "Kant", designation: "ASE", salary: "200000" },
        { id: "5", name: "Sharma", designation: "SSE", salary: "200000" },
      ],
      currItem: { id: "", name: "", designation: "", salary: "" },
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
  }
  handleDelete(key) {
    this.setState({
      items: this.state.items.filter((a, i) => i !== key),
    });
  }
  handleEdit(key) {
    this.setState({
      // items: this.state.items.filter((a, i) => i === key),
      currItem: {
        id: this.state.items[key].id,
        name: this.state.items[key].name,
        designation: this.state.items[key].designation,
        salary: this.state.items[key].salary,
      },
    });
    console.log(this.state.currItem);
  }
  handleChanges(e) {
    let field = e.target.name;
    let currentItem = { ...this.state.currentItem };
    currentItem[field] = e.target.value;
    this.setState({ currentItem: { ...currentItem } });
    console.log(this.state.items);
  }
  render() {
    return (
      <div className=" justify-content-center mt-5">
        <form>
          <div className="mb-3 row">
            <label for="ID" className="col-sm-2 col-form-label">
              ID
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control"
                value={this.state.currItem.id}
                onChange={this.handleChanges}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="Name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                value={this.state.currItem.name}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="designation" className="col-sm-2 col-form-label">
              Designation
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="designation"
                value={this.state.currItem.designation}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="salary" className="col-sm-2 col-form-label">
              Salary
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="salary"
                value={this.state.currItem.salary}
              />
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button className="btn btn-success me-md-2 w-50" type="button">
              Save
            </button>
            <button className="btn btn-warning w-50" type="button">
              Reset
            </button>
          </div>
        </form>
        <br />
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, key) => (
              <tr key={key}>
                <td> {item.id} </td>
                <td> {item.name} </td>
                <td> {item.designation} </td>
                <td> {item.salary} </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => this.handleEdit(key)}
                  >
                    Details
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.handleEdit(key)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(key)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
