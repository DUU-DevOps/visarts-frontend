import React from 'react'

const EventsCalendar = () => {
    return (
        <div style={{width: "100%"}}>
            <div style={{width: "100%"}}>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=ZnZqMjVuYmp1Ym52bHFiaTNnYzRiam42NmlhajJna2FAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=bDU4aGoyODJsZWZwa3FnY3M2OThidjhxamZ1dGducDZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5&color=%233F51B5" style={{width: "100%", height: "70vh", borderRadius: '1rem', padding: '1rem', backgroundColor: 'white'}}/>
                {/* To display calendar of user, use instead: src={process.env.EVENTS_CALENDAR_API_URL} */}
            </div>
        </div>
    )
}

export default EventsCalendar