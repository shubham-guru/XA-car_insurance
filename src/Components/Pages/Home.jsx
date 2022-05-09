import React, { useState } from "react";
import axios from "axios";
import "../css/Home.css";
import web from "./images/car-wheel.png";
import phone from "./images/TestDrive_app_phone_2x.webp";
import ShowData from "./ShowData";

const Home = () => {
  const [vehicleData, setvehicleData] = useState({
    vin: "",
    modelYear: "",
    make: "",
    model: "",
    trim: "",
    bodyType: "",
    engineSize: "",
    doors: "",
    seats: "",
    cyclinders: "",
  });
  const [component, setComponent] = useState("home");
  const [inputValue, setInputValue] = useState("");
  const [token, setToken] = useState({
    success: false,
    token: "",
  });
  const getDetails = () => {
    async function getToken() {
      return await axios.post(
        "https://vehicleapi.xadatahub.com/api/v1/Token?Username=dev%40xagroup.com&Password=X4DaTa%2312%2134"
      );
    }

    async function getToken1() {
      await getToken().then((resp) => {
        setToken({ success: true, token: resp.data.AccessToken });
        //  console.log(resp,"responce");
      });
    }
    getToken1();
  };

  if (token.success === true) {
    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    };
    var data = {
      requestId: "string",
      callerCode: "200",
      vin: inputValue,
    };
    function getData() {
      const res = axios.post(
        "https://vehicleapi.xadatahub.com/api/v1/Vehicles/DetailsByVIN",
        data,
        config
      );
      // console.log("DATA", res);
      return res;
    }
    getData().then((res) => {
      setvehicleData({
        vin: res.data.VehicleDetails.General.Vin,
        modelYear: res.data.VehicleDetails.General.ModelYear,
        make: res.data.VehicleDetails.General.MakeName,
        model: res.data.VehicleDetails.General.ModelName,
        trim: res.data.VehicleDetails.General.TrimName,
        bodyType: res.data.VehicleDetails.General.BodyTypeName,
        engineSize: res.data.VehicleDetails.General.EngineSizeName,
        doors: res.data.VehicleDetails.General.Doors,
        seats: res.data.VehicleDetails.General.Seats,
        cyclinders: res.data.VehicleDetails.General.EngineCylinders,
      });
    });
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setComponent("renderShowData");
  };
  const logos = {
    logoBmw: require("./images/bmw.svg").default,
    logoFerrari: require("./images/ferrari.svg").default,
    logoLamborghini: require("./images/lamborghini.svg").default,
    logoMercedes: require("./images/mercedes.svg").default,
  };
  const icons = {
    iconSpark: require("./images/lightning.png").default,
    iconCarFront: require("./images/car.png").default,
    iconMoney: require("./images/coins.png").default,
  };
  return (
    <>
      {component === "home" && (
        <div className="header">
          <div className="container">
            <div className="headings">
              <h1>
                Smarter Car Insurance​ in <br />
                <strong>60 Seconds</strong>
              </h1>
              <h5>Get an instant quote</h5>
              <div className="input">
                <form onSubmit={handleSubmit} method="POST">
                  <input
                    type="text"
                    maxlength="17"
                    value={inputValue}
                    onChange={handleChange}
                    required
                  />
                  <button onClick={getDetails}>Quote in 30 seconds</button>
                </form>
              </div>
              <div className="links">
                <a className="aLinks" href="">Where can I find my chassis/vin number?​ </a>
                <a className="aLinks" href="">
                  Don’t have a chassis/ vin number? Click here to manually
                  select​
                </a>
              </div>
            </div>
            <img src={web} className="img" alt="rotating_tyre" />
          </div>

          <div className="innerContainer">
            <h2>OUR PARTNERS</h2>
            <div className="contents">
              <div>
                <img src={logos.logoBmw} alt="bmw_logo" width="30%" />
                <p>BMW</p>
              </div>
              <div>
                <img src={logos.logoFerrari} alt="ferrari_logo" width="30%" />
                <p>FERRARI</p>
              </div>
              <div>
                <img
                  src={logos.logoLamborghini}
                  alt="lamborghini_logo"
                  width="30%"
                />
                <p>LAMBORGHINI</p>
              </div>
              <div>
                <img src={logos.logoMercedes} alt="mercedes_logo" width="30%" />
                <p>MERCEDES</p>
              </div>
            </div>
          </div>

          <div className="innerContainer" id="innerContainer">
            <h2>Car insurance for good drivers</h2>
            <h5>Savings made simple.</h5>
            <div className="contents" id="contents">
              <div>
                <img src={icons.iconSpark} alt="spark_icon" width="60%" />
                <h5>Quote</h5>
                <p>
                  We use your iPhone or Android phone to measure your driving
                  behavior. Better driving = more savings.
                </p>
              </div>
              <div>
                <img src={icons.iconCarFront} alt="carFront_icon" width="60%" />
                <h5>Drive</h5>
                <p>
                  We use your iPhone or Android phone to measure your driving
                  behavior. Better driving = more savings.
                </p>
              </div>
              <div>
                <img src={icons.iconMoney} alt="money_icon" width="50%" />
                <h5>Save</h5>
                <p>
                  Choose a recommended auto insurance plan or create your own.
                  Then pay for your personalized policy — all in the app.
                </p>
              </div>
            </div>
          </div>

          <div className="innerContainer" id="phone_container">
            <div>
              <img src={phone} alt="phone" width="100%" />
            </div>
            <div>
              <h4 id="h4">We do insurance the fair way</h4>
              <br />
              <h5>Good drivers save more.</h5>
              <br />
              <h5>
                Drive with the Root app. While you drive, we gather and analyze
                data from your smartphone’s sensors. After a few weeks, you can
                get a car insurance quote based primarily on how you drive.
              </h5>
            </div>
          </div>
          <div>
            <a href="#" id="button">
              Learn More
            </a>
          </div>
        </div>
      )}
      {component === "renderShowData" && 
      <ShowData details={[
        vehicleData.vin,
        vehicleData.modelYear,
        vehicleData.make,
        vehicleData.model,
        vehicleData.trim,
        vehicleData.bodyType,
        vehicleData.engineSize,
        vehicleData.doors,
        vehicleData.seats,
        vehicleData.cyclinders,
      ]} 
      />}
    </>
  );
};
export default Home;
