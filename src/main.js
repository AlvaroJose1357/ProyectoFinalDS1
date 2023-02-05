const express = require('express');
const app = express();

//settings 
app.set('port', process.env.PORT || 3000)


//levantamos el servidor 
app.listen(3000, ()=>{
    console.log('server on port 3000')
})



