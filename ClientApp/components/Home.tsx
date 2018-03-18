import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return <section className="resume-section p-3 p-lg-5 d-flex d-column">
      <div className="my-auto">
        <h1 className="mb-0">Peter
            <span className="text-primary"> Parker</span>
        </h1>
        <div className="subheading mb-5">Freelance web developper</div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <b>commodo</b> consequat. Duis aute irure dolor in reprehenderit in <b>voluptate</b> velit esse cillum
          </p>
        <p>
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        <p>
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b>
        </p>
        <p className="mb-5">
          Please <NavLink to='/contact'>contact me</NavLink>
          </p>
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a href="#" target="_blank" rel="noopener" aria-label="linkedin profile page">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" target="_blank" rel="noopener" aria-label="github profile page">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>;
  }
}