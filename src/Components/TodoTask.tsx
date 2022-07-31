import React, { FC } from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
}

const TodoTask: FC<Props> = ({ task }) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default TodoTask;
