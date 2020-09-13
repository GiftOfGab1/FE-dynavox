import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { getUserInfo } from '../../Api/getUser'
import { setUser } from '../../Store/Actions/index'
import setUserDetails from '../../Store/Reducers/index'
import { useSelector } from 'react-redux'
function useApp() {

  const dispatch = useDispatch();
  // const useMountEffect = (fun) => useEffect(fun, [])
  const User = useSelector(state => state.AppState.userDetails)


  const getUser = async () => {
      const user = await getUserInfo()
      return dispatch(setUser(user.data.user, setUserDetails))
  }

  useEffect(() => {
      if(!User) {
        getUser()
      }
  }) 

}

export default useApp 