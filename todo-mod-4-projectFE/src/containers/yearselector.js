import React, { useState } from 'react'

const YearSelector = (props) => {

    const [yearSelectorPage, setyearSelectorPage] = useState(props.year)

    // useEffect(()=>{

    // })
    
    const createYearSelector = (year) => {
        let yearArr = []
        for (let n=year-6; n < year+6; n++){
            yearArr.push(n)
        }

        return yearArr.map((year)=>{
            return <button className='yearButton' name={year} onClick={e => props.setYear(e.target.name)}>{year}</button>
        })
    }

    return <div className='yearselector'>
        {createYearSelector(yearSelectorPage)}
        <button onClick={()=>setyearSelectorPage(yearSelectorPage-12)} className='prev-page-btn'>&#8668;</button>
        <button onClick={()=>setyearSelectorPage(yearSelectorPage+12)} className='next-page-btn'>&#8669;</button>
    </div>
}

export default YearSelector;