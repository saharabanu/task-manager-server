const httpStatus = require( 'http-status');
const catchAsync = require('../../shared/catchAsync');
const sendResponse =  require('../../shared/sendResponse');
const TaskServices = require ('./task.service');






const createTask = catchAsync(
  async (req, res) => {
    const data = req.body;

    const result = await TaskServices.createTask(data);
    // console.log(result)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Task created successfully!',
      data: result,
    });
  }
);



 const TaskControllers = {
  createTask
};
module.exports = TaskControllers;
