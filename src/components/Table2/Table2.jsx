import "./table2.css";

export default function Table2() {
  const Button = ({ type }) => {
    return <button className={"table2Button " + type}>{type}</button>;
  };

  return (
    <div className="table2">
      <h1 className="table2Title">Latest Transactions</h1>
      <hr />
      <table className="table2Table">
        <tr className="table2Tr">
          <th className="table2Th">Customer</th>
          <th className="table2Th">Date</th>
          <th className="table2Th">Amount</th>
          <th className="table2Th">Status</th>
        </tr>
        <tr className="table2Tr">
          <td className="table2User">
            <img
              src="https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo="
              alt="person1"
              className="table2Img"
            />
            <span className="table2Name">Susan Carol</span>
          </td>
          <td className="table2Date">2 Jun 2021</td>
          <td className="table2Amount">$122.00</td>
          <td className="table2Status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="table2Tr">
          <td className="table2User">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="person2"
              className="table2Img"
            />
            <span className="table2Name">Samuel Martina</span>
          </td>
          <td className="table2Date">2 Jun 2021</td>
          <td className="table2Amount">$122.00</td>
          <td className="table2Status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="table2Tr">
          <td className="table2User">
            <img
              src="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI="
              alt="person3"
              className="table2Img"
            />
            <span className="table2Name">Jeewan Tondaman</span>
          </td>
          <td className="table2Date">2 Jun 2021</td>
          <td className="table2Amount">$122.00</td>
          <td className="table2Status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="table2Tr">
          <td className="table2User">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFe7lOT_M-IQ1nxs7j6Y4elCXjgAKakCwts_jT38ktyl3gACvpw0Umh4-wMT-VHQ-lgk&usqp=CAU"
              alt="person4"
              className="table2Img"
            />
            <span className="table2Name">Jessica Monica</span>
          </td>
          <td className="table2Date">2 Jun 2021</td>
          <td className="table2Amount">$122.00</td>
          <td className="table2Status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}