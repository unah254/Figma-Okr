import React from 'react';
import Table from 'react-bootstrap/Table';
import '../assets/css/center.scss';
import Settings from '../assets/images/Settings.png'

const SideNavIcons = () => {
    return (
        <div className="black-nav">
            <img src={Settings} alt="settings"/>
            <img src={Settings} alt="settings"/>
            <img src={Settings} alt="settings"/>
            <img src={Settings} alt="settings"/>
            <img src={Settings} alt="settings"/>
        </div>
    )
}

const Business = () => {
    return (
        <div className="business-nav">
            <span className="your-business"> Your Business</span>
            <button className="users"><i className="fa fa-user-o" aria-hidden="true"> Users</i> </button>
            <button className="end-users"> <i className="fa fa-user-o" aria-hidden="true"> End Users</i></button>
            <button className="call-backs"><i className="fa fa-user-o" aria-hidden="true"> Call Backs</i></button>
        </div>
    )
}

const Center = () => {
    return (
        <div className="user-details">
          <img className="user-icon" src={Settings} alt="user-icon"/>
          <div className="user-name-time">
              <span> Temilola Moses</span>
              <span> Updated 3 min ago</span>
          </div>
          <div>
              <img src={Settings} alt="photo-id"/>
              <div className="user-details">
                  <span> Bank </span>
                  <Table striped bordered hover>
                      <thead>
                      <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                      </tr>
                      </tbody>
                  </Table>
              </div>
          </div>
        </div>
    )
}

const CenterComponent = () => {
    return (
        <div className="center">
            <SideNavIcons/>
            <Business/>
            <Center/>
        </div>
    )
}

export default  CenterComponent;


