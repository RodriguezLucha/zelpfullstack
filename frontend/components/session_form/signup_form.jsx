import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: ''
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

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  renderErrors() {
    return(
      <ul className='error_container' >
        {this.props.errors.map((error, i) => (
          <li className='error_alert'
            key={`error-${i}`}>
            <div className='error_text'>
              {error}
            </div>
            <button className='error_cancel'
              onClick={() => this.props.clearSessionErrors()}>×</button>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login_form_container">
        <div className="form_header">
          <Logo/>
        </div>
        {this.renderErrors()}
        <div className='login_form_body'>
          <form onSubmit={this.handleSubmit}
            className="login_form_box">
            <h1>
              Sign Up for Zelp
            </h1>
            <div>
              <strong>Connect with great local restaurants</strong>
            </div>
            <div className="login_form">
              <label>
                <input type="text"
                  value={this.state.firstname}
                  onChange={this.update('firstname')}
                  className="login_input"
                  placeholder="First Name"/>
              </label>
              <br />
              <label>
                <input type="text"
                  value={this.state.lastname}
                  onChange={this.update('lastname')}
                  className="login_input"
                  placeholder="Last Name"/>
              </label>
              <br />
              <label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login_input"
                  placeholder="Email"/>
              </label>
              <br />
              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login_input"
                  placeholder="Password"/>
              </label>
              <br />
              <input className="session_submit"
                type="submit"
                value="Sign Up" />
              <br/>
              <div className='small'>
                <small> Already on Zelp? &nbsp;
                  <Link to="/login">Log In</Link>
                </small>
              </div>
            </div>
          </form>
          <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
        </div>
      </div>

    );
  }
}

export default SignupForm;
