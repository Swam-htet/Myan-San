import React from "react";

export default function FooterLayout() {
    return <>
        <div className="mt-5">
            <footer className="text-dark text-center text-lg-start bg-light">
                <div className="container-fluid p-4">
                    <div className="row mt-4">

                        <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About US</h5>
                            <p>
                                Welcome to Myan San, your trusted partner in travel ticket booking. Established in 2010,
                                Myan San has been dedicated to providing exceptional travel experiences to our
                                customers. Whether you are planning a family vacation, a business trip, or a solo adventure, we are
                                here to make your journey seamless and enjoyable.
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Contact Us</h5>

                            <ul className="list-group">
                                <li className="list-group-item">
                                    <span>Email: info@myansantravel.com</span>
                                </li>
                                <li className="list-group-item">
                                    <span>Phone: +95 9 1234 5678</span>
                                </li>
                                <li className="list-group-item">
                                    <span>Address: 123 Travel Street, Yangon, Myanmar</span>
                                </li>
                            </ul>

                        </div>
                        
                    </div>
                </div>


                {/* copyright   */}
                <div className="text-center p-3 bg-light d-flex justify-content-center">
                    © 2023 Copyright:<p className="text-dark"> Swam Htet</p>
                </div>
            </footer>
        </div>
    </>

}