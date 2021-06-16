import Chart from "../Chart/Chart";
import Feature from "../Infofeachers/Feature";
import "./home.css";
import { userData } from "../../dummyData";
import TableFood from "../TableFood/TableFood";
import Table2 from "../Table2/Table2";
import Food from "../Foods/Foods";
import User from "../Ratings/User";


export default function Home() {
    return (
        <div className="home">
           <Feature />
           <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
           <div className="homeWidgets">
                <TableFood />
                <Table2/>   
           </div>
           <Food />
           <User />
        </div>
    )
}
