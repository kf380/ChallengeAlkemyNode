const {Movie} = require("../db")
const {Sequelize} = require('sequelize');
const { Op } = require("sequelize");

exports.getMovies = async (req,res) =>{
    const movies = await Movie.findAll();
    res.json(movies)
}

exports.createMovie = async (req,res) =>{
        const {title, image,date, rating} = req.body
        console.log(req.body, "andaa")
        const createMovie = await Movie.create({
            title,
            image,
            date,
            rating,
            character_id
        });
        return res.status(200).send(createMovie)
    }
exports.getQueryMovie= async (req,res) =>{
    const movies = await Movie.findAll({
		attributes: { exclude: ['id', 'rating'] },
	});
        let {title} = req.query;
        let {genre} = req.query;
        let {order} = req.query;
    
        if(title) {
            try{
                return res.status(200).json(
                    await Movie.findAll({
                        where: {title: {[Op.iLike] : `%${title}%` }},
    
                      
                    }) 
                )
            } catch(error) {
                console.log(error)
                res.status(404).send('Error by name')
            }
        }
        if(genre) {
            try{
                return res.status(200).json(
                    await Character.findAll({
                        where: {genre:genre }
    
                      
                    }) 
                )
            } catch(error) {
                console.log(error)
                res.status(404).send('Error by id')
            }
        }
        if(order&&order === 'ASC') {
            const orderMovies = movies.sort((a, b) => a.release_year - b.release_year);
            orderMovies.map((mov) => delete mov['genre_id']);
		    return res.status(200).json({ orderMovies });
        }else if(order&&order==='DESC'){
            const orderMovies = movies.sort((a, b) => b.release_year - a.release_year);
		    orderMovies.map((mov) => delete mov.dataValues['genre_id']);
		    return res.status(200).json({ orderMovies });
        }
           
          
       
        
    }


exports.updateMovie = async (req,res) =>{
    await Movie.update(req.body, {
        where: { id: req.params.id}
    });
    res.json({success: ' se ha modifficado'})
}

exports.deleteMovie = async (req,res) =>{
    const {id} = req.params;
    const movie = await Movie.destroy({where:{id}})
    res.json({
        msg: 'DELETE Movie API',
        movie
    })
}
