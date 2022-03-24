import { RouteObject, useRoutes } from "react-router-dom"
import { _RouteObject } from '../state/RouterState'
import NavLayout from '../layout/NavLayout'
import NavRoutes from './navRoutes'
import FilmRoutes from './filmRoutes'
import NotFound from "../pages/NotFound"
import FilmsLayout from "../layout/FilmsLayout"
import { Suspense } from "react"
const routerMap: _RouteObject[] = [
    {
        path: '/',
        auth: true,
        element: <NavLayout />,
        children: [
            ...NavRoutes,
        ],
    },
    {
        path: '/film',
        auth: true,
        element: <FilmsLayout />,
        children: [
            ...FilmRoutes,
        ],
    },
    { 
        path: '/*',
        element: <NotFound/>
    }
]

//根据路径获取路由
const checkAuth = (routers: _RouteObject[], path: String): _RouteObject | null => {
    for (const data of routers) {
        if (data.path === path) {
            return data
        }
        if (data.children) {
            const res: _RouteObject | null = checkAuth(data.children, path)
            if (res) return {...res, auth: data.auth}
        }
    }
    return null
}

// 路由处理方式
const generateRouter = (routers: RouteObject[]): RouteObject[] => {
    return routers.map((item: any) => {
        if (item.children) {
            item.children = generateRouter(item.children)
        }
        item.element = <Suspense fallback={<div>Loading</div>}>
            {/* 把懒加载的异步路由变成组件装载进去 */}
            {item.element}
        </Suspense>
        return item
    })
}



const Routers = () => useRoutes(routerMap)
const checkRouterAuth = (path: String) => {
    let auth = null
    auth = checkAuth(routerMap, path)
    return auth
}

export { Routers, checkRouterAuth, generateRouter }
