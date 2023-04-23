import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDdkMmNkMmJhODZlOTFiY2QzY2JhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODI4MjYwNywiZXhwIjoxNjc4NzE0NjA3fQ.B-KETWfzHGYngP93-ksjdcQS6CXmPBm3jaTGsAGzY5o" }, });
        setNewUsers(res.data)

      } catch (error) {
        console.log(error);
      }

    };
    getNewUsers()
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"}
              
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display  
            </button>
          </li> 
        ))}
      </ul>
    </div>
  );
}