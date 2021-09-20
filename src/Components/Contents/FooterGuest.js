import React from "react";

const FooterGuest = () => {
    return (
        <footer className="container-fluid footer-guest text-left py-5 mt-5">
            <div class="container text-white-50 p-4">
                <p> Questions? Call 0800-022-5173</p> <br />
                <div class="row">
                    <div class="col-xl-3 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li className="btn-link">
                                <a>FAQ</a>
                            </li>
                            <li className="btn-link">
                                <a>Cookie Preferences</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li className="btn-link">
                                <a>Help Centere</a>
                            </li>
                            <li className="btn-link">
                                <a>Corporate Information</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li className="btn-link">
                                <a>Terms of Use</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li className="btn-link">
                                <a>Privacy</a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default FooterGuest;
