import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import bike from "../img/bike.png";
import chair from "../img/ab7e2b022a4587dd.jpg";
import air from "../img/air1.png";
import babe from "../img/baby.png";
import cloth from "../img/cloths.png";
import grocery from "../img/ditar1.png";
import electro from "../img/electro.png";
import gift from "../img/gift.png";
import tv from "../img/tv.png";
import smart from "../img/smart.png";

const FlipCate = () => {
  return (
    <div className="container bg-light ">
      <div className="row ">
        <div className="col-md-1 cat ">
          <img src={grocery} alt="" />
            <p className="te-area pt-2">
            Grocery
            </p>
        </div>
        <div className="col-md-1 cat">
          <img src={smart} alt="" />
          <p className="te-area pt-2">Mobiles</p>
        </div>
        <div className="col-md-1 cat">
          <img src={cloth} alt="" />
          <Dropdown>
            <Dropdown.Toggle className="te-area" variant="" id="dropdown-basic">
              Fashion
            </Dropdown.Toggle>
            <Dropdown.Menu className="rounded-0 py-3 px-2 ">
              <Dropdown.Item className="text-drop" href="#/action-1">Men's Top Wear</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Men's  Bottom Wear</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Women Ethnic</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Women Western</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Men Footwear</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Watches and Accessories</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Bug,s Suitcase & Luggage</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Kids</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Essentials</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Winter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-1 cat">
          <img src={electro} alt="" />
          <Dropdown>
            <Dropdown.Toggle className="te-area" variant="" id="dropdown-basic">
              Electronices
            </Dropdown.Toggle>
            <Dropdown.Menu className="rounded-0 py-3 px-2">
              <Dropdown.Item className="text-drop" href="#/action-1">Electronics GST Store</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Cameras & Accessories</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Computer Peripherals</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Gaming</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Health & Personal Care</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Laptop and Accessories</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Laptop and Desktop</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">MoblieAccessory</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Powerbank</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Smart Home automation</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Smart Wearables</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Storage</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-1 cat">
          <img src={chair} alt="" />
          <Dropdown>
            <Dropdown.Toggle className="te-area" variant="" id="dropdown-basic">
              Home & Furniture
            </Dropdown.Toggle>
            <Dropdown.Menu className="rounded-0 py-3 px-2">
              <Dropdown.Item className="text-drop" href="#/action-1">Home Furnishings</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Furniture Studio</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Living Room Furniture</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Kitchen & Dining</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Bedroom Furniture</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Home Decor</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Tools & Utility</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Work Space Furniture</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Lightings and Electricals</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Space Saving Furniture</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Cleaning & Bath</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Kids Furniture</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Pet & Gardening</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-1 cat">
          <img src={tv} alt="" />
          <p className="te-area pt-2">
            Appliances
            </p>
        </div>
        <div className="col-md-1 cat">
          <img src={air} alt="" />
          <p className="te-area pt-2">
            Travel
            </p>
        </div>
        <div className="col-md-1 cat">
          <img src={gift} alt="" />
          <p className="te-area pt-2">
            Top Offers
            </p>
        </div>
        <div className="col-md-1 cat">
          <img src={babe} alt="" />
          <Dropdown>
            <Dropdown.Toggle className="te-area pe-5" variant="" id="dropdown-basic">
              Beauty,toys & More
            </Dropdown.Toggle>
            <Dropdown.Menu className="rounded-0 py-3 px-2">
              <Dropdown.Item className="text-drop" href="#/action-1">Beauty & Personal Care</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-2">Men's Grooming</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Food and Drink</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Nutrition & Health Care</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Baby Care</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Toys & Schools Supplies</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Sports & Fitness</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Books</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Music</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Stationery & Office Supplies</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Auto Accessories</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-3">Safety & hygiene Essentials</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-1 cat">
          <img src={bike} alt="" />
          <Dropdown>
            <Dropdown.Toggle className="te-area" variant="" id="dropdown-basic">
              Two Wheelers
            </Dropdown.Toggle>
            <Dropdown.Menu className="rounded-0 py-3 px-2">
              <Dropdown.Item className="text-drop" href="#/action-1">Petrol Vehicles</Dropdown.Item>
              <Dropdown.Item className="text-drop" href="#/action-1">Electric Vehicles</Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default FlipCate;
