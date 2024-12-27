import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UseActionTypes from "../../redux/user/action-types.js";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  console.log("Testando here:", currentUser);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch({
      type: UseActionTypes.LOGIN,
      payload: { name: "User Anonymous", email: "anonymous@gmail.com" },
    });
  };

  const handleLogoutClick = () => {
    dispatch({
      type: UseActionTypes.LOGOUT,
    });
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
