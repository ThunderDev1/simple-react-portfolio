import * as React from 'react';
import { NavMenu } from './NavMenu';
//import '../scss/resume.scss';
import '../less/portfolio.less';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div>
            <NavMenu />
            <div className='container-fluid'>
                {this.props.children}
            </div>
        </div>;
    }
}
