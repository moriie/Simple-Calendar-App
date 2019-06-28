import React, { Component } from 'react'

export default class daynames extends Component {
    render() {
        return (
            <div className='weekdays'>
                <span className='weekDayName' >Sunday</span>
                <span className='weekDayName' >Monday</span>
                <span className='weekDayName' >Tuesday</span>
                <span className='weekDayName' >Wednesday</span>
                <span className='weekDayName' >Thursday</span>
                <span className='weekDayName' >Friday</span>
                <span className='weekDayName' >Saturday</span>
            </div>
        )
    }
}
