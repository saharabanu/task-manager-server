const httpStatus = require("http-status");
const catchAsync = require("../../shared/catchAsync");
const sendResponse = require("../../shared/sendResponse");
const TaskServices = require("./task.service");

// create a task
const createTask = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await TaskServices.createTask(data);
  // console.log(result)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Task created successfully!",
    data: result,
  });
});

// get all tasks

const getAllTasks = catchAsync(async (req, res) => {
  const result = await TaskServices.getAllTasks();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All tasks retrieved successfully!",
    data: result,
  });
});

// get single task

const getSingleTask = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await TaskServices.getSingleTask(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single task retrieved successfully!",
    data: result,
  });
});

// delete task

const deleteTask = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await TaskServices.deleteTask(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Task deleted successfully!",
    data: result,
  });
});

const TaskControllers = {
  createTask,
  getAllTasks,
  getSingleTask,
  deleteTask,
};
module.exports = TaskControllers;
