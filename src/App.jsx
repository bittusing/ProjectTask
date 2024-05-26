
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login'
import Otp from './components/Login/Otp';
import navRoutes from './routes/route';
import Dashboard from './pages/Dashboard';

function App() {
  
   

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>   

         {navRoutes?.map((route,item) => {
            const routProps = {
              path: route.path,
              Component: route.component,
            };
            if(item===0)
            {
              return <Route index key={route.path+item} {...routProps}/>;
            }
            else{
              return <Route  key={route.path+item} {...routProps}/>;
            }
          })}
          </Route>
        <Route path="/sentotp" element={<Otp />} />
       
      </Routes>
    </Router>
  )
}

export default App
