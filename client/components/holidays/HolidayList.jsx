import React from 'react'
import { Link } from 'react-router-dom'
import HolidayListItem from './HolidayListItem'

function HolidayList({ holidays }) {



    return (
        <div>
            {
                holidays.map(holiday =>
                    <div key={holiday.uuid} style={{

                        padding: 10,
                    }}>
                        <HolidayListItem holiday={holiday} />
                        <hr />
                    </div>
                )
            }
        </div>
    )

}

export default HolidayList
