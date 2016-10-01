import React from 'react';
import styles from './HomeJumbo.css';

var Select = require('react-select');
var options = [
    { value: 'life', label: 'Life Insurance' },
    { value: 'critical', label: 'Critical Illness' },
    { value: 'over50s', label: `,Over 50's Insurance` },
    { value: 'income', label: 'Income Protection' },
    { value: 'buildings', label: 'Building and contents' },
    { value: 'landlord', label: 'Landlord Insurance' }
];

export default class App extends React.Component {
  constructor() {
    super();
  }

  logChange(val) {
      console.log("Selected: " + val.value)
  }

  render() {
    return (
      <div className={`${styles.jumboContainer} jumbotron`}>
        <div className={`text-center`}>
          <div className={`${styles.textContainer}`}>
            <h1 className={`${styles.jumboHeader}`}>a fresh new approach to life insurance</h1>
            <h3 className={`${styles.subHeading}`}> Talk to one of our experts on</h3>
            <span className={`${styles.phoneNumber}`}>07657 155 263</span> or <span className={`${styles.phoneNumber}`}>01908 411 142</span>
          </div>

          <div className={`col-sm-6 col-sm-offset-3 col-xs-12`}>
            <Select
                name="form-field-name"
                options={options}
                onChange={this.logChange.bind(this)}
                placeholder="I want to purchase..."
            />
          </div>
        </div>

        <div className={`${styles.jumboIcons} hidden-xs col-xs-3 col-xs-offset-2`}>

          <i className={`${styles.jumboLogo} fa fa-facebook-official`} aria-hidden="true"></i>
          <i className={`${styles.jumboLogo} fa fa-twitter-square`} aria-hidden="true"></i>
          <i className={`${styles.jumboLogo} fa fa-linkedin-square`} aria-hidden="true"></i>

        </div>

      </div>
    )
  }
}
