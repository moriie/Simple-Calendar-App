import React from 'react';
import './App.css';
import Navbar from './containers/navbar'
import Sidebar from './containers/sidebar'
import Calendar from './components/calendar'
import DayDock from './components/daydock'

export default class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      today: Date(Date.now()),
      menuBtn: false,
      user: {
        name: 'Pidgey',
      },
      events: [],
      calendars: [],
      sidebar: false,
      createCalendar: false,
      daydock: false,
      spotlight: '',
      shownMonth: new Date().getMonth(),
    }

    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(resj => this.setState({
        events: resj
      }))

    fetch('http://localhost:3000/calenders')
      .then(res => res.json())
      .then(resj => this.setState({
        calendars: resj
      }))
  }

  hamburgerBtn = () => {
    this.setState({
      menuBtn: !this.state.menuBtn,
      sidebar: !this.state.sidebar
    })
  }

  addEvent = (event) => {
    event.persist()
    event.preventDefault()

    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: 1,
        calender: 1,
        date: this.state.spotlight.getTime(),
        description: event.target.desc.value,
        name: event.target.name.value,
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          events: [...this.state.events, res]
        })
      })
  }

  toggleDayDock = (dayID = null) => {
    if (typeof dayID === 'string') {
      this.setState({
        daydock: true,
        spotlight: new Date(dayID),
      }, )
    }
    else {
      this.setState({
        daydock: false,
        spotlight: '',
      })
    }
  }

  openSidebar = () => {
    if (this.state.sidebar === false) {
      return null
    }
    else {

      return < Sidebar user={{ ...this.state.user }} events={this.state.events} calendars={this.state.calendars} addCalendar={this.addCalendar} />
    }
  }

  openDayDock = () => {
    if (this.state.daydock === false) {
      return null
    }
    else {
      return < DayDock spotlight={new Date(this.state.spotlight)} addEvent={this.addEvent} calendars={this.state.calendars} events={this.state.events.filter(event => parseInt(event.date) === this.state.spotlight.getTime())} toggleDayDock={this.toggleDayDock} />
    }
  }

  addCalendar = (event) => {
    event.preventDefault()
    event.persist()

    fetch(`http://localhost:3000/calenders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: event.target.name.value
      })
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          calendars: [...this.state.calendars, { id: this.state.calendars.length + 1, name: event.target.name.value }]
        })
      })
  }


  render() {

    return (
      <div className="App">
        < Navbar hamburgerBtn={this.hamburgerBtn} menuBtnState={this.state.menuBtn} username={this.state.user.name}/>
        {this.openSidebar()}
        {this.openDayDock()}
        < Calendar events={this.state.events} today={this.state.today} toggleDayDock={this.toggleDayDock} spotlight={this.state.spotlight === '' ? 0 : this.state.spotlight.getTime()} />
      </div>
    );
  }
}



//this.state.spotlight format is '...Wed May 01 2019 00:00:00 GMT-0400...'

//use spotlight state to highlight day being viewed


  // openCreateCalendar = (event) => {
  //   if (event.target.class === 'create-calendar'){
  //     this.setState({
  //       createCalendar: true
  //     })
  //   }
  //   else{
  //     this.setState({
  //       createCalendar: false
  //     })
  //   }
  // }