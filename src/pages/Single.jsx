import { Link } from "react-router-dom";
import Menu from "../components/Menu";

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
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          eius.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio velit
          unde vitae maxime quibusdam quis beatae, voluptates distinctio nam
          voluptatibus dolorum at numquam, a nulla commodi atque cumque natus
          inventore?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dicta magnam nulla ut delectus amet soluta. Sequi quia suscipit
          molestias, qui quod quam repellendus veniam unde dolorem. Consequuntur
          dolorem ut sed, cumque fugiat magnam quae possimus alias numquam sit
          minima, optio labore natus eum eligendi quod dolores veritatis
          deleniti non. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Vel, voluptas amet. Est ipsum vero fuga laborum harum quasi
          soluta animi consectetur incidunt quod consequatur explicabo ea
          exercitationem non accusamus obcaecati amet tempore ipsa accusantium,
          excepturi ullam voluptate. Aspernatur sapiente facere dolores fugiat!
          Ipsam esse veniam illo, qui accusantium, quidem vel quam animi dolor
          maiores veritatis aspernatur sequi ut velit rerum? Repellat cupiditate
          veniam totam vero id asperiores ipsa eveniet, velit sunt laudantium
          molestiae ducimus cum laboriosam iste pariatur aspernatur harum quia
          obcaecati? Dolorum incidunt illum ut facere temporibus cum ullam
          molestias, accusantium possimus nobis pariatur magni corrupti quisquam
          omnis hic!
        </p>
      </div>
      <Menu></Menu>
    </div>
  );
}

export default Single;
