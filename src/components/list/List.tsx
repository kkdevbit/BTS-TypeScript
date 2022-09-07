import Details from "../detail/Details";
import { Singer } from "../../App";
import "./list.css";

type ListType = {
  singerList: Singer[];
  selectedSinger: Singer;
  setSelectedSinger: React.Dispatch<React.SetStateAction<Singer>>;
};

const List = ({ singerList, selectedSinger, setSelectedSinger }: ListType) => {
  return (
    <div className="list-container">
      <div className="list">
        <h2>Singers</h2>
        {singerList.map((singer) => {
          return (
            <p
              className="singer-list"
              key={singer.id}
              title="Click to see Details"
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
