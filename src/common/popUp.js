import React from "react";

export default function popUp({ removeItem, setDeletePopUp }) {
  return (
    <div className="popup">
      <div className="popup_container" onClick={() => setDeletePopUp(false)}>
        <span>X</span>
        <div className="content">
          <div className="msg">
            <p>Are you sure you wants delete this item</p>
            <div className="delbtn">
              <button onClick={() => removeItem()}>Delete Item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
