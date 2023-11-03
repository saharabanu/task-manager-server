const Task = require('./task.model');

const createTask = async (payload) => {
  const result = await Task.create(payload);
  return result;
};

const TaskServices = {
  createTask
};


module.exports = TaskServices;
