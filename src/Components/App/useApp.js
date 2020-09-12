import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { getUserInfo } from '../../Api/getUser'
import { setUser } from '../../Store/Actions/index'
import setUserDetails from '../../Store/Reducers/index'

function useApp() {

const dispatch = useDispatch();
// const useMountEffect = (fun) => useEffect(fun, [])


const getUser = async () => {
    const user = await getUserInfo()
    return dispatch(setUser(user.data.user, setUserDetails))
}

useEffect(() => {
    getUser()
}) 
}

export default useApp 