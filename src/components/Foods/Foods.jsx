import React from 'react'
import "./food.css";


export default function Food() {
    return (
        <>
        <h3 className="fTitle">TRENDING ORDERS</h3>
        <div className="food">
             <div className="foodItem">
                <div className="show">
                        <img className ="img1" src="http://slidesigma.nyc/templatemonster/react/foodtech/static/media/food-5.c53dd95c.jpg" alt="img1" />
                </div>
                <div className="foodMoney">
                <span className="foodName">Meat Stew</span>
                <span className="moneyRate">$25.00</span>
                </div>
                <span className="foodSub">Orders 15</span>
                <span className="foodSub1">Income $175</span>
            </div> 

            <div className="foodItem">
            <div className="show">
                        <img className ="img1" src="http://slidesigma.nyc/templatemonster/react/foodtech/static/media/food-2.e470ce78.jpg" alt="img2" />
                </div>
                <div className="foodMoney">
                <span className="foodName">Pancake</span>
                <span className="moneyRate"> $50.00</span>
                </div>
                <span className="foodSub">Orders 75</span>
                <span className="foodSub1">Income $275</span>
            </div> 

            <div className="foodItem">
            <div className="show">
                        <img className ="img1" src="http://slidesigma.nyc/templatemonster/react/foodtech/static/media/food-4.c872fffa.jpg" alt="img3" />
                </div>
                <div className="foodMoney">
                <span className="foodName">Burger</span>
                <span className="moneyRate"> $45.00</span>
                </div>
                <span className="foodSub">Orders 115</span>
                <span className="foodSub1">Income $575</span>
            </div> 

            <div className="foodItem">
            <div className="show">
                        <img className ="img1" src="http://slidesigma.nyc/templatemonster/react/foodtech/static/media/food-3.50d620d7.jpg" alt="img4" />
                </div>
                <div className="foodMoney">
                <span className="foodName">Saled</span>
                <span className="moneyRate">$85.00</span>
                </div>
                <span className="foodSub">Orders 65</span>
                <span className="foodSub1">Income $775</span>
            </div> 
        </div>
        </>
    )
}
