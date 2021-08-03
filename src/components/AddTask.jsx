import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

function AddTask({ addTask }) {
  const [input, setInput] = useState("");
  return (
    <div className="row">
      <div className="col-md-10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Add task..."
        />
      </div>
      <div className="col-md-2">
        <button
          onClick={() => input && addTask(input)}
          className="btn btn-success w-100"
        >
          + Add
        </button>
      </div>
    </div>
  );
}
export default connect(null, { addTask })(AddTask);
