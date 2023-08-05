
const express = require('express');
const app = express();
const port = 8000;
const SinhVienModel = require('./SinhVienModel');

const mongoose = require('mongoose');
const uri = 'mongodb+srv://quyenvv:quyenvv123@cluster0.ouxba2p.mongodb.net/MongoDemo';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
mongoose.connect(uri,options)

//const uri = 'mongodb+srv://quyenvv:quyenvv123@cluster0.ouxba2p.mongodb.net/MongoDemo?retryWrites=true&w=majority'
// app.use(express.json());
// app.use(userRouter);
//Danh Sach
app.get('/', async (req, res) => {

  await mongoose.connect(uri);

  console.log('Ket noi db thanh cong!')

  let students = await SinhVienModel.find();
  res.send(students);

})

//Them
app.get('/add_sv', async (req, res) => {
  await mongoose.connect(uri);

  arrNewNv = [];

  let sv1 = {
    name: 'Tran Phuong Anh',
    age: 24,
    country: 'HP',
    point: 8
  };

  arrNewNv.push(sv1);

  arrNewNv.push({
    name: 'Nguyen Tuan Minh',
    age: 25,
    country: 'HG',
    point: 6
  });

  let kq = await SinhVienModel.collection.insertOne(sv1);

  console.log(kq);

  let students = await SinhVienModel.find();
  res.send(students);
})
//Sửa
app.get('/update_sv/:name', async (req, res) => {

  await mongoose.connect(uri);

  console.log('Ket noi DB thanh cong');

  let tenSV = req.params.name;
  console.log(tenSV);

  let tenSVMoi = tenSV + ' 123';

  await SinhVienModel.updateOne({ name: tenSV }, { name: tenSVMoi, age: 18, country: "HCM" });

  let students = await SinhVienModel.find({});

  res.send(students);

})
//Xoa
app.get('/xoa/:id', async (req, res) => {

  await mongoose.connect(uri);

  console.log('Ket noi DB thanh cong');

  let id = req.params.id;
  console.log(id);

  await SinhVienModel.deleteOne({ _id: id });

  res.redirect('../')

})

app.listen(port, () => {
  console.log('connect sucessfully port:8000');
})
