import React from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
function DefaultLayout() {
    return (
        <div>
           <Sidebar/>
           <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <Header/>
           </div>
        </div>
    )
}

export default DefaultLayout
