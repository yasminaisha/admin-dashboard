import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type} </button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jamie Sully</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$123.00</td>
          <td className="widgetLgStatus"><Button type="Approved"></Button></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jamie Sully</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$123.00</td>
          <td className="widgetLgStatus"><Button type="Declined"></Button></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jamie Sully</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$123.00</td>
          <td className="widgetLgStatus"><Button type="Pending"></Button></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jamie Sully</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$123.00</td>
          <td className="widgetLgStatus"><Button type="Approved"></Button></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jamie Sully</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$123.00</td>
          <td className="widgetLgStatus"><Button type="Approved"></Button></td>
        </tr>
      </table>
    </div>
  )
}
