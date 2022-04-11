import AntdPro from "../pages/antdPro"
import { _RouteObject } from "../state/RouterState"

const AdminRoutes: _RouteObject[] = [
    {
        path: '/admin',
        name: 'Admin',
        element: <AntdPro />
    }
]
export default AdminRoutes
