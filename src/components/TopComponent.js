import React from 'react';
import '../assets/css/top.scss';
import { DropdownButton, Dropdown } from "react-bootstrap";
import Switch from '@material-ui/core/Switch';
import Settings from '../assets/images/Settings.png';

const TopComponent = () => {
    return (
        <div className="top-component">
            <img src={Settings} alt="logo" className="logo"/>
            <DropdownButton id="dropdown-basic-button" title="Get Money Inc" className="dropdown-btn">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </DropdownButton>
            <span className="sandbox"> Sandbox</span>
            <Switch
                className="switch-btn"
                checked={false}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <span className="production"> Production</span>
            <div><i className="fa fa-bell" aria-hidden="true"/></div>
            <div><i className="fa fa-user-o" aria-hidden="true"/></div>
            <span> David Jones</span>
        </div>
    )
}

export default TopComponent;
