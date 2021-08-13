import React, { useState } from "react";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PosModal from "../components/PosModal";
import {
  addPosition,
  delPosition,
  editPosition,
} from "../redux/store/positionsReducer";

function Positions({ positions, addPosition, delPosition, editPosition }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [currentItem, setCurrentItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const salary = e.target[1].value;
    if (currentItem) {
      editPosition({
        id: currentItem.id,
        name,
        salary,
      });
      toggle();
      setCurrentItem("");
    } else {
      if (name && salary) {
        addPosition({
          id: positions.length + 1,
          name,
          salary,
        });
        toggle();
      }
    }
  }

  function handleEdit(item) {
    setCurrentItem(item);
    setModal(true);
  }

  return (
    <div className="card p-3">
      <div className="row">
        <div className="col">
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="form-control" placeholder="Search..." />
        </div>
        <div className="col-md-8 text-center">
          <h2>Lavozimlar</h2>
        </div>
        <div className="col">
          <button onClick={toggle} className="btn btn-outline-secondary w-100">
            + Add
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col my-3">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nomi</th>
                <th>Maosh</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {positions
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.salary}</td>
                    <td>
                      <EditIcon
                        className="editIcon"
                        onClick={() => handleEdit(item)}
                      />
                      <DeleteForeverIcon
                        className="deleteIcon"
                        onClick={() => delPosition(item.id)}
                        
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <PosModal
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        currentItem={currentItem}
      />
    </div>
  );
}
export default connect(
  ({ positionsReducer:{positions} }) => ({ positions }),
  {
    addPosition,
    delPosition,
    editPosition,
  }
)(Positions);
