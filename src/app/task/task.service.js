const Task = require('./task.model');

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


const TaskServices = {
  createTask,
  getAllTasks,
  getSingleTask
};


module.exports = TaskServices;
