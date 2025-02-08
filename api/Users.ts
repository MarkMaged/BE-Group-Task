import { UsersResponse } from '@/types/User';
import axios from 'axios';

async function fetchUsers(): Promise<UsersResponse> {
    try {
        const response = await axios.get<UsersResponse>(`http://localhost:1337/user-informations`);
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

async function createUser(data: object) {
    try {
        const response = await axios.post(`http://localhost:1337/user-informations`, data);
        return response;
    } catch (error) {
        console.error('Error create user:', error);
        return error;
    }
}

export{
    fetchUsers,
    createUser
}