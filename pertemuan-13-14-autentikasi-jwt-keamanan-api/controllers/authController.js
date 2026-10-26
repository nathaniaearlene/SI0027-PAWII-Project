// Mini Project - Pertemuan 13-14: Register & Login
// TODO 1: lengkapi kedua fungsi di bawah ini.

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  // TODO: ambil username & password dari req.body
  const { username, password } = req.body;
  // TODO: hash password dengan bcrypt.hash(password, 10)
  const hashed = await bcrypt.hash(password, 10);
  // TODO: simpan user baru dengan User.create({ username, password: hashed })
  const user = await User.create({ username, password: hashed });
  // TODO: kirim res.status(201).json({ id: user._id, username: user.username })
  res.status(201).json({
    message: "Register berhasil",
    user: {
      id: user._id,
      username: user.username,
    },
   });
  // (JANGAN pernah mengirim balik password, meski sudah di-hash)
}; 

exports.login = async (req, res) => {
  // TODO: ambil username & password dari req.body
  const { username, password } = req.body;
  // TODO: cari user dengan User.findOne({ username })
  const user = await User.findOne({ username });
  //   jika tidak ada -> throw { status: 401, message: 'Username/password salah' }
  if (!user) {
    throw { status: 404, message: "Username Anda salah" };
  }
  // TODO: bandingkan password dengan bcrypt.compare(password, user.password)
  const isPass = await bcrypt.compare(password, user.password);
  //   jika tidak cocok -> throw { status: 401, message: 'Username/password salah' }
  if (!isPass) {
    throw { status: 401, message: "Password Anda salah" };
  }
  // TODO: buat token dengan jwt.sign({ id: user._id, username: user.username },
  //   process.env.JWT_SECRET, { expiresIn: '1h' })
  const token = jwt.sign(
    { id: user._id, 
      username: user.username 
    },
    
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  // TODO: kirim res.json({ token })
  res.json({token});
};
