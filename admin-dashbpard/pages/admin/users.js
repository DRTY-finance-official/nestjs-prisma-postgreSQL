import { userEffect, userState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { error } from 'console';

const UserManagement = () => {
    const [users, setUsers] = userState([]);
    

    userEffect(() => {
        axios.get('api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);
    
    // Fetch and display users here

    return (
        <Layout>
            <h1 className="text-2xl font-bold">User Management</h1>
            {/* User management code here */}
        </Layout>
    );
};

export default UserManagement;