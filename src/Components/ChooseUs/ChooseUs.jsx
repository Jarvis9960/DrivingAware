import React from "react";
import "./chooseUs.css";
import { TfiCheck } from "react-icons/tfi";

import chosseImg from "../../assets/img/why-us-bg.jpg";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <section className="why_choose section-padding" style={{backgroundColor:"white"}} >
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <div className="wc_content text-black">
              <h2>
                Lorem ipsum <span className="text-black">dolor sit</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
              <ul>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>Lorem ipsum</strong>
                  </u>{" "}
                  dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>Lorem ipsum</strong>
                  </u>{" "}
                  dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>Lorem ipsum</strong>
                  </u>{" "}
                  dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  <span>
                    <TfiCheck />
                  </span>
                  <u>
                    <strong>Lorem ipsum</strong>
                  </u>{" "}
                  dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <div className="ss_btn">
              <Link style={{background:"black" ,color:"white"}} to={"#pricing"}>Get started</Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-sm-12 col-xs-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <div className="wc_img">
              <img
                src={
                  "http://html.tonatheme.com/2021/drivega/assets/images/resource/image-7.jpg"
                }
                className="img-fluid"
                alt="image"
              />
              <div className="wc_year">
                <h3>Drive Safe</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;








// #0cc0df ,#38b6ff ,#0097b2, #202020

