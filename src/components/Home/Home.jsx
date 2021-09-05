import React, { useEffect } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import carousel2Image from "../../images/Home/carousel2.png";
import carousel3Image from "../../images/Home/carousel3.png";
import carousel4Image from "../../images/Home/carousel4.png";
import beautyProductsImage from "../../images/Home/beautyProducts.png";
import naturalProductsImage from "../../images/Home/naturalProducts.png";
import mobileImage from "../../images/Home/mobileImage.png";
import bodyIcon from "../../images/Home/bodyIcon.png";
import mindIcon from "../../images/Home/mindIcon.png";
import marketPlaceIcon from "../../images/Home/marketPlaceIcon.png";
import soulIcon from "../../images/Home/soulIcon.png";
import chatBotIcon from "../../images/Home/chatBotIcon.png";
import shoppingCard from "../.././images/Home/shoppingCard.png";
import rightCheck from "../.././images/Home/rightCheck.png";
import humanImage from "../.././images/Home/humanImage.png";
import humanGIF1 from "../.././images/Home/humanImage1.gif";
import humanGIF2 from "../.././images/Home/humanImage2.gif";
import humanGIF3 from "../.././images/Home/humanImage3.gif";
import humanGIF4 from "../.././images/Home/humanImage4.gif";
import humanGIF5 from "../.././images/Home/humanImage5.gif";
import humanGIF6 from "../.././images/Home/humanImage6.gif";
import stickImage from "../../images/Home/stickImage.png";
import fruits from "../../images/Home/fruits.png";
import babyImage from "../../images/Home/babyImage.png";
import HealthTech from "../../images/Home/HealthTech.png";
import SmartClothing from "../../images/Home/SmartClothing.png";

