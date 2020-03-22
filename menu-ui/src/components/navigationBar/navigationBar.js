import './navigationBar.css';
import logo from '../../dish.svg';

import React from 'react';
import { Link } from 'react-router-dom';
// import { Route, Switch, Link } from 'react-router-dom';
// import SignIn from '../signIn/signIn';
// import App from '../../App';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isExpand: false };
    this.updateNavigation = this.updateNavigation.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  updateNavigation() {
    this.setState({ isExpand: false });
  }

  toggleMenu() {
    this.setState({ isExpand: !this.state.isExpand });
  }

  render() {
    return (
      <div>
        <nav role="navigation">
          <div id="menuToggle">
            {/* burasi editlendi onClick di onChange yapıldı */}
            <input
              type="checkbox"
              checked={this.state.isExpand}
              onChange={this.toggleMenu}
            />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>
                <Link to="/signin" onClick={this.updateNavigation}>
                  Oturum aç
                </Link>
              </li>
              <li>
                <Link to="/signin" onClick={this.updateNavigation}>
                  Üye ol
                </Link>
              </li>
              <li>
                <Link to="/" onClick={this.updateNavigation}>
                  Nasıl kullanılır?
                </Link>
              </li>
              <li>
                <Link to="/" onClick={this.updateNavigation}>
                  Anasayfa
                </Link>
              </li>
            </ul>
          </div>
          <img src={logo} alt="its lugo" />
        </nav>
      </div>
    );
  }
}
