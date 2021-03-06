
// Page specific
import QuoteForm from './QuoteForm';
import HomeJumbotron from './Jumbo/HomeJumbo';
import Information from './Information/Information';
import HomeTiles from './HomeTiles/HomeTiles';
import Companies from './Companies/Companies';
import QuestionForm from './QuestionForm/QuestionForm';
import CompanyLogosLarge from '../../common/CompanyLogos/CompanyLogosLarge'
import CompanyLogosSmall from '../../common/CompanyLogos/CompanyLogosSmall'

// React
import React from 'react'

// styles
import Logos from '../../css/logos.css'

export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let menuItems = document.querySelectorAll("#main-menu li");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById("HomeMenuItem").classList.add("active");

    window.addEventListener('resize', () => this.forceUpdate())
    $('html, body').animate({ scrollTop: 0 }, 'slow', function () {});


  }

  render () {

    let width = window.innerWidth;
    console.log("resizing");
    if (width > 768) {
      return (
        <div className="row-no-padding">
          <div className={``}>
            <HomeJumbotron/>
            <Information/>
            <HomeTiles />
            <div className="col-xs-12 col-sm-10 col-lg-8 col-sm-offset-1 col-lg-offset-2">
              <CompanyLogosLarge />
            </div>
          </div>
        </div>

      )
    } else {
      return (
        <div className="row-no-padding">
          <div className={`col-xs-12`}>
            <HomeJumbotron/>
            <Information/>
            <HomeTiles />
            <CompanyLogosLarge />
          </div>
        </div>
      )
    }
  }
}
