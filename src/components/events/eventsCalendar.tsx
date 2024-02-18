import React from 'react'

const EventsCalendar = () => {
    return (
        <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
            <div style={{width: "100%", paddingRight: 40, paddingLeft: 40}}>
                <iframe src={process.env.EVENTS_CALENDAR_API_URL} style={{width: "100%", height: "100vh", borderRadius: '1rem', padding: '1rem'}}/>
            </div>
        </div>
    )
}

export default EventsCalendar