const Home = () => {
  document.title = "SELF | MIND BODY SOUL";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Main carousel */}
      <section className="carouselSection pt-5">
        <div className="container">
          <div
            id="MainCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#MainCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#MainCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#MainCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active text-sm-start text-center"
                style={{
                  background: "#EBF5FF",
                  borderRadius: "35px",
                }}
              >
                <div className="row">
                  <div className="col-sm">
                    <h1 className="mainHeading">
                      Shop With <br />
                      <span style={{ color: "#3F99F4" }}>Confidence</span>
                    </h1>

                    <p className="paragraph">
                      SELF Platform offers products with no additives or harmful
                      ingredients.
                    </p>

                    <button
                      className="exploreBtn1"
                      onClick={() =>
                        window.open(
                          "https://ingrownorganics.com/products/bobs-red-mill-rolled-oats-bulk-1x25lb"
                        )
                      }
                    >
                      Explore
                    </button>
                  </div>
                  <div className="col-sm mt-4 mt-lg-0">
                    <img
                      src={carousel2Image}
                      className="img-fluid mx-auto d-block carouselImage"
                      alt="carousel2Image"
                    />
                  </div>
                </div>
              </div>

              <div
                className="carousel-item text-sm-start text-center"
                style={{
                  background: "#F3D4FF",
                  borderRadius: "35px",
                }}
              >
                <div className="row">
                  <div className="col-sm">
                    <h1 className="mainHeading">
                      Shop With <br />
                      <span style={{ color: "#B02FE1" }}>Trust</span>
                    </h1>

                    <p className="paragraph">
                      We source the highest quality products from small to large
                      brands.
                    </p>

                    <button
                      className="exploreBtn2"
                      onClick={() =>
                        window.open(
                          "https://ingrownorganics.com/products/lundberg-white-jasmine-rice-6x2lb?_pos=3&_sid=378521638&_ss=r"
                        )
                      }
                    >
                      Explore
                    </button>
                  </div>
                  <div className="col-sm mt-4">
                    <img
                      src={carousel3Image}
                      className="img-fluid mx-auto d-block carouselImage"
                      alt="carousel3Image"
                    />
                  </div>
                </div>
              </div>

              <div
                className="carousel-item text-sm-start text-center"
                style={{
                  background: "#B4EC92",
                  borderRadius: "35px",
                }}
              >
                <div className="row">
                  <div className="col-sm">
                    <h1 className="mainHeading">
                      Shop With <br />
                      <span style={{ color: "#57B71C" }}>Satisfaction</span>
                    </h1>

                    <p className="paragraph">
                      We listen to our customers and only offer products you
                      love.
                    </p>

                    <button
                      className="exploreBtn3"
                      onClick={() =>
                        window.open(
                          "https://ingrownorganics.com/products/south-of-france-bar-soap-green-tea-1x6-oz?_pos=16&_sid=e2e9f1829&_ss=r"
                        )
                      }
                    >
                      Explore
                    </button>
                  </div>
                  <div className="col-sm mt-5">
                    <img
                      src={carousel4Image}
                      className="img-fluid mx-auto d-block carouselImage"
                      alt="carousel4Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products p-3 pt-lg-5 p-lg-0">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-sm"
              style={{ backgroundColor: "#DCFFE1", borderRadius: "35px" }}
            >
              <div className="row">
                <div className="col text-center">
                  <h2 className="mainHeading">Organic Beauty Products</h2>

                  <div className="viewMore text-start">
                    <Link
                      to="#"
                      onClick={() =>
                        window.open(
                          "https://ingrownorganics.com/collections/health-beauty"
                        )
                      }
                    >
                      VIEW MORE
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <img
                    src={beautyProductsImage}
                    alt="beautyProductsImage"
                    className="float-end img-fluid productImage"
                  />
                </div>
              </div>
            </div>

            <div
              className="col-sm ms-0 ms-lg-3"
              style={{ backgroundColor: "#F6E6EC", borderRadius: "35px" }}
            >
              <div className="row">
                <div className="col text-center">
                  <h2 className="mainHeading">Organic Food</h2>

                  <div className="viewMore text-start">
                    <Link
                      to="#"
                      onClick={() =>
                        window.open(
                          "https://ingrownorganics.com/collections/grocery"
                        )
                      }
                    >
                      VIEW MORE
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <img
                    src={naturalProductsImage}
                    alt="naturalProductsImage"
                    className="float-end img-fluid productImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* categories carousel */}
      <section className="categories p-3 pt-lg-5 p-lg-0">
        <div className="container">
          <div className="text-center">
            <h1 className="mainHeading">Categories</h1>
            <p className="mt-4">
              Shop through SELF's vast product line. We offer products to
              enhance each aspect of your wellness.
            </p>
          </div>

          <div
            id="categoryCarousel"
            className="carousel slide"
            // data-interval="false"
          >
            <div className="carousel-indicators categoryIndicator">
              <button
                type="button"
                data-bs-target="#categoryCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#categoryCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row text-center">
                  <div className="col-5">
                    <div
                      className="outerDiv"
                      onClick={() =>
                        window.open(
                          "https://ingrownorganics.com/collections/for-baby",
                          "_self"
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <h3 className="text-center productName">
                        Organic <br /> Baby Products
                      </h3>
                      <img
                        src={babyImage}
                        alt="babyImage"
                        className="img-fluid babyImage"
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="strickSet">
                      <img
                        src={stickImage}
                        alt="stickImage"
                        className="img-fluid strickImage"
                      />
                    </div>
                  </div>
                  <div className="col-5">
                    <img
                      src={fruits}
                      className="img-fluid categoryImage"
                      alt="fruits"
                      onClick={() =>
                        window.open(
                          "https://ingrownorganics.com/collections/eco-home",
                          "_self"
                        )
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row text-center">
                  <div className="col-5">
                    <div
                      className="outerDiv"
                      onClick={() =>
                        window.open(
                          "https://ingrownorganics.com/collections/health-tech",
                          "_self"
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <h3 className="text-center productName">
                        {" "}
                        <br /> Health Tech
                      </h3>
                      <img
                        src={HealthTech}
                        alt="HealthTech"
                        className="img-fluid babyImage rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="strickSet">
                      <img
                        src={stickImage}
                        alt="stickImage"
                        className="img-fluid strickImage"
                      />
                    </div>
                  </div>
                  <div className="col-5">
                    <div
                      className="outerDiv"
                      onClick={() =>
                        window.open(
                          "https://ingrownorganics.com/collections/smart-apparel",
                          "_self"
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <h3 className="text-center productName">
                        {" "}
                        <br /> Smart Clothing
                      </h3>
                      <img
                        src={SmartClothing}
                        alt="SmartClothing"
                        className="img-fluid babyImage rounded-circle"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#categoryCarousel"
              data-bs-slide="prev"
            >
              <span className="prevBtn">
                <i
                  className="fas fa-arrow-left"
                  style={{ marginTop: "12px" }}
                ></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#categoryCarousel"
              data-bs-slide="next"
            >
              <span className="nextBtn">
                <i
                  className="fas fa-arrow-right"
                  style={{ marginTop: "12px" }}
                ></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="text-center">
            <button
              className="shopNow"
              onClick={() => window.open("http://market.selfplatform.io/")}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* selfApp */}
      <section className="selfApp p-3 pt-lg-5 p-lg-0" id="selfApp">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-center">
              <img src={mobileImage} alt="mobileImage" className="img-fluid" />
            </div>
            <div className="col-sm-6">
              <div className="selfAppDescription text-center text-sm-start">
                <h1 className="mainHeading">SELF APP!</h1>
                <p className="paragraph">Become A Better You</p>
                <p className="paragraph">
                  SELF Platform helps people on their journey toward improved
                  health and wellness. Earn SELF coins through walking, burning
                  calories, practicing meditation, and tracking your sleep.
                  Then, spend them on exciting rewards, services or convert SELF
                  Coins into cash using the SELF Card.
                </p>

                <div className="text-center">
                  <button className="comingSoonBtn">COMING SOON</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about self app */}
      <section className="aboutSelfApp p-3 py-lg-5 p-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="aboutAppData">
                <h1 className="mainHeading">SELF APP ALSO INCLUDES</h1>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="row aboutAppGrid">
                <div className="col">
                  <div className="mb-3">
                    <img src={bodyIcon} alt="bodyIcon" className="img-fluid" />
                    <p className="head">BODY</p>
                    <p>
                      Earn SELF coins by connecting your wearable devices and
                      importing health data to our platform. Get personalized
                      challenges to encourage you on your journey.
                    </p>
                  </div>
                  <div className="mb-3">
                    <img src={mindIcon} alt="mindIcon" className="img-fluid" />
                    <p className="head">MIND</p>
                    <p>
                      Practice meditation and good sleeping habits and earn SELF
                      coins for improving yourself. Stay motivated in keeping
                      your mind sharp through our reward-based system.
                    </p>
                  </div>
                  <div className="mb-3">
                    <img
                      src={marketPlaceIcon}
                      alt="marketPlaceIcon"
                      className="img-fluid"
                    />
                    <p className="head">MARKETPLACE</p>
                    <p>
                      Redeem your SELF coins in the SELF Marketplace for
                      products, gift cards, restaurant discounts, and other
                      exciting rewards.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-4">
                    <img src={soulIcon} alt="soulIcon" className="img-fluid" />
                    <p className="head">SOUL</p>
                    <p>
                      Get personalized astrological reports on your day, life,
                      and circumstances to help you on your wellness journey.
                    </p>
                  </div>
                  <div className="mb-3">
                    <img
                      src={chatBotIcon}
                      alt="chatBotIcon"
                      className="img-fluid"
                    />
                    <p className="head">CHATBOT</p>
                    <p>
                      Our chat bot feature utilizes machine learning methods
                      like Natural Language Processing, Activity Tracking, and
                      Astrological Transits to personalize goals & challenges
                      for each user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* self pay */}
      <section className="selfPay p-3 pt-lg-5 p-lg-0" id="selfPay">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-center imageBox">
              <img
                src={shoppingCard}
                alt="shoppingCard"
                className="img-fluid cardImage"
              />
            </div>
            <div className="col-sm-6">
              <div className="selfPayData">
                <h1 className="mainHeading">SELF Pay</h1>
                <p className="paragraph">Turn Your Rewards Into Cash</p>

                <div className="d-flex mt-5">
                  <div className="flex-shrink-0">
                    <img
                      src={rightCheck}
                      alt="rightCheck"
                      className="img-fluid"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    SELF Pay Is a card provided to SELF users to convert their
                    SELF Coins into cash. The SELF card is powered by Visa and
                    can be used in any location. You can earn additional bonuses
                    by going to healthy restaurants and purchasing healthy food
                    from stores.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product demo */}
      <section className="productDemo p-3 pt-lg-5 p-lg-0">
        <div className="container">
          <div className="text-center">
            <h1 className="mainHeading">
              PRE-ORDER Today For <span className="dollorColor">$99</span> and
              Receive a <br /> Free NFT of your Mirror Image.
            </h1>
          </div>
          <div className="row">
            <div className="col-sm-6 text-center mb-4">
              <img src={humanImage} alt="humanImage" className="img-fluid" />
            </div>
            <div className="col-sm-6">
              <div className="colData">
                <h1 className="secondHeading">
                  Mirror Image™ Series One The Introduction Into The Metaverse
                </h1>
                <p className="paragraph">
                  The Mirror Image™ Series One is your digital identity that
                  provides detailed reports of your current wellness levels
                </p>

                <div className="featureList">
                  <p className="listHeading">Features</p>
                  <ul>
                    <li>Monitor Health In Real-Time</li>
                    <li>Store Identity & Personal Records</li>
                    <li>See Progress By Body Scanning </li>
                    <li>Know Your Size When Shopping Online</li>
                    <li>Recieve Diet Recommendations</li>
                    <li>Monitor Food Trends &amp; Workouts</li>
                    <li>Earn 2x The Rewards</li>
                  </ul>
                </div>

                <div className="text-center text-sm-start">
                  <button
                    onClick={() =>
                      window.open(
                        "https://market.selfplatform.io/products/mirror-image%E2%84%A2"
                      )
                    }
                    className="placeOrderBtn"
                  >
                    Pre-Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h2>Live Forever On The Blockchain & Be Apart Of The Collective</h2>
          </div>

          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="text-center mt-5">
                  <img
                    src={humanGIF1}
                    alt="humanImage1"
                    className="img-fluid video"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="text-center mt-5">
                  <img
                    src={humanGIF3}
                    alt="humanImage3"
                    className="img-fluid video"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="text-center mt-5">
                  <img
                    src={humanGIF2}
                    alt="humanImage2"
                    className="img-fluid video"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="text-center mt-5">
                  <img
                    src={humanGIF4}
                    alt="humanGIF4"
                    className="img-fluid video"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="text-center mt-5">
                  <img
                    src={humanGIF5}
                    alt="humanGIF5"
                    className="img-fluid video"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="text-center mt-5">
                  <img
                    src={humanGIF6}
                    alt="humanGIF6"
                    className="img-fluid video"
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
