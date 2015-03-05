module.exports = function(app){
	var SerieTv = require('./serietv');

	//GET
	findAllSeriesTv = function(req, res){
		SerieTv.find(function(err, seriestv){
			if (!err) {
				res.send(seriestv)
			}else{
				console.log("ERROR: " + err);
			}
		});
	};

	//GET
	findById = function(req, res){

		SerieTv.find({"_id":req.params.id}, function(err, serietv){
			if (!err) {
				res.send(serietv);
			}else{
				console.log("Error: "+ err);
			}
		})
	};

	//POST
	addSerieTv = function(req, res){
		console.log("POST");
		console.log(req.body);

		var serietv = new SerieTv({
			titulo: req.body.titulo,
			temporadas: req.body.temporadas,
			pais: req.body.pais,
			genero: req.body.genero,
		})

		serietv.save(function(err){
			if (!err) {
				console.log("Serie de tv guardada");
				res.send(serietv)
			}else{
				console.log("Error: "+ err);
			}
		});
	}

	//update
	updateSerieTv = function(req, res){
		SerieTv.find({"_id":req.params.id},function(err,serietv){
			serietv.titulo = req.body.titulo;
			serietv.temporadas = req.body.temporadas;
			serietv.pais = req.body.pais;
			serietv.genero = req.body.genero;
			serietv.save(function(err){
				if (!err) {
					console.log("Serie actualizada")
				}else{
					console.log("Error: "+ err);
				}
			});
		})
	}

	//delete
	deleteSerieTv = function(req, res){
		SerieTv.find({"_id":req.params.id},function(err,serietv){
			if (!err) {
					console.log("Serie borrada")
				}else{
					console.log("Error: "+ err);
				}
		})
	}

	//rutas
	app.get("/seriestv",findAllSeriesTv);
	app.get("/seriestv/:id",findById);
	app.post("/seriestv",addSerieTv);
	app.put("/seriestv/:id",updateSerieTv);
	app.delete("/seriestv/:id",deleteSerieTv);
}