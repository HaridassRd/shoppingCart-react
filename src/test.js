import React, { useContext, useState } from "react";
import TestContext from "./context";

function Test() {

  const AllDatas = useContext(TestContext);
  const addedData = (data) => {
    AllDatas.setSelectedItem([...AllDatas.selectedItem, data]);
    AllDatas.setDisabledButtons([...AllDatas.disabledButtons, data]);
  };
  return (
    <div className="ItemList">
      <p>{AllDatas.update}</p>

      <div className="datas">
        {AllDatas.filteredData.map((datas) => (
          <div className="items">
            <div className="listItem">
              <img src={datas.image} width="250px" height="250px" />
              <div className="addCart">
                <div>{datas.category}</div>
                <div>
                  <button
                    onClick={() => addedData(datas)}
                    disabled={AllDatas.disabledButtons.includes(datas)}
                  >
                    addItem
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
