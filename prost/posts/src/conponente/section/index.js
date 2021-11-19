import React from "react";
import logo from '../../logo.svg';
import './index.scss'
export class Section extends React.Component {
    render() {
        return (
            <div className='SectionWrap'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}