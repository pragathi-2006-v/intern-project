import Task from "../models/Task.js";

export const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const addTask = async (req, res) => {

  try {

    const { title, freelancer, deadline } = req.body;

    const task = new Task({
      title,
      freelancer,
      deadline
    });

    const savedTask = await task.save();

    res.status(201).json(savedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const updateTask = async (req, res) => {

  try {

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const deleteTask = async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
