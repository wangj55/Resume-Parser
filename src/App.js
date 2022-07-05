import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import { DashboardPage } from "./containers/dashboardPage/DashboardPage";
import { UploadPage } from "./containers/uploadPage/UploadPage";

function App() {
    const ROUTES = {
        DASHBOARD: "/dashboard",
        UPLOAD: "/upload"
    };

    return (
        <>
            Hello World
            <nav>
                <NavLink to={ROUTES.DASHBOARD}>
                    Dashboard
                </NavLink>
                <NavLink to={ROUTES.UPLOAD}>
                    Upload
                </NavLink>
            </nav>
            <main>
                <Routes>
                    <Route
                        exact path="/"
                        element={<Navigate to={ROUTES.DASHBOARD} />}
                    />
                    <Route
                        path={ROUTES.DASHBOARD}
                        element={<DashboardPage/>}
                    />
                    <Route
                        path={ROUTES.UPLOAD}
                        element={<UploadPage/>}
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
