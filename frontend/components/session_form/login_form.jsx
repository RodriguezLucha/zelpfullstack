import React from 'react';
import {Link} from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="form_header">
          <h1>
            <Link to="/">
                Zelp <i className="fas fa-wine-glass-alt"></i>
            </Link>
          </h1>
        </div>
        <div className='login_form_body'>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1>
              Log In to Zelp
            </h1>
            <div>
              <strong>New to Zelp?  &nbsp; <Link to="/signup">Sign up</Link></strong>
            </div>
            {this.renderErrors()}
            <div className="login-form">
              <label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="Email"
                />
              </label>
              <br/>
              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
              </label>
              <br/>
              <input className="session-submit" type="submit" value="Log In" />
            </div>
          </form>
          <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
        </div>
      </div>
    );
  }
}

export default LoginForm;
