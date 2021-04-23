import React, { useEffect } from 'react'
import { getHolidays } from '../../apis/holiday'
import CurrentHoliday from './CurrentHoliday'
import { connect } from 'react-redux'
import HolidayList from './HolidayList'



function Holiday(props) {
    const { holidays } = props
    console.log(holidays)
    useEffect(() => {
        getHolidays(props.dispatch)
    }, [])

    return (
        <div style={{ backgroundColor: 'wheat', padding: 10 }}>
            <h1><span style={{ fontSize: '50px', marginRight: 8 }}>&#9997;</span>Plan my holiday</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div style={{ flex: 1, marginRight: 8 }}>
                    <h3 style={{ backgroundColor: 'gray', color: 'white', padding: 4 }}>Holidays Coming Up {new Date(Date.now()).getFullYear()}</h3>
                    <HolidayList holidays={holidays} />
                </div>
                <div style={{ flex: 2, marginRight: 8 }}>
                    <h3 style={{ backgroundColor: 'gray', color: 'white', padding: 4 }}>&#9998; Plans</h3>
                    <CurrentHoliday data={holidays} />
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        holidays: state.holidays
    }
}

export default connect(mapStateToProps)(Holiday)