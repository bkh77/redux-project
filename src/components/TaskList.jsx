import React from "react";
import { connect } from "react-redux";
import { hadleCheck } from "../redux/actions";

function TaskList({ todos, hadleCheck }) {
  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>
          <input
            id={"check/" + item.id}
            style={{ transform: "scale(1.5)" }}
            type="checkbox"
            checked={item.completed}
            onChange={() => hadleCheck(item.id)}
          />
          <label htmlFor={"check/" + item.id} className="mx-4">
            {item.title}
          </label>
        </div>
      ))}
    </div>
  );
}

export default connect(({ todos }) => ({ todos }), { hadleCheck })(TaskList);
