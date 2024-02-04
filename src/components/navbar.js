import React from 'react';
import './navbar.css';
import logo from '../asserts/logo.png';

function Navbar({ isNavbarOpen, handleToggleNavbar }) {
    return (
        <div id="nav" className={isNavbarOpen ? 'open' : 'closed'}>
            <div className="topdiv p-2">
                <div id="logodiv">
                    <img src={logo} alt="Logo" />
                </div>
                {!isNavbarOpen && <i className="bx bx-right-indent logt" onClick={handleToggleNavbar}></i>}
                <i className={isNavbarOpen ? 'bx bx-chevrons-left logt' : 'bx bx-right-indent logt'} onClick={handleToggleNavbar}></i>
            </div>
            <div className="navelem">
                <div className="navlin">Dashboard</div>
                <div className="navlin">Timesheet</div>
                <div className="navlin">Leave</div>
                <div className="navlin">Work From Home</div>
                <div className="navlin">Feedback</div>
                <div className="navlin">Survey</div>
                <div className="navlin">Service Deck</div>
                <div className="navlin">Forms</div>
                <div className="navlin">Travel</div>
                <div className="navlin">Expenses</div>
                <div className="navlin">Resourcing</div>
                <div className="navlin logout">
                    <hr style={{color:'white'}} />
                    Logout <i className='bx bx-log-out mgt' style={{marginTop:'20px', paddingLeft:'20px'}}></i>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
