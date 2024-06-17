import React from 'react'
import ANavbar from '../Components/ANavbar'
import AHeader2 from '../Components/AHeader2'
import AFooter from '../Components/AFooter'

function Dashboard() {
  return (
    <div>
      <ANavbar />
      <AHeader2 title={"Dashboard"} />
      <AFooter title={"Logout"}/>
    </div>
  )
}

export default Dashboard
