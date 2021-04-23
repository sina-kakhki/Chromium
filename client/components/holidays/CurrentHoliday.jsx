import React, { useEffect, useState } from 'react'
import { getTodo, storeTodo } from '../../apis/holiday'
import { connect } from 'react-redux'

function CurrentHoliday(props) {
    const [list, setList] = useState('')

    function storeTodoList() {
        storeTodo({
            holiday: props.holiday.uuid,
            todo: list
        }, props.dispatch)
    }

    return (
        <div style={{ padding: 8 }}>
            <h4><b>Holiday: </b>{props.holiday.name}</h4>
            <h4><b>Date: </b>{props.holiday.date}</h4>
            <br />
            <textarea onFocus={(e) => {
                if (!props.holiday.todo)
                    e.target.value = ""
            }} onChange={(e) => {
                setList(e.target.value)
            }} style={{ width: '100%' }} rows="30" type="text" value={props.holiday.todo} placeholder="Things to do" />
            <div>
                <button onClick={storeTodoList} style={{ textAlign: 'center' }}>Save</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {



    return {
        holiday: state.holiday
    }
}

export default connect(mapStateToProps)(CurrentHoliday)