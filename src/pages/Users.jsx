import { useNavigate } from "react-router-dom";
import { users } from "../Data/userData";
import "./userspage.css";

const Users = () => {
    let navigate = useNavigate();
    function handler(id) {
        navigate(`/user/${id}`);
    }
    return (
        <div className="users-container">
            <h1 className="users-heading">Users List</h1>

            <div className="users-grid">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="user-card"
                        onClick={() => handler(user.id)}
                    >
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>

                        <span
                            className={
                                user.isActive
                                    ? "status active"
                                    : "status inactive"
                            }
                        >
                            {user.isActive ? "Active" : "Inactive"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
