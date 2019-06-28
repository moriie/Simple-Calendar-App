import React from 'react'

export default class Day extends React.Component {

    render() {
        return <span key={this.props.day.id} className={this.props.focus ? 'focus' : 'day'} id={this.props.day.id}>
            {this.props.day.num}
            <br />
            {this.props.events.length !== 0 ? this.eventMap() : ' '}
        </span>

    }

    eventMap() {
        return this.props.events.map((e, i) => i < 6 ? <div key={e.id} className='eventName'>{e.name}</div> : <span></span>)
    }
}
