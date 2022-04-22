import { element } from 'prop-types';

import FilmList from '../pages/film/FilmList';
import Hello from '../pages/Hello';
import Home from '../pages/Home';
import { _RouteObject } from '../state/RouterState';

// 导航部分路由
const NavRouter: _RouteObject[] = [
    {
        path: '/',
        name: 'Home',
        element: <Home />
    },
    {
        path: '/Hello',
        name: 'Hello',
        element: <Hello />
    },
    {
        path: '/film/',
        name: 'Film',
        element: <FilmList />
    }
];
export default NavRouter;
