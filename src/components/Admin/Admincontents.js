import { getStorage, uploadBytesResumable, ref } from "../../Utils/firebase";
import React, { useState } from "react";

function Admincontents() {
  const [state, setState] = useState({
    category: "",
    condition: "",
    feature: "",
    id: "",
    image: "",
    item: "",
    price: "",
    quantity: "",
  });

  const options = [
    { label: "Ic", value: "ic" },
    { label: "Microcontroller", value: "microcontroller" },
    { label: "Cable", value: "cable" },
    { label: "Resistor", value: "resistor" },
    { label: "Capacitor", value: "capacior" },
  ];

  const conditionOPtions = [
    {
      label: "Brand",
      value: "brand",
    },
    { label: "Used", value: "used" },
  ];

  const storage = getStorage();
  const [imgUrl, setImgUrl] = usestate(null);
  const [progresspercent, setProgresspercent] = setState(0);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <div>
        {" "}
        <h1>Add a component </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className=" form-group row">
          <label className="col-sm-2 ">Category</label>
          <div className="col-sm-10 select-container">
            <select
              name="category"
              onChange={handleChange}
              value={state.category}
            >
              {options.map((option) => (
                <option key={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className=" form-group row">
          <label className="col-sm-2 "> Condition</label>
          <div className="col-sm-10">
            <select
              name="condition"
              value={state.condition}
              onChange={handleChange}
            >
              {conditionOPtions.map((condition) => (
                <option key={condition.value}>{condition.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className=" form-group row">
          <label className="col-sm-2 "> Features</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="feature"
              value={state.feature}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className=" form-group row">
          <label className="col-sm-2"> Id </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="id"
              onChange={handleChange}
              value={state.id}
            />
          </div>
        </div>

        <div className=" form-group row">
          <label className="col-sm-2 "> Image</label>
          <div className="col-sm-10">
            <input
              type="file"
              value={state.image}
              name="image"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className=" form-group row">
          <label className="col-sm-2 ">Item</label>
          <div className="col-sm-10">
            <input
              type=" text"
              name="item"
              value={state.item}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className=" form-group row">
          <label className="col-sm-2 "> Price</label>
          <div className="col-sm-10">
            <input
              type=" text"
              name="price"
              value={state.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className=" form-group row">
          <label className="col-sm-2 "> Quantity</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="quantity"
              value={state.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Admincontents;
