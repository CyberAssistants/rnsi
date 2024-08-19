import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {publicRoutes} from "../routes";
import {RNSI_ROUTE} from "../utils/consts";
//import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    //const {user} = useContext(Context)

    //console.log(user)
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path="*" element={<Navigate to={RNSI_ROUTE} />} />
        </Routes>
    );
});

export default AppRouter;