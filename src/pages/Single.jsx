import { Link } from "react-router-dom";

import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1695839212813-31100a631e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
            alt=""
          />

          <div className="info">
            <span>David</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit?2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
      </div>
      <div className="menu">MENU</div>
    </div>
  );
}

export default Single;
