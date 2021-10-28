import React from "react";
// using ES6 modules
import { Link } from "react-router-dom";
const FooterLinks = () => {
    return (
        <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                <ul className="list-unstyled">
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Audio Description
                        </Link>


                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Investor Relations
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Legal Notices
                        </Link>

                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                <ul className="list-unstyled">
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Help Centre
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Jobs
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Cookie Preferences
                        </Link>

                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                <ul className="list-unstyled">
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Gift Cards
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Terms of Use
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Corporate Information
                        </Link>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterLinks;
