const {User} = require("../db")
const {Sequelize} = require('sequelize');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


exports.getLogin = async (req,res)=>{
    const { name, username, password}= req.body
    console.log(req.body, "prueba")
    try{
    const user = await User.findOne({where:{username}})
    if (!user) {
        return res.status(400).json({
          msg: "Username and Password not Found ",
        });
      }
      //verificar la contraseña de
      const validPassword = bcrypt.compareSync(password, user.password);
  
      if (!validPassword) {
        return res.status(400).json({
          msg: "Username and Password not Found - Password",
        });
      }
      //generar el JWT
    //   const token = await generateJWT(user.id);
    const token = await
     jwt.sign({id:user.id},process.env.SECRETKEY,
     {
        expiresIn: "24h",
      }
     )
      console.log(token,"tokeeeeeeen")
      res.json({
        msg: "POST login",
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "contact the administrator",
      });
    }
  
    
}
