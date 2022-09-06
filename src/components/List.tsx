import Details from "./Details";
import { Singer } from "../App";

type ListType = {
  singerList: Singer[];
  selectedSinger: Singer;
  setSelectedSinger: React.Dispatch<React.SetStateAction<Singer>>;
};

const List = ({ singerList, selectedSinger, setSelectedSinger }: ListType) => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: "20px 0",
          margin: "auto",
          marginTop: "20px",
          width: "20%",
          borderRadius: "10px",
          backgroundColor: "#96E5D1",
          alignItems: "center",
        }}
      >
        {singerList.map((singer) => {
          return (
            <p
              title="Click to see Details"
              style={{
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "20%",
                textAlignLast: "left",
              }}
              onClick={() => setSelectedSinger(singer)}
            >
              {singer.name}
            </p>
          );
        })}
      </div>

      <br />
      <hr />
      <div>
        <Details selectedSinger={selectedSinger} />
      </div>
    </div>
  );
};
export default List;
