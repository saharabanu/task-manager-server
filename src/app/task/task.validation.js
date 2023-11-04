const z = require("zod");
// create task validation schema
const createTaskValidationSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "description is required",
  }),
  viewDate: z.date().optional(),
  status: z.enum(["inCompleted", "completed"]),
  image: z.string().optional(),
  priority: z.enum(["high", "low", "medium"]),
});

// update task validation schema

const updateTaskValidationSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  viewDate: z.date().optional(),
  status: z.enum(["inCompleted", "completed"]).optional(),
  image: z.string().optional(),
  priority: z.enum(["high", "low", "medium"]).optional(),
});

const TaskValidations = {
  createTaskValidationSchema,
  updateTaskValidationSchema
};
module.exports = TaskValidations;
