import "./sidebar.css";
import {
    Dashboard, RestaurantMenu, ShoppingCart, List, Receipt
} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><Dashboard />Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem ">
              FOODTECH
            </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><RestaurantMenu />Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                Menu Catalogue
              </li>
            </Link>
            <Link to="/dashboard" className="link">
              <li className="sidebarListItem">
                Menu List
              </li>
            </Link>
            <Link to="/menu" className="link">
            <li className="sidebarListItem">
              Menu Grid
            </li>
            </Link>
            <Link to="/menu" className="link">
            <li className="sidebarListItem">
              Product Detail
            </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><ShoppingCart />Orders</h3>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><List />Resturants List</h3>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><Receipt />Invoice</h3>
          <ul className="sidebarList">
            <Link to="/nopage" className="link">
              <li className="sidebarListItem">
                Invoice Detail
              </li>
            </Link>
            <Link to="/nopage" className="link">
              <li className="sidebarListItem">
                Invoice List
              </li>
            </Link>
        </ul>
       </div> 

      </div>
    </div>

  );
}