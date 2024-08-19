import {DICTIONARIES_ROUTE, CONFIG_ROUTE, OID_ROUTE, RNSI_ROUTE} from "./utils/consts";
import Rnsi from "./pages/rnsi";
import Dictionaries from "./pages/dictionaries";
import Oid from "./pages/oid";
import Config from "./pages/config";

export const publicRoutes = [
    {
        path: DICTIONARIES_ROUTE,
        Component: Dictionaries
    },
    {
        path: CONFIG_ROUTE,
        Component: Config
    },
    {
        path: OID_ROUTE,
        Component: Oid
    },
    {
        path: RNSI_ROUTE,
        Component: Rnsi
    },
]