import React from 'react'
import './NavApp.css'

const Navbar = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary p-2">
                <div class="container-fluid">
                    <a class="navbar-brand fs-2 fw-semibold" href="#">⁜ WiseMissteps</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex" role="search">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Explore
                                </a>
                                <ul class="dropdown-menu fs-5">
                                    <li><a class="dropdown-item" href="#latest">Latest Artical</a></li>
                                    <li><a class="dropdown-item" href="#popular">Popular Artical</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="https://rb.gy/f24jc">Portfolio</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#about">About</a>
                            </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
            <span className="Nav-line"></span>
        </>
    )
}

export default Navbar