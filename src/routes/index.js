import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import HeaderOnly from '~/layouts/HeaderOnly';
import routes from '~/configs/routes';

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: '/@:nickname', component: Profile },
    { path: routes.profile, component: Profile },
    { path: routes.search, component: Search },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
