import React from "react";

import { FaGlobe } from "react-icons/fa";
// using ES6 modules
import { Link } from "react-router-dom";

const FooterGuest = () => {
    return (
        <footer className="container-fluid footer-guest text-left py-5 mt-5">
            <div className="container text-white-50 p-4">
                <p>Questions? Call 0800-022-5173</p> <br />
                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li className="btn-link">
                                <Link to="/fq">FAQ</Link>
                            </li>
                            <li className="btn-link">
                                <Link to="/coockie">Cookie Preferences</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li className="btn-link">
                                <Link to="/coockie">Help Centre</Link>
                            </li>
                            <li className="btn-link">
                                <Link to="/coockie">Bedrijfsgegevens</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li className="btn-link">
                                <Link to="/coockie">Corporate Information</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-3 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li className="btn-link">
                                <Link to="/coockie">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <form action="#" className="language-picker-holder">
                    <FaGlobe />
                    <select
                        name="language-picker"
                        className="language-picker"
                        id="languages"
                    >
                        <label htmlFor="language">Select Language: </label>
                        <option value="Nederlands">Nederlands</option>
                        <option value="English">English</option>
                    </select>
                </form>
            </div>
        </footer>
    );
};

export default FooterGuest;
