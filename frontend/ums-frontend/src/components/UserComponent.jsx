import React, {useEffect, useState} from "react";
import { createUser, getUser, updateUser } from "../services/UserService";
import { useNavigate, useParams } from "react-router-dom";
const UserComponent = () =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigator = useNavigate();
    
    const handleName = (e) => setName(e.target.value);

    const handleEmail= (e) => setEmail(e.target.value);

    const {id} = useParams();

    useEffect(() => {
        if(id){
            getUser(id).then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    },[id]);

    function saveOrUpdateUser(e){
        e.preventDefault();
        const user = { name, email };
        console.log(user);
        if(id){
            updateUser(id,user).then((response) => {
                console.log(response.data);
                navigator('/users');
            }).catch(error => {
                alert("Error updating user");
                console.error(error);
            })
        } else {
            createUser(user).then((response) => {
                console.log(response.data);
                alert("User saved successfully");
                navigator('/users')
            })
            .catch(error => {
                alert("Error saving user");
                console.error(error);
            });
        }
    }
    
    function pageTitle(){
        return (
            <h2 className="text-center">
                {id ? "Update user" : "Add user"}
            </h2>
        )
    }
    function goBack() {
        navigator('/users');
    }
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header">
                        {
                            pageTitle()
                        }
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveOrUpdateUser}>
                                <div className="mb-3">
                                    <label className="form-label">Name:</label>
                                    <input type="text" placeholder="Enter Name" name="name" value={name} className="form-control" onChange={handleName} required>
                                    </input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input type="email" placeholder="Enter Email" name="email" value={email} className="form-control" onChange={handleEmail} required>
                                    </input>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-secondary" type="button" onClick={goBack}>
                                        Cancel
                                    </button>
                                    <button className="btn btn-success" type="submit">{id ? "Update" : "Save"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserComponent