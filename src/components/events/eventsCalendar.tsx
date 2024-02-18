import React from 'react'

const EventsCalendar = () => {
    return (
        <div style={{width: "100%"}}>
            <div style={{width: "100%"}}>
                <iframe src={process.env.EVENTS_CALENDAR_API_URL} style={{width: "100%", height: "80vh", borderRadius: '1rem', padding: '1rem', backgroundColor: 'white'}}/>
            </div>
        </div>
    )
}

export default EventsCalendar