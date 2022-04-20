import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css"

export default function Home() {
  return (
    <div className="home">
       <Featuredinfo/>
       <Chart/>
    </div>
  )
}
