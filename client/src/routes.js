import AdminPage from "./pages/AdminPage"
import Auth from "./pages/Auth"
import Bascet from "./pages/Bascet"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASCET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: AdminPage
    },
    {
        path: BASCET_ROUTE,
        component: Bascet
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        component: DevicePage
    },
]