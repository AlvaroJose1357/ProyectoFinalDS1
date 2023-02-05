const controller = {};

/*
controller.list = (req,res)=>{
    req.getConnection {(err,conn) => {
        conn.query('select * from mascotas', (err, mascotas )=> {
            if(err){
                res.json(err)
            }
            console.log(mascotas);
            res.render('mascotas');
        }
    }
}
*/
controller.list = (req,res)=>{
    req.getConnection
}




module.exports = controller;