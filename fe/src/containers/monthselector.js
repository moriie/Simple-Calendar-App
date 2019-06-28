import React from 'react'

const MonthSelector = (props) => {

    const monthsArr = ['January',' February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const monthsShortArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const createMonthSelector = () => {
        return monthsArr.map((month, index)=>{
            return <button className='monthButton' name={month} onClick={e => props.setMonth(e.target.name)}>{monthsShortArr[index]}</button>
        })
    }
    
    return <div className='monthselector'>
        {createMonthSelector()}
    </div>
}

export default MonthSelector;