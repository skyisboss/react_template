import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	BrowserRouter,
	HashRouter,
	NavigateFunction,
	useLocation,
	useNavigate,
	useRoutes
} from 'react-router-dom'
import routers from './routers'

interface Props {}
const IRouter = import.meta.env.DEV ? HashRouter : BrowserRouter

const RouterChildren: React.FC = (props) => {
	const dispatch = useDispatch()
	const navigate: NavigateFunction = useNavigate()
	const location: any = useLocation()
	const [isLogin, setIsLogin] = useState(true)
	useEffect(() => {
		// 已登陆操作
		if (isLogin) {
			//    dispatch(storeGetUseInfo() as any);
		}
	}, [isLogin])
	useEffect(() => {
		// 未登陆操作
		if (!isLogin && location.pathname !== '/auth') {
			//    navigate("/auth", {
			//      replace: true,
			//      state: {
			//        title: location?.state?.title || "",
			//      },
			//    });
		}
	}, [])
	return useRoutes(routers)
}

const Router: React.FC<Props> = (props) => {
	return (
		<IRouter>
			<RouterChildren />
		</IRouter>
	)
}

export default Router
