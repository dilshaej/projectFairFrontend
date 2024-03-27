import React from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
    <Header insideDashboard={true}/>
   <div style={{marginTop:'100px'}} className='container-fluid'> 
   <h1>Welcome <span className='text-warning'>User</span></h1>
   <div className="row mt-5">
    <div className="col-lg-8">
<View/>
    </div>
    <div className="col-lg-4">
<Profile/>
    </div>
   </div>
   </div>
    </>
  )
}

export default Dashboard