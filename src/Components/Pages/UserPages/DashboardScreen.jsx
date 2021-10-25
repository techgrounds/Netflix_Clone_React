import React from "react";
import FooterGuest from "../../Contents/FooterContents/FooterGuest";
import HeaderNavUser from "../../../Components/Contents/HeaderContents/HeaderNavUser";
import { Link } from "react-router-dom";
const Dashboard = (props) => {
  return (
    <>
      <div className="container-fluid- user-auth-page__wrapper mt-5">
        <div className="container-fluid bg-dark ">
          <HeaderNavUser />
        </div>
        <div className="bg-light mt-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-md-8 mx-auto">
                <div className="jumbotron bg-transparent">
                  <div className="row text-center">
                    <div className="text-center col-12">
                      <Link to =  "/Home">
                      <h1>My Account</h1>
                      </Link>
                      <p>Profile details .....</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterGuest />
      </div>
    </>
  );
};
export default Dashboard;
