import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <div
        className="logo-img"
        style={{
          backgroundImage: "url(" + process.env.PUBLIC_URL + "/ntlogo.png",
          backgroundSize: "cover"
        }}
      ></div>
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        PRODAVNICA
      </Link>
      <Link className="option" to="/contact">
        KONTAKT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          ODJAVI SE
        </div>
      ) : (
        <Link className="option" to="/signin">
          PRIJAVI SE
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
