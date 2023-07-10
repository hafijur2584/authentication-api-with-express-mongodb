const bcrypt = require('bcryptjs');


exports.createHash = (plainPassword) => bcrypt.hashSync(plainPassword, 10);

exports.compareHash = (plainPassword, hashedPassword) => bcrypt.compareSync(plainPassword, hashedPassword);