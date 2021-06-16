import React from 'react'
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';
import "./feature.css";
import Typed from "react-typed";

export default function Feature() {
    return (
        <>
         <h1 className="hey1"><Typed
                    className="typed-text"
                    strings={["Hey, Welcome to FOODTECH!!", ]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                  /> </h1>
        <div className="feature">
             <div className="featureItem">
                <span className="featureTitle">Sells Graph</span>
                <div className="featureMoney">
                <span className="Money">$8,451</span>
                <span className="moneyRate">
                    3.2 <ArrowUpward className=" featureIcon " />
                </span>
                </div>
                <span className="featureSub">Compared a last week</span>
            </div> 

            <div className="featureItem">
                <span className="featureTitle">Total Visitors</span>
                <div className="featureMoney">
                <span className="Money">3,973</span>
                <span className="moneyRate">
                   4.5< ArrowDownward className=" featureIcon negative" />
                </span>
                </div>
                <span className="featureSub">Compared a last week</span>
            </div> 

            <div className="featureItem">
                <span className="featureTitle">New Users</span>
                <div className="featureMoney">
                <span className="Money">7,333</span>
                <span className="moneyRate">
                    12.5 <ArrowUpward className=" featureIcon" />
                </span>
                </div>
                <span className="featureSub">Compared a last week</span>
            </div> 

            <div className="featureItem">
                <span className="featureTitle">Total Orders </span>
                <div className="featureMoney">
                <span className="Money">48,973</span>
                <span className="moneyRate">
                   9.5<ArrowUpward className=" featureIcon"/>
                </span>
                </div>
                <span className="featureSub">Compared a last week</span>
            </div> 
        </div>
       </>
    )
}
