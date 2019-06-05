import React from 'react';

class BadgeLogin extends React.Component {

  state = {};

  handleClick = e => {
    
    console.log('Button was clicked');

    this.setState({
      [e.target.name]: e.target.value,   
    });
  };

  render() {
    return (
      <div className= "BadgeNew__Forms">
            <h2>Ya tenés usuario?</h2>

        <form>
          <div className="form-group">
            <label>Usuario</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
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
            LOG IN!
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeLogin;