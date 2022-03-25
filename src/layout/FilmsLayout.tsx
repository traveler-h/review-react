import { Route, RouteObject } from 'react-router-dom'
import { Outlet, Routes } from 'react-router-dom'
import { generateRouter } from '../router'
import FilmRoutes from '../router/filmRoutes'

export default function FilmLayout() {
    // 路由处理方式
    const FinlyRoutes: RouteObject[] = generateRouter(FilmRoutes)
    return (
        <div>
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
