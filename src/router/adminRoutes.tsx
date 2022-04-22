import AntdPro from '../pages/antdPro';
import { _RouteObject } from '../state/RouterState';

const adminRoutes: _RouteObject[] = [
    {
        path: '/admin',
        name: 'Admin',
        element: <AntdPro />
    }
];
export default adminRoutes;
