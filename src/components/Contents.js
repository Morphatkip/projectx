import { collection, db, getDocs } from "../Utils/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Content.css";
import NavBarDown from "./Navbar/NavBarDown";

function Contents({ setProductDetails }) {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchField, setSearchField] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(); // getting the data
  }, []);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const newInfo = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      newInfo.push(data);
    });
    setProducts(newInfo);
  };

  useEffect(() => {
    if (searchField) {
      const filtered = products.filter(
        (item) =>
          item.item.toLowerCase().indexOf(searchField.toLowerCase()) >= 0
      );
      setFilteredProduct(filtered);
    } else {
      setFilteredProduct(products);
    }
  }, [searchField, products]);

  const handleProduct = (name, ImgPath, description) => {
    setProductDetails(name, ImgPath, description);
    navigate("/item");
  };

  return (
    <div>
      <NavBarDown />
      <div style={{ backgroundColor: "whitesmoke" }}>
        <div className="container">
          <div className="row mt-3">
            {filteredProduct.map((element) => (
              <Frame
                key={element.ID}
                name={element.item}
                ImgPath={element.image}
                handleProduct={() =>
                  handleProduct(element.item, element.image, element.features)
                }
                productOverview={element.features}
                price={element.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Frame = ({ name, ImgPath, handleProduct, productOverview, price }) => {
  return (
    <div className="col-sm-3">
      <button onClick={handleProduct} className="content-frame">
        <div className="image-container">
          <img src={ImgPath} alt=" to display" className="product-img" />
        </div>
        <div className="product-caption">
          <p>{name}</p>
        </div>
        <p style={{}}>Ksh {price}</p>
      </button>
    </div>
  );
};
export default Contents;
