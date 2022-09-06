import { Singer } from "../App";
type DetailProps = {
  selectedSinger: Singer;
};

const Details = (props: DetailProps) => {
  return (
    <div
      style={{
        backgroundColor: "#FFE9AE",
        margin: "auto",
        width: "20%",
        borderRadius: "10px",
        textAlignLast: "left",
        padding: "20px 0",
      }}
    >
      <h2 style={{ textAlignLast: "center", marginTop: "10px" }}>
        Details of Singer
      </h2>
      <p
        style={{
          fontWeight: "bold",
          marginLeft: "30px",
          transition: "all 2s",
        }}
      >
        Name:
        <span style={{ fontWeight: "normal" }}>
          {" "}
          {props.selectedSinger.name}
        </span>
      </p>
      <p style={{ fontWeight: "bold", marginLeft: "30px" }}>
        Band:{" "}
        <span style={{ fontWeight: "normal" }}>
          {props.selectedSinger.band}
        </span>
      </p>
      <p style={{ fontWeight: "bold", marginLeft: "30px" }}>
        Born:{" "}
        <span style={{ fontWeight: "normal" }}>
          {props.selectedSinger.born}
        </span>
      </p>
    </div>
  );
};

export default Details;
