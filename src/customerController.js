const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM mascota', (err, mascota)=>{
            if(err){
                res.json(err);
            }
            console.log(mascota);
            res.render('mascota', {
                datamasc: mascota
            });
        });
    });
}

controller.saveAgenda = (req, res)=>{
    const dataagend=req.body;
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO agendamiento set ? ', [dataagend],(err, agendamiento)=>{
            console.log(agendamiento);
            res.redirect('/')
        });
    });
}

controller.deleteAgenda = (req, res)=>{
    const {nitagenda} = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM agendamiento WHERE nitagenda = ? ', [nitagenda],(err, rows)=>{
            console.log(agendamiento);
            res.redirect('/')
        });
    });
}

controller.editAgenda= (req, res)=>{
    const {nitagenda} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM agendamiento WHERE nitagenda ? ', [nitagenda],(err, agendamiento)=>{
            res.render('agendamiento_edit', {
                dataagend: agendamiento[0]
            });
        });
    });
}

controller.updateAgenda= (req, res)=>{
    const {nitagenda} = req.params;
    const newAgenda =req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE agendamiento set ? WHERE nitagenda ? ', [newAgenda,nitagenda],(err, rows)=>{
            res.redirect('/')
        });
    });
}

module.exports = controller;