const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.listen(PORT,() => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
app.post('/login',(req,res) =>{
    const {username,password} = req.body;

    const validUsername = 'admin';
    const validPassword = '12345';
    
    if(username===validUsername && password === validPassword){
        res.json({success: true});
    } else {
        res.json({success:false})
    }
})

