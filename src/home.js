import React, {
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import TestContext from "./context";
import Test from "./test";
function Home() {
  const UpdateVal = useContext(TestContext);
  const [value, setValue] = useState(0);
  const [txt, setTxt] = useState("");

  const updateText = useCallback((e) => {
    const enteredText = e.target.value;

    setTxt(enteredText);
  }, []);

  useEffect(() => {
    const filteredResult = UpdateVal.data.filter((item) =>
      item.category.toLowerCase().includes(txt.toLowerCase())
    );
    UpdateVal.setFilteredData(filteredResult);
    setValue(filteredResult.length);
  }, [ UpdateVal.setFilteredData, txt]);

  const d = useMemo(() => {
    const result = value || 0;
    return <div className="datacount"> {"Total Items : " + result}</div>;
  }, [value]);

  return (
    <div>
      <div className="header">
        <h1><span>HRD</span>ONLINE SHOPPING </h1>
        <div className="searchbox">
          {d}
          <label> Search the items : </label>
          <input
            type="text"
            placeholder=" Search the items category"
            onChange={updateText}
          />
        </div>
      </div>
      <Test />
    </div>
  );
}

export default Home;
