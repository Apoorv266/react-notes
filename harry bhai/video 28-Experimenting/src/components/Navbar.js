import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import Button from './Button';
import { useHistory } from 'react-router'


export default class Navbar extends Component {



    render(props) {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">sports
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>


                                <div className="dropdown container">
                                    <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Country
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                                        <li><Link className="dropdown-item" onClick={this.props.ConArab} to={this.props.Currlink}>India</Link></li>

                                        <li><Link className="dropdown-item" onClick={this.props.ConRus} to={this.props.Currlink}>Russia</Link></li>

                                        <li><Link className="dropdown-item" onClick={this.props.ConChin} to={this.props.Currlink}>China</Link></li>
                                    </ul>
                                </div>

                            </ul>

                            <Button addContactHandler={this.props.addContactHandler} />
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
