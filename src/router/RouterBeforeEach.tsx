import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Navigate, Outlet } from 'react-router-dom';

import { checkRouterAuth } from './index';

// 路由拦截， 判断是否登录和有无操作权限
const RouterBeforeEach = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        let obj = checkRouterAuth(location.pathname);
        let blLogin = sessionStorage.getItem('login');
        // if (obj?.auth && blLogin !== 'true') {
        if (obj?.auth) {
            setAuth(true);
            navigate(location.pathname);
        // } else if(blLogin !== 'true') {
        //     setAuth(false)
        //     navigate('/login') // 没登录跳到login
        } else {
            setAuth(false); // 登录后没权限跳到null
        }
    }, [location.pathname, navigate]);
    return auth ? <Outlet /> : <Navigate replace to="/login" />;
};

export default RouterBeforeEach;
