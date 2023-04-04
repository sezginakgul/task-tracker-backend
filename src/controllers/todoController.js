const todo = require("../models/todoModel");

const addTodo = async (req, res) => {
  // console.log(req.body);
  try {
    const isSameTodo = await todo.findOne({ task: req.body.task });
    // console.log("isSame", isSameTodo);
    if (isSameTodo) {
      return res.status(400).json({
        success: false,
        message: "Bu isimde kayıt mevcuttur...",
      });
    }

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

const getTodo = async (req, res) => {
  try {
    const allTodo = await todo.find({});
    return res.status(201).json(allTodo);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Kayıt Getirilemedi... " + err,
    });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todoUpdate = await todo.findByIdAndUpdate(id, req.body);

    if (todoUpdate) {
      return res.status(200).json({
        success: true,
        message: "Güncelleme Başarılı...",
      });
    } else
      return res.status(400).json({
        success: false,
        message: "Kayıt Güncellenemedi...",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Kayıt Güncellenemedi!!! " + err,
    });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todoDelete = await todo.findByIdAndDelete(id);

    if (todoDelete) {
      return res.status(200).json({
        success: true,
        message: "Kayıt Başarıyla Silindi...",
      });
    } else
      return res.status(400).json({
        success: false,
        message: "Kayıt Silinemedi!!!",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Kayıt Silinemedi!!! " + err,
    });
  }
};

module.exports = {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
