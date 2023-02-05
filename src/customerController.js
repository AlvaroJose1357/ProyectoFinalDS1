const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM mascota', (err, mascota)=>{
            if(err){
                res.json(err);
            }
            console.log(mascota);
            res.render('mascota', {
                data: mascota
            });
        });
    });
}

controller.save = (req, res)=>{
    

}



module.exports = controller;