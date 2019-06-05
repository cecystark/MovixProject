import React from 'react';

class BadgeForm extends React.Component {

  state = {};

  handleClick = e => {
    
    console.log('Button was clicked');

    this.setState({
      [e.target.name]: e.target.value,   
    });
  };

  render() {
    return (
      <div className="BadgeNew__Forms">
        <h2 className="font-weight-light">Registrate!</h2>

        <form >
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            CREÁ TU USUARIO
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
