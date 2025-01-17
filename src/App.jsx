import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard.jsx'
import AdminDashboard from './components/DashBoard/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // })

  const [user,setUser] = useState(null)

  const [loggedInUserData, setloggedInUserData] = useState(null)

  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if(authData){
  //    
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    if(loggedInUser){
      // console.log("User loggedIn");
      const userData = JSON.parse(loggedInUser)

      // console.log(userData);
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  },[])
  

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
      
      setUser("admin")
      
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }

    else if(authData && authData.employees){
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)

        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }

    else{
      alert("Invalid credentials")
    }
  }


  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ""}
    {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
    </>
  )
}

export default App