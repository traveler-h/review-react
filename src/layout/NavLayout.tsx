import { Link, RouteObject } from 'react-router-dom';

import { generateRouter } from '../router';
import NavRoutes from '../router/navRoutes';
import RouterBeforeEach from '../router/RouterBeforeEach';

// 在加载之前判断路由权限
export default function NavLayout() {
    const FinlyRoutes: RouteObject[] = generateRouter(NavRoutes);
    return (
        <div>
            <nav data-testid="navbar">
                {
                    NavRoutes.map(item =>
                        <Link data-testid={item.name} key={item.path} to={item.path}> {item.name}</Link>
                    )
                }
            </nav>
            {/* <Outlet /> */}
            <RouterBeforeEach />
        </div>
    );
}
