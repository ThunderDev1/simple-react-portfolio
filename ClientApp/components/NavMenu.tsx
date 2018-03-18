import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as $ from 'jquery';

export class NavMenu extends React.Component<{}, {}> {

    collapseNav(){
        if ($(".navbar-collapse").is(":visible") && $(".navbar-toggler").is(":visible")) {
            $('.navbar-collapse').collapse('toggle');
        }
    }

    public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Peter Parker</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="avatar.png" alt="" />
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to='/' className="nav-link" onClick={() => this.collapseNav()}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/experience' className="nav-link" onClick={() => this.collapseNav()}>
                                Experience
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/skills' className="nav-link" onClick={() => this.collapseNav()}>
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className="nav-link" onClick={() => this.collapseNav()}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
