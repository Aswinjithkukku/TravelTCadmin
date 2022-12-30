import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {
    const { user } = useSelector((state) => state.user);
    if (user?.role === !'super-admin'){
        
        <Navigate replace to='/login' />
    }
    return children
};

export default AdminPrivateRoute;