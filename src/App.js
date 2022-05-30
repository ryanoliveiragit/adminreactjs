import React,{ useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar.js'


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  }
  return (
    <div className='container'>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  )
}
export default App;
