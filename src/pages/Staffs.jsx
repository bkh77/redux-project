import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import StaffModal from "../components/StaffModal";

import { addStaff, delStaff, editStaff } from "../redux/store/staffReducer";

function Staffs({ staffs, positions, degrees, addStaff, delStaff, editStaff }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [currentItem, setCurrentItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const phone = e.target[2].value;
    const position = parseFloat(e.target[3].value);
    const degree = parseFloat(e.target[4].value);
    if (currentItem) {
      editStaff({
        id: currentItem.id,
        firstName,
        lastName,
        phone,
        position,
        degree,
      });
      toggle();
      setCurrentItem("");
    } else {
      if (firstName && lastName && phone && position && degree) {
        addStaff({
          id: staffs.length + 1,
          firstName,
          lastName,
          phone,
          position,
          degree,
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
    <div className="card lightBlue p-3">
      <div className="row">
        <div className="col">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control radusInput"
            placeholder="Search..."
          />
        </div>
        <div className="col-md-8 text-center">
          <h2>Xodimlar</h2>
        </div>
        <div className="col">
          <button onClick={toggle} className="btn btn-outline-primary w-100">
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
                <th>Ism</th>
                <th>Familiya</th>
                <th>Telefon</th>
                <th>Lavozim</th>
                <th>Ilmiy daraja</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {staffs
                .filter(
                  (item) =>
                    item.firstName
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phone}</td>
                    <td>
                      {positions.find((p) => p.id === item.position).name}
                    </td>
                    <td>{degrees.find((d) => d.id === item.degree).name}</td>
                    <td>
                      <EditIcon
                        className="editIcon"
                        onClick={() => handleEdit(item)}
                      />
                      <DeleteForeverIcon
                        className="deleteIcon"
                        onClick={() => delStaff(item.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <StaffModal
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        currentItem={currentItem}
        positions={positions}
        degrees={degrees}
      />
    </div>
  );
}
export default connect(
  ({
    staffReducer: { staffs },
    positionsReducer: { positions },
    degreeReducer: { degrees },
  }) => ({
    staffs,
    positions,
    degrees,
  }),
  {
    addStaff,
    delStaff,
    editStaff,
  }
)(Staffs);
