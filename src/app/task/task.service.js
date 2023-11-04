const Task = require("./task.model");

// create a task
const createTask = async (payload) => {
  const result = await Task.create(payload);
  return result;
};
// get all tasks

const getAllTasks = async () => {
  const result = await Task.find();

  return result;
};

//  get single task

const getSingleTask = async (id) => {
  const result = await Task.findById(id);

  return result;
};
// delete task

const deleteTask = async (id) => {
  const isExist = await Task.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Task not found");
  }

  const result = await Task.findByIdAndDelete(id);

  return result;
};

const TaskServices = {
  createTask,
  getAllTasks,
  getSingleTask,
  deleteTask,
};

module.exports = TaskServices;
