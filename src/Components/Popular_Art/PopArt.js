import React from 'react'
import La_img4 from '../Images/pexels-dom-j-310452.jpg'
import La_img5 from '../Images/pexels-dids-2911527.jpg'
import La_img6 from '../Images/pexels-bruno-thethe-1910225.jpg'
import La_img7 from '../Images/pexels-anni-roenkae-3109793.jpg'
import La_img8 from '../Images/pexels-dids-3107143.jpg'
import La_img9 from '../Images/pexels-dids-3527786.jpg'
// import La_img10 from '../Images/pexels-jot-singh-2179483.jpg'
// import La_img11 from '../Images/pexels-martin-péchy-2078266.jpg'
import './PaApp.css'

const PopArt = () => {
    return (
        <>

            <div className="wise-popular-article p-5" id='popular'>
                <div className="Pa-title mt-5">
                    <p className='fs-1 text-center mt-5'>POPULAR ARTICLE</p>
                </div>
                <div className="Pa-line">
                    <span className="Pa-linee"></span>
                </div>
                <div className="Pa-sections flex-column mt-5">
                    <div className="card mb-3"  >
                        <div className="row g-0 gx-4">
                            <div className=" col-md-6 rounded-5">
                                <div class="Pa-section card text-bg-dark rounded-5">
                                    <img src={La_img4} class="card-img rounded-5" alt="..." />
                                    <div class="card-img-overlay Pa-Img-ol rounded-bottom-5">
                                        <h5 class="card-title fw-bold">Risk of extinction by AI should be global priority, say experts</h5>
                                        <p class="card-text w-75 fw-light">A group of leading technology experts from across the world have warned that artificial intelligence technology should be considered a societal risk.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="Pa-section col-md-6 rounded-5">
                                <div class="card text-bg-dark rounded-5">
                                    <img src={La_img5} class="card-img rounded-5" alt="..." />
                                    <div class="card-img-overlay Pa-Img-ol rounded-bottom-5">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-8"></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}

                <div className="Pa-sections flex-column mt-5">
                    <div className="card mb-3"  >
                        <div className="row g-0 gx-4">
                            <div className="Pa-section col-md-6 rounded-5">
                                <div class="card text-bg-dark rounded-5">
                                    <img src={La_img6} class="card-img rounded-5" alt="..." />
                                    <div class="card-img-overlay Pa-Img-ol rounded-bottom-5">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-8"></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="Pa-section col-md-6 rounded-5">
                                <div class="card text-bg-dark rounded-5">
                                    <img src={La_img7} class="card-img rounded-5" alt="..." />
                                    <div class="card-img-overlay Pa-Img-ol rounded-bottom-5">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-8"></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}

                <div className="Pa-sections flex-column mt-5">
                    <div className="card mb-3"  >
                        <div className="row g-0 gx-4">
                            <div className="Pa-section col-md-6 rounded-5">
                                <div class="card text-bg-dark rounded-5">
                                    <img src={La_img8} class="card-img rounded-5" alt="..." />
                                    <div class="card-img-overlay Pa-Img-ol rounded-bottom-5">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-8"></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="Pa-section col-md-6 rounded-5">
                                <div class="card text-bg-dark rounded-5">
                                    <img src={La_img9} class="card-img rounded-5" alt="..." />
                                    <div class="card-img-overlay Pa-Img-ol rounded-bottom-5">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-8"></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a href="#" className='Pa-btn'>Discover More</a>

            </div>

        </>
    )
}

export default PopArt