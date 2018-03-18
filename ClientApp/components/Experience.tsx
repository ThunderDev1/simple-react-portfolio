import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const data = require('../assets/experiences.json') as any;

interface JobExperience {
  jobTitle: string;
  companyName: string;
  companyWebsite: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
  imageLinks: string[];
  imageOrientation: string;
  workPeriod: string;
}

export class Experience extends React.Component<RouteComponentProps<{}>, {}> {

  public render() {

    let experiences = data.experiences as JobExperience[];

    return <section className="experience resume-section p-3 p-lg-5 d-flex flex-column">
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>

        {experiences.map(experience => {
          return <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{experience.jobTitle}</h3>
              <div className="subheading mb-3">
                {experience.companyWebsite ? <a href={experience.companyWebsite} target="_blank" rel="noopener" aria-label={experience.companyName + ' website'}>{experience.companyName}</a> : experience.companyName}
              </div>
              <p>{experience.description}</p>
              <ul>
                {experience.bulletPoints.map(bulletPoint => {
                  return <li>{bulletPoint}</li>
                })}
              </ul>
              <div className="mb-4">
                {experience.skills.map(skill => {
                  return <div className="skill-tag">{skill}</div>
                })}
              </div>

              <div className="screenshots">
              {experience.imageLinks.map(imageLink => {
                  return <img src={imageLink} className={experience.imageOrientation} />
                })}
              </div>

            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{experience.workPeriod}</span>
            </div>
          </div>
        })}
      </div>
    </section>;
  }
}
