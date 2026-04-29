import "./user.css";
import { useParams } from "react-router-dom";
import { users } from "../Data/userData";

const User = () => {
    let { id } = useParams();
    console.log(id);
    const [user] = users.filter((u) => u.id === Number(id));
    console.log(user);
    return (
        <div className="user-details-container">
            <div className="user-card">

                <h2>{user.name}</h2>
                <p className="email">{user.email}</p>

                <div className="info">
                    <p>
                        <strong>Age:</strong> {user.age}
                    </p>
                    <p>
                        <strong>Role:</strong> {user.role}
                    </p>
                </div>

                <span
                    className={
                        user.isActive ? "status active" : "status inactive"
                    }
                >
                    {user.isActive ? "Active" : "Inactive"}
                </span>
            </div>
        </div>
    );
};

export default User;
