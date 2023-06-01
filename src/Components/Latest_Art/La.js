import React from 'react'
import './LaApp.css'
import La_img1 from '../Images/pexels-anni-roenkae-2832432.jpg'
import La_img2 from '../Images/pexels-madison-inouye-1831234.jpg'
import La_img3 from '../Images/pexels-tom-swinnen-2249961.jpg'


const La = () => {
    return (
        <>

            <div className="wise-latest-article p-5" id='latest'>
                <div className="La-title mt-5">
                    <p className='fs-1 text-center mt-5'>LATEST ARTICLE</p>
                </div>
                <div className="La-line">
                    <span className="La-linee"></span>
                </div>
                <div className="La-section flex-column mt-5">
                    <div className="card mb-3"  >
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={La_img1} className="img-fluid rounded-5 mr-5" alt="..." />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <span className='La-section-line'></span>
                                    <h5 className="card-title fw-semibold fs-3">"ChatGPT's makers say AI could surpass humanity within the next 10 years"</h5>
                                    <p className="La-p card-text w-75">The creators of ChatGPT say AI could surpass humanity in most domains within the next 10 years as "superintelligence" becomes more powerful than any technology the world has seen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}

                <div className="La-section flex-column mt-5">
                    <div className="card mb-3"  >
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={La_img2} className="img-fluid rounded-5 mr-5" alt="..." />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <span className='La-section-line'></span>
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}

                <div className="La-section flex-column mt-5">
                    <div className="card mb-3"  >
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={La_img3} className="img-fluid rounded-5 mr-5" alt="..." />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <span className='La-section-line'></span>
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                        <span className="placeholder col-8"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default La