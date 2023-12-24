export default function FooterLayout() {
    return <>
        <div className="my-5">
            <footer className="text-dark text-center text-lg-start bg-light">
                <div className="container-fluid p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About company</h5>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti.
                            </p>


                            {/*/!*     social icons        *!/*/}
                            {/*<div className="mt-4">*/}
                            {/*    <a type="button" className="btn btn-floating btn-primary btn-lg">*/}
                            {/*        <i className="fab fa-facebook-f"/>*/}
                            {/*    </a>*/}
                            {/*    <a type="button" className="btn btn-floating btn-primary btn-lg">*/}
                            {/*        <i className="fab fa-dribbble"/>*/}
                            {/*    </a>*/}
                            {/*    <a type="button" className="btn btn-floating btn-primary btn-lg">*/}
                            {/*        <i className="fab fa-twitter"/>*/}
                            {/*    </a>*/}
                            {/*    <a type="button" className="btn btn-floating btn-primary btn-lg">*/}
                            {/*        <i className="fab fa-google-plus-g"/>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                            <ul className="fa-ul" style={{marginLeft: "1.65em"}}>
                                <li className="mb-3"><span className="fa-li"><i className="fas fa-home"/></span>
                                    <span className="ms-2">New York, NY 10012, US</span>
                                </li>
                                <li className="mb-3"><span className="fa-li"><i className="fas fa-envelope"/></span>
                                    <span className="ms-2">info@example.com</span>
                                </li>
                                <li className="mb-3"><span className="fa-li"><i className="fas fa-phone"/></span>
                                    <span className="ms-2">+ 01 234 567 88</span>
                                </li>
                                <li className="mb-3"><span className="fa-li"><i className="fas fa-print"/></span>
                                    <span className="ms-2">+ 01 234 567 89</span>
                                </li>
                            </ul>

                        </div>
                       
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>
                            <table className="table text-center text-white">
                                <tbody className="font-weight-normal">
                                <tr>
                                    <td>Mon - Thu:</td>
                                    <td>8am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Fri - Sat:</td>
                                    <td>8am - 1am</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>9am - 10pm</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* copyright   */}
                <div className="text-center p-3"
                     style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2021 Copyright:<a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    </>

}