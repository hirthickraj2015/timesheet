import React, { useState } from 'react';
import './timeline.css';

function Timeline({ isNavbarOpen, handleToggleNavbar }) {
    const [isCollapsed, setCollapsed] = useState(true);

    const handleToggleCollapse = () => {
        setCollapsed(!isCollapsed);
    };

    // Function to handle input change and allow only numbers
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Only allow numeric input
        const newValue = value.replace(/\D/g, ''); // Remove any non-numeric characters

        // Update state or perform further actions based on the input
    };

    return (
        <div >
            <div className={`timeline-container ${isNavbarOpen ? '' : 'navbar-closed'} `}>
            {!isNavbarOpen &&
                <i className="bx bx-right-indent logt" onClick={handleToggleNavbar}></i>
            }
            <div><strong ><h2 style={{marginTop:'20px',fontWeight:'bold',color:'#19105B'}}>Timesheet</h2></strong></div>
            <div className=' allow row'>
                Allocation Extension
                <i class='bx bx-chevron-down' style={{color:'white'}} onClick={handleToggleCollapse}></i> 
            </div>
            <div className={isCollapsed ? 'collapse' : ''}>
                    <div >
                        <table className='tbl'>
                            <tr className='tblhd tbl'> 
                                <td>Project Name</td>
                                <td>Project Type</td>
                                <td>Project End Date</td>
                                <td>Allocation End Date</td>
                                <td>Project Allocation Extension</td>
                            </tr>
                            <tr style={{width:'100%'}} className='tblno'>
                                <td>No Options Available</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div className='allow'>Timesheet</div>
                <div>
                    <table className='tbl'>
                        <tr>
                            <th style={{width:'120px'}}>Project Type</th>
                            <th style={{width:'90px'}}>Project Name</th>
                            <th style={{width:'90px'}}>Task</th>
                            <th style={{width:'150px'}}>Comment</th>
                            <th><div>Mon</div><div>05</div></th>
                            <th><div>Tue</div><div>05</div></th>
                            <th><div>Wed</div><div>05</div></th>
                            <th><div>Thu</div><div>05</div></th>
                            <th><div>Fri</div><div>05</div></th>
                            <th><div>Sat</div><div>05</div></th>
                            <th><div>Sun</div><div>05</div></th>
                            <th><div>Total</div></th>
                            <th style={{width:'75px'}}></th>
                        </tr>
                        
                        <tr className='tda'>
                            <td style={{width:'120px'}}>BAU Activity</td>
                            <td style={{width:'90px'}}><select >
                                <option>BAU_001 Training & Project Knowledge</option>
                                <option>BAU_002 People</option>
                                </select></td>
                            <td style={{width:'90px'}}><select>
                                <option>Employee Wellbeing</option>
                                <option>Jmates</option>
                                </select></td>
                            <td style={{width:'150px'}}><input  type='text'></input></td>
                            <td><div><input type='number' name='hours' onChange={handleInputChange} /></div></td>                         
                            <td><div><input type='number' name='hours' onChange={handleInputChange} /></div></td>
                            <td><div><input type='number' name='hours' onChange={handleInputChange} /></div></td>
                            <td><div><input type='number' name='hours' onChange={handleInputChange} /></div></td>
                            <td><div><input type='number' name='hours' onChange={handleInputChange} /></div></td>
                            <td><div><input type='number' name='hours' onChange={handleInputChange} /></div></td>
                            <td><div><input type='number' name='hours' onChange={handleInputChange} /></div></td>
                            <td><div><input type='number' name='hours' onChange={handleInputChange} /></div></td>
                            <td style={{width:'75px'}}><i className='bx bx-plus'></i> <i className='bx bx-minus' ></i></td>
                        </tr>
                        <tr className='tda'>
                            <td style={{width:'120px'}}>Sales Activity</td>                           
                            <td style={{width:'90px'}}><select>
                                <option>Account Management</option>
                                <option>Account Management</option>
                                </select></td>
                            <td style={{width:'90px'}}><select>
                                <option>PAI Partners</option>
                                </select></td>
                           <td style={{width:'150px'}}><input type='text'></input></td>
                            <td><input type='number' name='hours' onChange={handleInputChange} /></td>
                            <td><input type='number' name='hours' onChange={handleInputChange} /></td>
                            <td><input type='number' name='hours' onChange={handleInputChange} /></td>
                            <td><input type='number' name='hours' onChange={handleInputChange} /></td>
                            <td><input type='number' name='hours' onChange={handleInputChange} /></td>
                            <td><input type='number' name='hours' onChange={handleInputChange} /></td>
                            <td><input type='number' name='hours' onChange={handleInputChange} /></td>
                            <td><div><input type='text'></input></div></td>
                            <td style={{width:'75px'}}><i className='bx bx-plus'></i> <i className='bx bx-minus' ></i></td>
                        </tr>
                        <tr className='tda'>
                            <td style={{width:'120px'}}>Total Hours</td>
                            <td style={{width:'90px'}}></td>
                            <td style={{width:'90px'}}></td>
                            <td style={{width:'150px'}}></td>
                            <td><div><input type='text'></input></div></td>
                            <td><div><input type='text'></input></div></td>                           
                            <td><div><input type='text'></input></div></td>
                            <td><div><input type='text'></input></div></td>
                            <td><div><input type='text'></input></div></td>
                            <td><div><input type='text'></input></div></td>
                            <td><div><input type='text'></input></div></td>
                            <td><div><input type='text'></input></div></td>
                            <td style={{width:'75px'}}></td>
                        </tr>
                        <tr className='tda'>
                            <td style={{width:'120px'}}>Machine Hours</td>
                            <td style={{width:'90px'}}></td>
                            <td style={{width:'90px'}}></td>
                            <td style={{width:'150px'}}></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><div></div></td>
                            <td style={{width:'75px'}}></td>
                        </tr>                       
                        <tr className='tda'>
                            <td style={{width:'120px'}}>Break Hours</td>
                            <td style={{width:'90px'}}></td>
                            <td style={{width:'90px'}}></td>
                            <td style={{width:'150px'}}></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{width:'75px'}}></td>
                        </tr>
                    </table>
                </div>
                <div className='btd'>
                    <button type="button" class="btn btns ">Save</button>
                    <button type="button" class="btn btns1 ">Submit</button>
                </div>
                
            </div>
        </div>
        
    );
}

export default Timeline;