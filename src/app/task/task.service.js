const ApiError = require("../../errors/ApiError");
const Task = require("./task.model");
const httpStatus = require("http-status")

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

// update task
const updateTask = async (id, payload) => {
  // console.log(id,payload, 'from service')
  const isExist = await Task.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Task not found");
  }

  const result = await Task.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const TaskServices = {
  createTask,
  getAllTasks,
  getSingleTask,
  deleteTask,
  updateTask,
};

module.exports = TaskServices;
