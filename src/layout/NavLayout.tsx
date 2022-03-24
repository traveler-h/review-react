import React, { Suspense } from 'react'
import { Link, Route, RouteObject } from 'react-router-dom'
import { Outlet, Routes } from 'react-router-dom'
import NavRoutes from '../router/navRoutes'
import RouterBeforeEach from '../router/RouterBeforeEach'
import { generateRouter } from '../router'

export default function NavLayout() {
    const FinlyRoutes: RouteObject[] = generateRouter(NavRoutes)
    console.log(NavRoutes);
    return (
        <div>
            <nav>
                {
                    NavRoutes.map(item =>
                        <Link key={item.path} to={item.path}> {item.name}</Link>
                    )
                }
            </nav> 
            {/* <Outlet /> */}
            <RouterBeforeEach />
            {/* <Routes>
                {
                    FinlyRoutes.map(item => 
                        <Route key={item.path} path={item.path} element={item.element} ></Route>)
                }
            </Routes> */}
        </div>
    )
}
