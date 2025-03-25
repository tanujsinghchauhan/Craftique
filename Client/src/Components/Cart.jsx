import Homebg from "../assets/home_bg.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [codDetails, setCodDetails] = useState({
    address: "",
    pinCode: "",
    phoneNumber: "",
  });
  const [upiId, setUpiId] = useState("");

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Handle Payment
  const handleConfirmPayment = () => {
    if (paymentMethod === "Card") {
      if (
        !cardDetails.cardNumber ||
        !cardDetails.cvv ||
        !cardDetails.expiryDate ||
        !cardDetails.cardName
      ) {
        alert("Please fill in all card details.");
        return;
      }
    } else if (paymentMethod === "COD") {
      if (
        !codDetails.address ||
        !codDetails.pinCode ||
        !codDetails.phoneNumber
      ) {
        alert("Please fill in all delivery details.");
        return;
      }
    } else if (paymentMethod === "UPI") {
      if (!upiId) {
        alert("Please enter your UPI ID.");
        return;
      }
    }

    alert(`Payment Successful via ${paymentMethod}!`);
    setShowPaymentModal(false);
    clearCart(); // Clears cart after payment
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${Homebg})`, backgroundSize: "cover" }}
        className="min-h-screen"
      >
        <Navbar />

        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-orange-500 font-bold">
                      ₹{item.price.toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Subtotal & Buttons */}
              <div className="mt-6 text-right">
                <p className="text-lg font-semibold">
                  Subtotal: ₹{subtotal.toLocaleString()}
                </p>

                <div className="mt-3 flex justify-end gap-4">
                  <button
                    className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                  <button
                    className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
                    onClick={() => setShowPaymentModal(true)}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h3 className="text-lg font-semibold">Choose Payment Method</h3>

            <div className="mt-4 space-y-2">
              <label className="block">
                <input
                  type="radio"
                  value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={() => setPaymentMethod("Card")}
                  className="mr-2"
                />
                Credit/Debit Card
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="UPI"
                  checked={paymentMethod === "UPI"}
                  onChange={() => setPaymentMethod("UPI")}
                  className="mr-2"
                />
                UPI
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>

            {/* Card Payment Details */}
            {paymentMethod === "Card" && (
              <div className="mt-4 space-y-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardDetails.cardNumber}
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      cardNumber: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md"
                  maxLength={16}
                />
                <input
                  type="text"
                  placeholder="Name on Card"
                  value={cardDetails.cardName}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, cardName: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails.expiryDate}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        expiryDate: e.target.value,
                      })
                    }
                    className="w-1/2 p-2 border rounded-md"
                    maxLength={5}
                  />
                  <input
                    type="password"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvv: e.target.value })
                    }
                    className="w-1/2 p-2 border rounded-md"
                    maxLength={3}
                  />
                </div>
              </div>
            )}

            {/* UPI Payment Details */}
            {paymentMethod === "UPI" && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Enter UPI ID"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}

            {/* COD Details */}
            {paymentMethod === "COD" && (
              <div className="mt-4 space-y-2">
                <input
                  type="text"
                  placeholder="Delivery Address"
                  value={codDetails.address}
                  onChange={(e) =>
                    setCodDetails({ ...codDetails, address: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Pin Code"
                  value={codDetails.pinCode}
                  onChange={(e) =>
                    setCodDetails({ ...codDetails, pinCode: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  maxLength={6}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={codDetails.phoneNumber}
                  onChange={(e) =>
                    setCodDetails({
                      ...codDetails,
                      phoneNumber: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-md"
                  maxLength={10}
                />
              </div>
            )}

            {/* Payment Buttons */}
            <div className="flex justify-between mt-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
                onClick={handleConfirmPayment}
              >
                Confirm Payment
              </button>
              <button
                className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                onClick={() => setShowPaymentModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
