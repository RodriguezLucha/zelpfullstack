import React from 'react';
import styles from './errors.module.scss';


export class Errors extends React.Component {
  componentWillUnmount(){
    this.props.clearErrors();
  }

  render() {
    return (
      <ul className={styles.container}>
        <div className={styles.block}>
          {
            this.props.errors.map((error) => (
              <li className={styles.alert}
                key={`error-${error}`}>
                <div className={styles.text}>{error}</div>
                <button className={styles.cancel}
                  onClick={() => this.props.clearErrors()}>×</button>
              </li>
            ))
          }
        </div>
      </ul>
    );
  }
}
