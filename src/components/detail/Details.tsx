import { Singer } from "../../App";
import "./detail.css";
type DetailProps = {
  selectedSinger: Singer;
};

const Details = (props: DetailProps) => {
  return (
    <div className="detail">
      <h2>Details of Singer</h2>
      <p>
        Name:
        <span> {props.selectedSinger.name}</span>
      </p>
      <p>
        Band: <span>{props.selectedSinger.band}</span>
      </p>
      <p>
        Born: <span>{props.selectedSinger.born}</span>
      </p>
    </div>
  );
};

export default Details;
