import FilmDetail from '../pages/film/FilmDetail';
import FilmList from '../pages/film/FilmList';
import { _RouteObject } from '../state/RouterState';

// 电影路由
const navRouter: _RouteObject[] = [
    {
        path: '/film/',
        index: true,
        name: 'FilmList',
        element: <FilmList/>
    },
    {
        path: '/film/:id',
        name: 'FilmDetail',
        element: <FilmDetail  />
    }
];
export default navRouter;
