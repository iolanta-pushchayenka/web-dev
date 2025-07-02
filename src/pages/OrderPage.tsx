import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderList from "../components/OrderList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMenu } from "../store/menuSlice";
import { AppDispatch } from "../store/store";

const OrderPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <div>
      <Header />
        <OrderList />
      <Footer />
    </div>
  );
};

export default OrderPage;
