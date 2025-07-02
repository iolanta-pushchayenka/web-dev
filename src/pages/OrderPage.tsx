import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderList from "../components/OrderList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../store/menuSlice";
import { AppDispatch, RootState } from "../store/store";


const OrderPage = () => {
  const dispatch = useDispatch<AppDispatch>();


const cart = useSelector((state: RootState) => state.cart.cart);
const totalCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <div>
      <Header addToCartCount={totalCount}/>
        <OrderList />
      <Footer />
    </div>
  );
};

export default OrderPage;
