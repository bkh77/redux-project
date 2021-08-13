import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { addDegree, delDegree, editDegree } from "../redux/store/degreeReducer";
import DegreeModal from "../components/DegreeModal";

function AcademicDegrees({ degrees, addDegree, delDegree, editDegree }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [currentItem, setCurrentItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const bonus = e.target[1].value;
    if (currentItem) {
      editDegree({
        id: currentItem.id,
        name,
        bonus,
      });
      toggle();
      setCurrentItem("");
    } else {
      if (name && bonus) {
        addDegree({
          id: degrees.length + 1,
          name,
          bonus,
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
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <div className="col-md-8 text-center">
          <h2>Ilmiy darajalar</h2>
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
                <th>Bonus</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {degrees
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.bonus}</td>
                    <td>
                      <EditIcon
                        className="editIcon"
                        onClick={() => handleEdit(item)}
                      />
                      <DeleteForeverIcon
                        className="deleteIcon"
                        onClick={() => delDegree(item.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <DegreeModal
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        currentItem={currentItem}
      />
    </div>
  );
}
export default connect(({ degreeReducer: { degrees } }) => ({ degrees }), {
  addDegree,
  delDegree,
  editDegree,
})(AcademicDegrees);
