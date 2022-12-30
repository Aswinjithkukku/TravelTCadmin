import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import axios from "./axios";
import { updateUser } from "./redux/slices/userSlice";
import { AdminRouter } from "./routes";
import AdminPrivateRoute from "./utils/AdminPrivateRoute";


const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get("/auth/my-account", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        dispatch(updateUser(response.data));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [dispatch]);

  return loading ? (
    <div className="">loading</div>
  ) : (
    <Wrapper>
      <Routes>
        <Route
          path="/*"
          element={
            <AdminPrivateRoute>
              <AdminRouter />
            </AdminPrivateRoute>
          }
        />
        </Routes>

    </Wrapper>
  );
}
