const { create } = require("domain");
const {Character, Movie} = require ("../db");
const {Sequelize} = require('sequelize');
const { nextTick } = require("process");
const { Op } = require("sequelize");
const { NONAME } = require("dns");

exports.getCharacters = async (req,res) =>{
    const character = await Character.findAll();
    res.json(character)
}
exports.getCharactersByNameImage = async (req,res) =>{
    const character = await Character.findAll({
        attributes:[
            'name','image'
        ]
    });
    res.json(character)
}

exports.createCharacter = async (req,res) =>{
    const {name,image,age, weight,history} = req.body
    const createCharacter = await Character.create({
        name,
        image,
        age,
        weight,
        history
    });
    return res.status(200).send(createCharacter)
}


exports.updateCharacter = async (req,res) =>{
    await Character.update(req.body, {
        where: { id: req.params.id}
    });
    res.json({success: ' se ha modifficado'})
}
exports.deleteCharacter= async (req,res) =>{
    const {id} = req.params;
    const character = await Character.destroy({where:{id}})
    
    res.json({
        msg: 'DELETE character API',
        character
    })
}
exports.getQueryCharacters= async (req,res) =>{
    
    let {name} = req.query;
    let {id} = req.query;
    let {age} = req.query;

    if(name) {
        try{
            return res.status(200).json(
                await Character.findAll({
                    where: {name: {[Op.iLike] : `%${name}%` }},

                  
                }) 
            )
        } catch(error) {
            console.log(error)
            res.status(404).send('Error by name')
        }
    }
    if(id) {
        try{
            return res.status(200).json(
                await Character.findAll({
                    where: {id:id }

                  
                }) 
            )
        } catch(error) {
            console.log(error)
            res.status(404).send('Error by id')
        }
    }
    if(age) {
        try{
            return res.status(200).json(
                await Character.findAll({
                    where: {age:age}

                  
                }) 
            )
        } catch(error) {
            console.log(error)
            res.status(404).send('Error by age')
        }
   
    }
}
exports.getCharactersByIdMovie= async (req,res) =>{
    const {id} = req.params;
    const character = await Character.findOne({

        where: { id },
    })
    res.json({
        msg: 'Encontrado character por ID en API',
        character
    })
}
exports.getCharactersByAge = async (req,res) =>{
    const {age} = req.params;
    const gamer_age = await Character.findOne({
            where:{age:age},
        })
        res.json({
            msg: 'Encontrado character por age API',
            gamer_age
        })
}
