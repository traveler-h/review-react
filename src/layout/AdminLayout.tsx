import { Route, RouteObject } from 'react-router-dom';
import { Outlet, Routes } from 'react-router-dom';

import { generateRouter } from '../router';
import AdminRouters from '../router/adminRoutes';

export default function AdminLayout() {
    // 路由处理方式
    const FinlyRoutes: RouteObject[] = generateRouter(AdminRouters);
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
    );
}
