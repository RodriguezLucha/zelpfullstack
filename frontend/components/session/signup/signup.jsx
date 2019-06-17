import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../logo';
import style from '../session.module.scss';
import {Errors} from '../../errors/errors';

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

  render() {
    return (
      <div>
        <header className={style.header}>
          <Logo/>
        </header>

        <Errors
          clearErrors={this.props.clearSessionErrors}
          errors={this.props.errors}/>

        <div className={style.sessionBody}>
          <form
            className="login_form_box"
            onSubmit={this.handleSubmit}>
            <h1 className={style.sessionFormHeader}>
              Sign Up for Zelp
            </h1>
            <div>
              <strong>Connect with great local restaurants</strong>
            </div>
            <div className="login_form">
              <label>
                <input
                  className={style.input}
                  onChange={this.update('firstname')}
                  placeholder="First Name"
                  type="text"
                  value={this.state.firstname}/>
              </label>
              <br />
              <label>
                <input
                  className={style.input}
                  onChange={this.update('lastname')}
                  placeholder="Last Name"
                  type="text"
                  value={this.state.lastname}/>
              </label>
              <br />
              <label>
                <input
                  className={style.input}
                  onChange={this.update('email')}
                  placeholder="Email"
                  type="text"
                  value={this.state.email}/>
              </label>
              <br />
              <label>
                <input
                  className={style.input}
                  onChange={this.update('password')}
                  placeholder="Password"
                  type="password"
                  value={this.state.password}/>
              </label>
              <br />
              <input
                className={style.submit}
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
          <img
            className={style.image}
            src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
        </div>
      </div>

    );
  }
}

export default SignupForm;
