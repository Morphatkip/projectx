import React from "react";
import "../Styles/ClickedProductsDetails.css";
import Minus from "../images/icons/minus.png";
import Add from "../images/icons/add.png";
import { Tab, Tabs } from "react-bootstrap";
function ClickedProductDetails({ name, imgPath, description }) {
  return (
    <div>
      {" "}
      <div className="row container gy-5">
        <div className="col-md-6 how-img">
          <img src={imgPath} alt=" nothing" className="img-product" />
        </div>
        <div className="col-md-6">
          <h1>
            <p>{name}</p>
          </h1>
          <h1>
            <p>KES 67.00</p>
          </h1>

          <p>{description}</p>
          <div>Quantity</div>
          <span>
            <button>
              <img src={Minus} alt="minus" style={{ width: 27 }} />
            </button>
            1
            <button>
              <img src={Add} alt="add" style={{ width: 30 }} />
            </button>
          </span>

          <div className="cart-spacing">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div>
        <Tabs defaultActiveKey="description" id="#" className="mb-3 m-4">
          <Tab eventKey="description" title="DESCRIPTION"></Tab>

          <Tab eventKey="specifications" title="SPECIFICATION"></Tab>
          <Tab eventKey="review" title="REVIEW"></Tab>
        </Tabs>
      </div>
      <div>
        <h1>Related Products</h1>
      </div>
    </div>
  );
}

export default ClickedProductDetails;
