const {Genre} = require("../db")
const {Sequelize} = require('sequelize');
const { Op } = require("sequelize");

exports.getGenre = async (req,res) =>{
    const genres = await Genre.findAll();
    res.json(genres)
}

exports.createGenre = async (req,res) =>{
        const {name, image} = req.body
        console.log(req.body, "andaa")
        const createGenre = await Genre.create({
            name,
            image
        });
        return res.status(200).send(createGenre)
    }


exports.updateGenre = async (req,res) =>{
    await Genre.update(req.body, {
        where: { id: req.params.id}
    });
    res.json({success: ' se ha modifficado'})
}

exports.deleteGenre = async (req,res) =>{
    const {id} = req.params;
    const genre = await Genre.destroy({where:{id}})
    res.json({
        msg: 'DELETE Genre API',
        genre
    })
}
