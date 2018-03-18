import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Skills extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
      <div className="my-auto">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming</div>
        <ul className="list-inline list-icons">
          <li className="list-inline-item">
              <i className="devicon-csharp-plain" title="C#"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-dot-net-plain-wordmark" title="DotNet"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-react-original" title="React.js"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-typescript-plain" title="TypeScript"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Tools</div>
        <ul className="list-inline list-icons">
          <li className="list-inline-item">
            <i className="devicon-visualstudio-plain" title="Visual Studio"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-bootstrap-plain" title="Bootstrap"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-bitbucket-plain" title="Bitbucket"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-git-plain" title="Git"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-less-plain-wordmark" title="Less"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Languages</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Fluent english
            </li>
        </ul>
      </div>
    </section>;
  }
}
