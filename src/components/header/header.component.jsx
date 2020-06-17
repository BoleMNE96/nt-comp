import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
  LogoImg
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <LogoImg
        style={{
          backgroundImage: "url(" + process.env.PUBLIC_URL + "/ntlogo.png",
          backgroundSize: "cover"
        }}
      ></LogoImg>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">PRODAVNICA</OptionLink>
      <OptionLink to="/contact">KONTAKT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>ODJAVI SE</OptionDiv>
      ) : (
        <OptionLink to="/signin">PRIJAVI SE</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
