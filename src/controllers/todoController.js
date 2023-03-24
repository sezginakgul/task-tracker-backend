const todo = require("../models/todoModel");

const addTodo = async (req, res) => {
  console.log(req.body);
  try {
    const addTodo = todo(req.body);

    await addTodo
      .save()
      .then(() => {
        return res.status(201).json(addTodo);
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          message: "Kayıt oluştulurken hata oluştu... " + err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Kayıt oluşturulamadı... " + err,
    });
  }
};

module.exports = {
  addTodo,
};
