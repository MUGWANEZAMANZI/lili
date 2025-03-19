/* eslint-disable react/prop-types */
const Popup = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-5 rounded-lg shadow-lg w-80">
          <h2 className="text-lg font-semibold">Item Details</h2>
          {data && (
            <>
              <p className="mt-2">🛍️ <strong>{data.name}</strong></p>
              <p className="mt-2">📞 Phone: <strong>{data.phone}</strong></p>
              <p className="mt-2">💳 Payment Methods:</p>
              <ul className="list-disc ml-6">
                {data.paymentMethods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
            </>
          )}
          <button
            onClick={onClose}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Popup;
  