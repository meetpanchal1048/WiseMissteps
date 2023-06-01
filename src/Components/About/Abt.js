import React from 'react'
import './AbtApp.css'

const Abt = () => {
    return (
        <>

            <div className="Wise-Abt" id='about'>
                <div className="Abt-title mt-5">
                    <p className='fs-1 text-center mt-5'>About</p>
                </div>
                <div className="Abt-line">
                    <span className="Abt-linee"></span>
                </div>
                <div className="Abt-Contents text-center">
                    <p className="Abt-Content">
                        Welcome to WiseMissteps , a platform dedicated to sharing my personal journey and experiences as I delve into various technologies. Through my blogs, I aim to provide insights into my learning process, highlight my experiences, and outline the ways in which I strive to improve my skills.
                    </p>

                    <p className="Abt-Content">
                        Why the name WiseMissteps ?, This name conveys the idea that even mistakes can be valuable and lead to wisdom when approached with a wise perspective.
                    </p>

                    <p className="Abt-Content">
                        At WiseMissteps, you'll find a collection of engaging and informative articles where I document my discoveries, challenges, and achievements in the world of technology. Each blog post offers a unique perspective on how I approach learning a particular technology, sharing valuable insights gained through hands-on experience
                    </p>

                    <p className="Abt-Content">
                        Whether I'm exploring programming languages, web development frameworks, artificial intelligence, or any other field of technology, my blogs delve into the intricacies of my learning journey. I discuss the resources I utilize, the strategies I employ, and the hurdles I overcome along the way.

                    </p>

                    <p className="Abt-Content">
                        Moreover, I provide an honest account of my experiences, shedding light on the aspects that captivate me and the challenges I face during the learning process. By sharing both the successes and the setbacks, I hope to inspire and connect with fellow learners who may find themselves on similar paths.
                    </p>
                </div>
            </div>


            <div className="Wise-footer">
                <div className="footer-line">
                    <span className="footer-linee"></span>
                </div>
                <div className="footer-bottom">
                    <div className="footer-logo">
                        <a class="fs-2 fw-semibold" href="#">⁜ WiseMissteps</a>
                        <p>Embracing Mistakes: Turning Missteps into Wisdom</p>
                    </div>
                    <div className="footer-list">
                        <a href="#">Home</a>
                        <a href="#popular">Popular</a>
                        <a href="#latest">Latest</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Abt