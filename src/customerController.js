const controller = {};


controller.list = (req,res)=>{
    req.getConnection (err,conn) =>{
        conn.query('select * from mascotas');
    }
}





module.exports = controller;