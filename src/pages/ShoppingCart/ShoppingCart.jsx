import { useGlobalContext } from "./context";
import CartHead from "./CartHead";
import CartContainer from "./CartContainer";

const ShoppingCart = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-64px)] mt-16 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <CartHead />
      <CartContainer />
    </div>
  );
};

export default ShoppingCart;
