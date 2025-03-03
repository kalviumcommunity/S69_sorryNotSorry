const data = [];

const create = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const user = {name,email,password};
        data.push(user);
        res.status(201).json(user);
    }catch(err){
        res.status(500).json("Internal server error");
    }
    
}

const read = async(req,res)=>{
    try{
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json("Internal server error");
        }
}


const update = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const user = data.find((item)=>item.email === email);
        if(user){
            user.name = name;
            user.email = email;
            user.password = password;
            res.status(200).json(user);
            }
            else{
                res.status(404).json("User not found");
                }
    }
    catch(err){
        res.status(500).json("Internal server error");
        }
 }



 const Delete  = async(req,res)=>{

    try{
        const {name,email,password} = req.body;
        const user = data.find((item)=>item.email === email);
        if(user){
            const index = data.indexOf(user);
            data.splice(index,1);
            res.status(200).json("User deleted");
            }
            else{
                res.status(404).json("User not found");
                }
                }
                catch(err){
                    res.status(500).json("Internal server error");
                    }
}


module.exports = {create,read,update,Delete};


