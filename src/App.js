import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import {sendCartData} from "./components/store/cart-actions"
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart))
  }, [cart, dispatch]);

  return (
    <Fragment>
      <Layout>
        {notification && (
          <Notification
            status={notification.status}
            message={notification.message}
            title={notification.title}
          />
        )}
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
