import axios from "axios";
import { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SliderData from "./SliderData";



function SliderProduct() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?sort=desc")
      // .get('https://fakestoreapi.com/products?limit=5')
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const prodata=data.map((elm ,i)=><SliderData key={i} data={elm} />)
  return (
    <div className="back-ground">
        {/* <h1 className="text-light">Carousel product</h1> */}
      <Carousel responsive={responsive}>
    {prodata}
        </Carousel>
    </div>
  );
}

export default SliderProduct;
