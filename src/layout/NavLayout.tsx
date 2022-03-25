import { Link, RouteObject } from 'react-router-dom'
import NavRoutes from '../router/navRoutes'
import RouterBeforeEach from '../router/RouterBeforeEach'
import { generateRouter } from '../router'

// 在加载之前判断路由权限
export default function NavLayout() {
    const FinlyRoutes: RouteObject[] = generateRouter(NavRoutes)
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
        </div>
    )
}
