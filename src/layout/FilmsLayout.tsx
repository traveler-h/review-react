import React, { Suspense } from 'react'
import { Link, Route, RouteObject } from 'react-router-dom'
import { Outlet, Routes } from 'react-router-dom'
import { generateRouter } from '../router'
import FilmRoutes from '../router/filmRoutes'
import RouterBeforeEach from '../router/RouterBeforeEach'

export default function FilmLayout() {
    // 路由处理方式
    const FinlyRoutes: RouteObject[] = generateRouter(FilmRoutes)
    return (
        <div>
            {/* <nav>
                {
                    FilmRoutes.map(item =>
                        <Link key={item.path} to={item.path}> {item.name}</Link>
                    )
                }
            </nav>  */}
            {/* <Outlet /> */}
            {/* <RouterBeforeEach /> */}
            <Routes>
                {
                    FinlyRoutes.map(item =>
                        <Route key={item.path} path={item.path} element={item.element} ></Route>)
                }
            </Routes>
            <Outlet />
        </div>
    )
}
