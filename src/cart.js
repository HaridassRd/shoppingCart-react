import React, { useContext, useState } from "react";
import TestContext from "./context";
import PopUp from "./common/popUp";

function Cart({ counts, setCounts }) {
  const [deletePopUp, setDeletePopUp] = useState(false);
  const CartItem = useContext(TestContext);

  const handleAdd = (itemId) => {
    return setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };

  const handleSub = (itemId) => {
    setCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      if (updatedCounts[itemId] > 1) {
        updatedCounts[itemId] -= 1;
      }
      return updatedCounts;
    });
  };

  const removeItem = () => {
    setDeletePopUp(false)
    const selectedItem = CartItem.selectedItem.filter(
      (item) => item.id !== deletePopUp
    );
    CartItem.setSelectedItem([...selectedItem]);
    CartItem.setDisabledButtons([...selectedItem]);
    setCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      delete updatedCounts[deletePopUp];
      return updatedCounts;
    });
  };

  return (
    <div>
      {deletePopUp ? (
        <div>
          <PopUp removeItem={removeItem} setDeletePopUp={setDeletePopUp}/>
        </div>
      ) : (
        <div>
          <div className="header">
            <h1>{CartItem.selectedItem.length ? "Added Items" : "No Data"}</h1>
          </div>
          <div className="datas">
            {CartItem.selectedItem.map((datas) => (
              <div className="items" key={datas.id}>
                <div className="listItem">
                  <img
                    src={datas.image}
                    width="250px"
                    height="250px"
                    alt={datas.category}
                  />
                  <div className="addCart">
                    <div>{datas.category}</div>
                    <div>
                      <button onClick={() => setDeletePopUp(datas.id)}>
                        Remove
                      </button>
                    </div>
                    <div>
                      <button onClick={() => handleSub(datas.id)}>-</button>
                      <button onClick={() => handleAdd(datas.id)}>+</button>
                    </div>
                    <p>Qty : {counts[datas.id] || 1}</p>
                    <p>Price : {datas.price * (counts[datas.id] || 1)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
