import AntdMobile from "../pages/antdMobile"
import { _RouteObject } from "../state/RouterState"

const MobileRoutes: _RouteObject[] = [
    {
        path: '/mobile',
        name: 'Mobile',
        element: <AntdMobile />
    }
]
export default MobileRoutes
