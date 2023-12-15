

var myfavorites = []

const postFav= function(req,res){
    const personaje = req.body
    myfavorites.push(personaje)
    return res.json(myfavorites)
}

const deleteFav= function(req,res){
    const {id} = req.params
    let personajefiltrado= myfavorites.filter((personajeid) => personajeid.id!== id)
    myfavorites = personajefiltrado
    return res.json({favoritos : myfavorites})
}

module.exports = {postFav, deleteFav}
