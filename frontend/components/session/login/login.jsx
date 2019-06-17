import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../logo';
import style from '../session.module.scss';
import loginStyle from './login.module.scss';
import {Errors} from '../../errors/errors';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginButtonClass: style.submit
    };

    if (props.demoLoginSet) {
      this.state = {
        email: 'test@test.com',
        password: 'password',
        loginButtonClass: loginStyle.glowOnce
      };
    }

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
    if(this.props.demoLoginSet) this.props.clearDemoUser();
  }


  render() {
    const loginButtonStyle = this.state.loginButtonClass;

    return (
      <div>
        <header className={style.header}>
          <Logo/>
        </header>

        <Errors errors={this.props.errors}
          clearErrors={this.props.clearSessionErrors}/>

        <div className={style.sessionBody}>
          <form onSubmit={this.handleSubmit}
            className="login_form_box">
            <h1 className={style.sessionFormHeader}>
              Log In to Zelp
            </h1>
            <div>
              <strong>New to Zelp?  &nbsp; <Link to="/signup">Sign up</Link></strong>
            </div>

            <div>
              <label>
                <input
                  className={style.input}
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"/>
              </label>
              <br />
              <label>
                <input
                  className={style.input}
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"/>
              </label>
              <br />
              <input className={loginButtonStyle}
                type="submit"
                value="Log In" />
            </div>
          </form>
          <img className={style.image}
            src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
        </div>
      </div>
    );
  }
}

export default LoginForm;
