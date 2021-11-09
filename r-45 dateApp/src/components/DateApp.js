import React, {useState, useEffect} from 'react'

const DateApp = () => {

//   day
const cDay = new Date().getDay()
console.log(cDay)

const [day, setDay] = useState(cDay)

const weekDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

// function to update the day 
const updateDay = () => {
    const newDay = new Date().getDay()
    setDay(newDay)
}

useEffect(() =>{
    const dayInterval = setInterval(updateDay,1000)
    return () =>{
        clearInterval(dayInterval)
    }

},[day])



//   month
const cMonth = new Date().getMonth()
console.log(cMonth)

 const [month, setMonth] = useState(cMonth)

 const months = ['january', 'february', 'march', 'april', 'may','june','july','august','september','october','november','december']

// function to update the day 
const updateMonth = () => {
    const newMonth = new Date().getMonth()
    setMonth(newMonth)
}

useEffect(() =>{
    const monthInterval = setInterval(updateMonth,1000)
    return () =>{
        clearInterval(monthInterval)
    }

},[month])




//   dateMonth
const cDateMonth = new Date().getDate()
console.log(cDateMonth)

  const [dateMonth, setDateMonth] = useState(cDateMonth)


// function to update the dateMonth 
const updateDateMonth = () => {
    const newDateMonth = new Date().getDate()
    setDateMonth(newDateMonth)
}

useEffect(() =>{
    const dateMonthInterval = setInterval(updateDateMonth,1000)
    return () =>{
        clearInterval(dateMonthInterval)
    }

},[dateMonth])











    return (
      <React.Fragment>
            <section className='md:mx-20 lg:mx-96 mt-20'>
                <table className="border-separate border border-white w-full h-auto uppercase">
                    <thead>
                        <tr>
                            <th colSpan="2" className="bg-black text-white text-4xl py-2 px-6">updated date app</th>
                           
                        </tr>
                        <tr>
                            <th className="bg-black text-white text-2xl py-2 px-6">Day</th>
                            <th className="bg-black text-white text-2xl py-2 px-6">date</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td className="bg-white text-black text-2xl py-2 px-6">{weekDays[day]}</td>
                            <td className="bg-white text-black text-2xl py-2 px-6">{months[month]} {dateMonth}</td>    
                        </tr>

                        <tr>
                            <td className="bg-black text-white text-2xl py-2 px-6">{weekDays[Math.abs(6-day)]}</td>
                            <td className="bg-black text-white text-2xl py-2 px-6">{months[month]} {dateMonth-1}</td>    
                        </tr>

                        <tr>
                            <td className="bg-black text-white text-2xl py-2 px-6">{weekDays[Math.abs(5-day)]}</td>
                            <td className="bg-black text-white text-2xl py-2 px-6">{months[month]} {dateMonth-2}</td>    
                        </tr>

                        <tr>
                            <td className="bg-black text-white text-2xl py-2 px-6">{weekDays[Math.abs(4-day)]}</td>
                            <td className="bg-black text-white text-2xl py-2 px-6">{months[month]} {dateMonth-3}</td>    
                        </tr>

                        <tr>
                            <td className="bg-black text-white text-2xl py-2 px-6">{weekDays[Math.abs(3-day)]}</td>
                            <td className="bg-black text-white text-2xl py-2 px-6">{months[month]} {dateMonth-4}</td>    
                        </tr>

                        <tr>
                            <td className="bg-black text-white text-2xl py-2 px-6">{weekDays[Math.abs(2-day)]}</td>
                            <td className="bg-black text-white text-2xl py-2 px-6">{months[month]} {dateMonth-5}</td>    
                        </tr>

                        <tr>
                            <td className="bg-black text-white text-2xl py-2 px-6">{weekDays[Math.abs(1-day)]}</td>
                            <td className="bg-black text-white text-2xl py-2 px-6">{months[month]} {dateMonth-6}</td>    
                        </tr>

                        
                    </tbody>
                </table>
            </section>
      </React.Fragment>
    )
}

export default DateApp
