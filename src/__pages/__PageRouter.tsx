import * as React from 'react';
import { useEffect } from 'react';
// import { HashRouter,    Route, Router,   } from 'react-router-dom';
import { BrowserRouter, Routes, Route, useRoutes, useNavigate, HashRouter } from 'react-router-dom';

import { createHashHistory, createBrowserHistory } from 'history';
import { e,h,  b } from './incoming';
import * as pages from './index';

// import axios from 'axios';

export interface PageRouterProps {}

const PageRouter: React.FC<PageRouterProps> = () => {
    const history = createBrowserHistory();
    const { state_settings, set_settings  } = h.Mother();

    // ACKNOWLEDGE USER INTO DATABASE
    // useEffect(() => {
    //     if (!state_user.acknowledged && state_user.loggedIn) {
    //         hook_user.acknowledgedUser();
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [state_user.acknowledged, state_user.loggedIn]);

    // const isMobile = React.useMemo(() => {
    //     const wd = window.innerWidth;
    //     if (wd < 420) {
    //         set_settings({
    //             screen: 'mobile',
    //         });
    //         return true;
    //     } else {
    //         set_settings({
    //             screen: 'desktop',
    //         });
    //         return false;
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    useEffect(() => {
        document.addEventListener('visibilitychange', function () {
            const today = new Date().getDate().toString();
            const last_refreshed = localStorage.getItem('today');
            set_settings({
                window_is_visible: document.hidden,
            });
            if (today !== last_refreshed) {
                console.log(`step 2 - _of 1_ - OK - mismatch found `);
                localStorage.setItem('today', today);
                window.location.reload();
            } else {
                console.log(`step 2 - _of 1_ - OK - page has been refreshed today`);
                console.log({ today, last_refreshed });
            }
        });
    }, [set_settings]);

    return (
        <HashRouter >
            {/* <BrowserRouter> */}
            <Routes>
                {/* <ROUTES /> */}
                <Route path="/" element={<pages.Home />}></Route>
                <Route path="/test" element={<div>Testing working</div>}></Route>
                <Route path="test2" element={<div>Testing 2 working</div>}></Route>
                {/* <Route path=":category" element={<pages.Homepage />} /> */}
            </Routes>
            {/* </BrowserRouter> */}
        </HashRouter>
    );
    // <HashRouter>
    //     {/* <Route path={e.links.paths.home}>{!isMobile ? <b..Navbar /> : <reuse_mobile.Navbar />}</Route> */}
    // </HashRouter>
    // <Router location={''} navigator={navigate} >
    // </Router>
    // if(state_settings.isMobile){
    // }else {
    //     return (
    //     );

    // }
};

export default PageRouter;
