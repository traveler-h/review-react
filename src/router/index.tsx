import { Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import AdminLayout from '../layout/AdminLayout';
import FilmsLayout from '../layout/FilmsLayout';
import MobileLayout from '../layout/MobileLayout';
import NavLayout from '../layout/NavLayout';
import NotFound from '../pages/NotFound';
import { _RouteObject } from '../state/RouterState';

import AdminRoutes from './adminRoutes';
import FilmRoutes from './filmRoutes';
import MobileRoutes from './mobileRoutes';
import NavRoutes from './navRoutes';

// 汇总路由
const routerMap: _RouteObject[] = [
    {
        path: '/',
        auth: true,
        element: <NavLayout />,
        children: [
            ...NavRoutes
        ]
    },
    {
        path: '/film',
        auth: true,
        element: <FilmsLayout />,
        children: [
            ...FilmRoutes
        ]
    },
    {
        path: '/admin',
        auth: true,
        element: <AdminLayout />,
        children: [
            ...AdminRoutes
        ]
    },
    {
        path: '/mobile',
        auth: true,
        element: <MobileLayout />,
        children: [
            ...MobileRoutes
        ]
    },
    {
        path: '/*',
        element: <NotFound/>
    }
];

// 根据路径获取路由
const checkAuth = (routers: _RouteObject[], path: String): _RouteObject | null => {
    for (const data of routers) {
        if (data.path === path) {
            return data;
        }
        if (data.children) {
            const res: _RouteObject | null = checkAuth(data.children, path);
            if (res) { return {...res, auth: data.auth}; }
        }
    }
    return null;
};

// 路由处理  加载优化
const generateRouter = (routers: RouteObject[]): RouteObject[] => {
    return routers.map((item: any) => {
        if (item.children) {
            item.children = generateRouter(item.children);
        }
        item.element = <Suspense fallback={<div>Loading</div>}>
            {/* 把懒加载的异步路由变成组件装载进去 */}
            {item.element}
        </Suspense>;
        return item;
    });
};

const Routers = () => useRoutes(routerMap);

// 判断路由权限
const checkRouterAuth = (path: String) => {
    let auth = null;
    auth = checkAuth(routerMap, path);
    return auth;
};

export { Routers, checkRouterAuth, generateRouter };
