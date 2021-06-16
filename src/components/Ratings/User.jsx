import React from 'react';
import "./user.css";

export default function User() {
  
 return(
    <div className="useContainer">
        <h3 className="userTitle">TOP 5 CUSTOMERS</h3>
       <div className="userF">
        <div className="user-card">
                <div className="user-card-inner">
                <div className="user-card-front">
                    <img className= "rate" src="http://slidesigma.nyc/templatemonster/react/foodtech/static/media/customer-1.41c0170d.jpg" alt="Avatar" />
                </div>
                <div className="user-card-back">
                    <h1>John Doe</h1>
                    <p>FoodTech Best Customer</p>
                    <p>We love that guy</p>
                </div>
            </div>
         </div>
         <div className="user-card">
                <div className="user-card-inner">
                <div className="user-card-front">
                    <img className= "rate" src="http://slidesigma.nyc/templatemonster/react/foodtech/static/media/customer-2.e9b6e859.jpg" alt="Avatar" />
                </div>
                <div className="user-card-back">
                    <h1>Joel Fernando</h1>
                    <p>FoodTech Best Customer</p>
                    <p>We love that guy</p>
                </div>
            </div>
         </div>
         <div className="user-card">
                <div className="user-card-inner">
                <div className="user-card-front">
                    <img className= "rate" src="http://slidesigma.nyc/templatemonster/react/foodtech/assets/img/foodtech/customer-4.jpg" alt="Avatar" />
                </div>
                <div className="user-card-back">
                    <h1>Maria Sharapowa</h1>
                    <p>FoodTech Best Customer</p>
                    <p>We love that guy</p>
                </div>
            </div>
         </div>

         <div className="user-card">
                <div className="user-card-inner">
                <div className="user-card-front">
                    <img className= "rate" src="http://slidesigma.nyc/templatemonster/react/foodtech/static/media/customer-6.9b3f0c44.jpg" alt="Avatar" />
                </div>
                <div className="user-card-back">
                    <h1>Angelica Hale</h1>
                    <p>FoodTech Best Customer</p>
                    <p>We love that guy</p>
                </div>
            </div>
         </div>

         <div className="user-card">
                <div className="user-card-inner">
                <div className="user-card-front">
                    <img className= "rate" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Avatar" />
                </div>
                <div className="user-card-back">
                    <h1>Christina Newada</h1>
                    <p>FoodTech Best Customer</p>
                    <p>We love that guy</p>
                </div>
            </div>
         </div>
         </div>
        </div>
  
  
    );    
}
