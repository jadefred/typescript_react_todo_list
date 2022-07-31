import React, { FC } from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask: FC<Props> = ({ task, completeTask }) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>
          {task.deadline}
          {task.deadline > 1 ? ` days` : ` day`}
        </span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
