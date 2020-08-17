module.exports = function(app){
    app.get("/fuck", function(req,res){  
        res.write("Fuck you too buddy!")
        res.end();
    });

 
    app.get("/test",function(req,res){  
        res.sendFile(__dirname + "/www/test.html")
    });

    //AUTHENTICATION route responds to an aJax post
    app.post('/api/login',function(req,res){
    let users = [{"email":"abc@me.com","password":"123"},{"email":"molly@me.com","password":"333"},{"email":"sam@me.com","password":"222"}]
    
    if (!req.body) {
        return res.sendStatus(400);
        console.log("Bad Page"); 
    }
        var accountholder = {}
        accountholder.email = req.body.email;
        accountholder.password = req.body.password;
        accountholder.valid = false;
        console.log("Acc false"); //show me loop results on server
//loop thru accounts
    for (let i = 0;i<users.length;i++) {
        if (req.body.email == users[i].email && req.body.password == users[i].password){
            accountholder.valid = true;
            console.log("Acc True"); //show me loop results on server
        }
    }
//respond by sending back account holder variable with its true or false state
    res.send(accountholder)            
})


}
