import "./tableFood.css";
import { Visibility } from "@material-ui/icons";

export default function TableFood() {
  return (
    <div className="tableFood">
      <span className="tableFoodTitle">RECENT ORDERS REQUESTED</span>
      <hr />
      <ul className="tableFoodList">

      <li className="tableFoodListItem">
          <img
            src="http://slidesigma.nyc/templatemonster/react/foodtech/assets/img/foodtech/cereals.jpg"
            alt="cereals"
            className="tableFoodImg"
          />
          <div className="tableFoodUser">
            <span className="tableFoodUsername">Multigrain Hot Cereal</span>
            <span className="tableFoodUserTitle">$25.22</span>
          </div>
          <button className="tableFoodButton">
            <Visibility className="tableFoodIcon" />
          View All
          </button>
        </li>

 
        <li className="tableFoodListItem">
          <img
            src="http://slidesigma.nyc/templatemonster/react/foodtech/assets/img/foodtech/egg-sandwich.jpg"
            alt="eggSalad"
            className="tableFoodImg"
          />
          <div className="tableFoodUser">
            <span className="tableFoodUsername">Fried Egg Sandwich</span>
            <span className="tableFoodUserTitle">$11.23</span>
          </div>
          <button className="tableFoodButton">
            <Visibility className="tableFoodIcon" />
          View All
          </button> 
        </li>


        <li className="tableFoodListItem">
          <img
            src="http://slidesigma.nyc/templatemonster/react/foodtech/assets/img/foodtech/french-fries.jpg"
            alt="fries"
            className="tableFoodImg"
          />
          <div className="tableFoodUser">
            <span className="tableFoodUsername">French Fries</span>
            <span className="tableFoodUserTitle">	$14.59</span>
          </div>
          <button className="tableFoodButton">
            <Visibility className="tableFoodIcon" />
          View All
          </button>
        </li>

        
     
        <li className="tableFoodListItem">
          <img
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
            alt="burger"
            className="tableFoodImg"
          />
          <div className="tableFoodUser">
            <span className="tableFoodUsername">Burgers</span>
            <span className="tableFoodUserTitle">$8.23</span>
          </div>
          <button className="tableFoodButton">
            <Visibility className="tableFoodIcon" />
          View All
          </button>
        </li>

        <li className="tableFoodListItem">
          <img
            src="http://slidesigma.nyc/templatemonster/react/foodtech/assets/img/foodtech/pizza.jpg"
            alt="pizza"
            className="tableFoodImg"
          />
          <div className="tableFoodUser">
            <span className="tableFoodUsername">Pizza</span>
            <span className="tableFoodUserTitle">$19.99</span>
          </div>
          <button className="tableFoodButton">
            <Visibility className="tableFoodIcon" />
          View All
          </button>
        </li>


      </ul>
    </div>
  );
}