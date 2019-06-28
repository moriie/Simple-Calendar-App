import React, { Fragment, useState } from 'react'

const Sidebar = (props) => {

    const [viewState, setviewState] = useState(false);

    const toggleCalendarForm = () => {
        setviewState(!viewState)
    };

    const handleSubmit = (event) => {
        props.addCalendar(event)
        setviewState(!viewState)
    }

    const setView = () => {
        if (viewState === false) {
            return <Fragment>
                <h1>Upcoming Events</h1>
                <ol className='upcoming-events'>
                    {createEvents()}
                </ol>
                <h1>Your Calendars</h1>
                <ol className='user-calendars'>
                    {createCalendars()}
                </ol>
                <button className='open-calendar-form' onClick={toggleCalendarForm}>Create New Calendar</button>
            </Fragment>
        }
        else {
            return <Fragment>
                <h2>Create New Calendar</h2>
                <form className='create-calendar' onSubmit={handleSubmit}>
                    <label>Name</label><br /><br />
                    <input type='text' name='name' /><br /><br />
                    <input type='submit' value='submit' />
                </form>
            </Fragment>
        }
    }

    const createEvents = () => {
        return props.events.map((event, index) => {
            if (index < 5) {
                return <li key={event.id}>{event.name}</li>
            }
            else{
                return null
            }
        })
    };

    const createCalendars = () => {
        return props.calendars.map(calendar => {
            return <li key={calendar.id}>{calendar.name}</li>
        })
    };

    return <div className='sidebar'>
        {setView()}
    </div>
}

export default Sidebar;
