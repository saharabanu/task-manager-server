const z = require('zod');

const createTaskValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  viewDate: z.date().optional(),
  status: z.enum(["all", "inCompleted", "completed"]),
  image: z.string().optional(), 
  priority: z.enum(["high", "low", "medium"]),
});



 const TaskValidations = {
  createTaskValidationSchema
};
module.exports = TaskValidations;
