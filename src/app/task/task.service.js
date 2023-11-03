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

const TaskServices = {
  createTask,
  getAllTasks
};


module.exports = TaskServices;
