import React, {useEffect, useState} from 'react'
import { listUsers,deleteUser } from '../services/UserService'
import { useNavigate } from 'react-router-dom'
const ListUserComponent = () => {

    const [users,setUsers] = useState([])

    const navigator = useNavigate();

    useEffect(()=>{
        getAllUsers();
    },[])

    function getAllUsers(){
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function addNewUser(){
        navigator('/add-user')
    }

    function updateUser(id){
        navigator(`/update-user/${id}`)
    }
    function removeUser(id){
        console.log(id);
        deleteUser(id).then((response) => {
            getAllUsers();
        }).catch(error => {
            console.error(error);
        })
    }
    function goBack() {
        navigator('/users');
    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>List of users</h2>
            <button className="btn btn-primary" onClick={addNewUser}>Add User</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>User id</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className="btn btn-primary mb-3" onClick={() => updateUser(user.id)}>Update</button>
                                    <button className="btn btn-danger mb-3" onClick={() => removeUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListUserComponent
