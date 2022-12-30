import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
  db,
} from "../../Utils/firebase";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

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
    { label: "Sensor", value: "sensor" },
    { label: "Transducer", value: "transducer" },
    { label: "Display", value: "display" },
    { label: "Microprocessor", value: "microprocessor" },
  ];

  const conditionOPtions = [
    {
      label: "Brand",
      value: "brand",
    },
    { label: "Used", value: "used" },
  ];

  const storage = getStorage();
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  const uploadToDatabase = async () => {
    await addDoc(collection(db, "products"), {
      category: state.category,
      condition: state.condition,
      feature: state.feature,
      id: state.id,
      image: imgUrl,
      item: state.item,
      price: state.price,
      quantity: state.quantity,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadToDatabase();
    alert("successfully uploaded");
    console.log(state);
  };

  const handleFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    //const name = file[0].name;
    console.log(file.name);
    if (!file) return;

    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "productsImage/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
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
            <textarea
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
            <input type="file" onChange={handleFile} />
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

      {!imgUrl && (
        <div className="outerbar">
          <div className="innerbar" style={{ width: `${progresspercent}%` }}>
            {progresspercent}%
          </div>
        </div>
      )}
      {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />}
    </div>
  );
}

export default Admincontents;
