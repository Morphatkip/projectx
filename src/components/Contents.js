import {
  collection,
  db,
  getDocs,
  getStorage,
  ref,
  getDownloadURL,
} from "../Utils/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Content.css";

function Contents({ setProductDetails }) {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const storage = getStorage();

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

  const getImageUrl = (imagePath) => {
    if (!imagePath) return;
    const imageRef = ref(storage, `${imagePath}`);

    getDownloadURL(imageRef)
      .then((url) => {
        setImage(url);
        console.log(url);
        return url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      {filteredProduct.map((element) => (
        /*  getImageUrl(element.image), */
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
  );
}

const Frame = ({ name, ImgPath, handleProduct, productOverview, price }) => {
  return (
    <div className="col-3">
      <div className="thumbnail container-div">
        <button onClick={handleProduct}>
          <img src={ImgPath} alt=" to display" className="product-img" />
          <div className="caption ">
            <p style={{ width: 240 }}>{name}</p>
            <p>Ksh {price}</p>
          </div>
        </button>
      </div>
    </div>
  );
};
export default Contents;
