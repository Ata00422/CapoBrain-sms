import React, { useContext } from 'react'
import MyContext from '../../ContextApi/MyContext'
import { useNavigate } from 'react-router-dom'
import UserProfile from './index'

export default function UserPanel() {
    const { signUser } = useContext(MyContext)
    const navigate = useNavigate()
    return (
        <>
            {signUser && signUser.email !== "capobrain@gmail.com" ? <UserProfile /> : navigate("/userLogin")}
        </>
    )
}
