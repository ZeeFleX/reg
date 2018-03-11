import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/app/header/mainmenu/mainmenu.css';
import '../css/app/header/mainmenu/mainmenu_theme.css';
import '../css/app/header/mainmenu/mainmenu__item.css';
import '../css/app/header/mainmenu/mainmenu__item_theme.css';
import '../css/app/header/mainmenu/mainmenu__item_hover-active.css';

class Menu extends Component {
  render() {
    return (
      	<ul className="mainmenu">
      		<li className="mainmenu__item">
      			<Link to="/">Tiles</Link>
      		</li>
      		<li className="mainmenu__item">
      			<Link to="/about">About</Link>
      		</li>
      		<li className="mainmenu__item">
      			<Link to="/contacts">Contacts</Link>
      		</li>
      	</ul>
    );
  }
}

export default Menu;