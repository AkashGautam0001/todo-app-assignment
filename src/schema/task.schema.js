const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			minlength: [3, "title should be greater than 3 character"],
			maxlength: [20, "title should be less than 20 character"],
			required: true,
		},
		description: {
			type: String,
			minlength: [3, "description should be greater than 3 character"],
			maxlength: [200, "description should be less than 200 character"],
			required: true,
		},
		dueDate: {
			type: Date,
			default: Date.now,
		},
		tags: {
			type: [String],
			// maxlength: [20, "tag should be less 20 characters"],
			validate: {
				validator: function (v) {
					return v.every((tag) => tag.length <= 20);
				},
				message: "Each tag should be less than 20 characters",
			},
		},
	},
	{
		timestamps: true,
	}
);

const Task = new mongoose.model("task", taskSchema);

module.exports = Task;
