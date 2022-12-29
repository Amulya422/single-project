import React from "react";
import { useState, useEffect } from "react";
import "./home.css";
import Amulya from "./images/ammu.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container-fluid align-center">
        <div className="row  mx-1 justify-content-center align-center">
          <div className="col-lg-6 p-3 rounded  col-sm-10  ">
            
            <div className="top align-center">
              <h1 className="text-body text-center">
                <strong>Hi 👋, I'm Amulya Padmavathi</strong>
              </h1>
              <h5 className="text-body text-center">
                🎓 July 2022 - B.Tech in Computer Science and Engineering
              </h5>
              <h5 className="text-body text-center">
                🌱 I’m currently learning about Frontend
              </h5>
              <h5 className="text-body text-center">
                👨‍💻 Eager to learn New things
              </h5>
              <h5 className="text-body text-center">
                📫 How to reach me{" "}
                <a href="mailto:amulyapadmavathi.gunda@gmail.com">
                  amulyapadmavathi.gunda@gmail.com
                </a>
              </h5>
              <h1></h1>
            </div>
            <div className="bottom">
              <p className="para" align="center ">
                <a href="https://www.linkedin.com/in/amulya-padmavathi/">
                  <img
                    alt="Connect on LinkedIn"
                    src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"
                  />
                </a>

                <a href="https://github.com/Amulya422">
                  <img
                    alt="Follow on Github"
                    src="https://img.shields.io/badge/-GitHub-211F1F?style=for-the-badge&logo=github&logoColor=ffffff"
                  />
                </a>
                <a href="https://twitter.com/Amulya_Gunda">
                  <img
                    alt="Follow on Twitter"
                    src="https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=Twitter&logoColor=white"
                  />
                </a>
                <a href="https://codepen.io/Amulya422">
                  <img
                    alt="Follow on CodePen"
                    src="https://img.shields.io/badge/-codepen-0A0A0A?style=for-the-badge&logo=codepen&logoColor=white"
                  />
                </a>
                <a href="https://www.instagram.com/ammu__amul/">
                  <img
                    alt="Follow on Instagram"
                    src="https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                  />
                </a>
              </p>

              <h1></h1>

              <details className="text-body text-center my-5">
                <summary>💙 Open for a Programming Dad Joke</summary>

                <img
                  alt="Programming Dad Joke Card"
                  src="https://readme-jokes-seven.vercel.app/api"
                />
              </details>
            </div>

            <div className="border rounded w-300 col-lg-12  col-sm-10 p-5 fs-5">
              <span>
                <h5 className="text-center my-3 fs-1 text-danger">
                  What does this Project Contains...?
                </h5>
              </span>
              <p className="para">
                This Project contains 5 Parts And Implemented With React Router
                DOM
              </p>
              <div className="row  mx-1 justify-content-center">
                <div className=" col-lg-12  col-sm-10">
                  <div className="linking  col-lg-12  col-sm-10">
                    <Link to="/" className="text-success mx-5">
                      <strong>* Home</strong>
                    </Link>
                    <Link to="/crypto" className="text-success mx-5">
                      <strong> * Cryptcurrency API</strong>
                    </Link>
                    <Link to="/covid" className="text-success mx-5">
                      <strong>* COVID API</strong>
                    </Link>
                    <Link to="/emoji" className="text-success mx-5">
                      <strong> * Emoji API</strong>
                    </Link>
                    <Link to="/login" className="text-success mx-5">
                      <strong>* Login</strong>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12 p-3  rounded  col-sm-10  ">
                  <div className="row mx-1 justify-content-center">
                    <div className="col-lg-12 p-3 rounded col-sm-10 card my-4 text-center  bg-info bg-gradient">
                      <div className="top ">
                        <p className="text-body">
                          <strong>Crypto Currency</strong>
                        </p>
                      </div>

                      <div className="bottom">
                        <p className="text-body">
                          This Page shows Cryptcurrency Image , Name ,Price of
                          different Cryptcurrencies displayed in a card format
                          using Cryptcurrency API And we can search them using
                          by price and by Name and it will also perform dynamic
                          search.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row  mx-1 justify-content-center">
                    <div className="col-lg-12 p-3 rounded col-sm-10  card my-4 text-center bg-warning bg-gradient">
                      <div className="top">
                        <p className="text-body">
                          <strong>Covid API </strong>
                        </p>
                      </div>
                      <div className="bottom">
                        <p className="text-body">
                          This Page shows Covid 19 statistics like covid prone
                          location , confirmed Cases Foreign , confirmed Cases
                          Indian , No.of deaths and Discharged people And this
                          page uses Covid API
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row  mx-1 justify-content-center">
                    <div className="col-lg-12 p-3 rounded col-sm-10 card my-4  text-center bg-success bg gradient">
                      <div className="top">
                        <p className="text-body">
                          <strong> Emoji API</strong>
                        </p>
                      </div>
                      <div className="bottom">
                        <p className="text-body">
                          In This Page shows different kinds of emojies and
                          their names and also category of the emoji group it
                          also provides the code we can also search the emojies
                          by names using the emoji Api
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row  mx-1 justify-content-center">
                    <div className="col-lg-12 p-3 col-sm-10 rounded  card my-4  text-center bg-danger bg-gradient">
                      <div className="top">
                        <p className="text-body">
                          <strong>Login</strong>
                        </p>
                      </div>
                      <div className="bottom">
                        <p className="text-body">
                          In This Page shows Basic Login page with Form
                          validation Which contains Username , EMail , Password so that
                           we can collect the user credentialsusing this . 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
