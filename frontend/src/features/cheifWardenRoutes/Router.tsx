// lib
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';
import Layout from "../../component/Layout/Index"
import Hall from "../hall/Router"
import Student from "../student/Router"
import HallDetails from "../hallDetailsPage/Router"
import Mess from "../mess/Router"
import HallAllotment from "../hallAllotment/Router"
import Dashboard from "../chiefWardenDashboard/Router"


function Main() {
    // const { user } = useUserAuth()
    return (
        <Routes>

            <Route path='/*' element={<Others />}></Route>
            {/* <Route path='/*' element={<Login />}></Route> */}
        </Routes>
        // </UserAuthContextProvider>

    )
}

function Others() {
    const { user } = useUserAuth();

    const navigate = useNavigate()

    console.log(user)

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user])

    return (
        <>
            {user ? <>
                <Layout>
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard />}></Route>
                        <Route path='/hall-management' element={<Hall />}></Route>
                        <Route path='/hall-management/:id' element={<HallDetails />}></Route>
                        <Route path='/student-list' element={<Student />}></Route>
                        <Route path='/mess-list' element={<Mess />}></Route>
                        <Route path='/hall-allotment' element={<HallAllotment />}></Route>


                    </Routes>
                </Layout>
            </> : ""
            }

        </>
    )
}


export default Main;