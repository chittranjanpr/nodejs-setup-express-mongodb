// const models = require('../models');
// const passwordUtil = require('../utils/PasswordUtil');
// const jwt = require('../services/jwt');

class UserController {

    constructor(){

    }

    async create(username, password, role, ){

        // return new Promise(async (resolve,reject)=>{

        //     try{
        //     let hashed_pwd = '';

        //     await passwordUtil.getHash(password)
        //         .then(hash=>{hashed_pwd=hash});

        //    const user = await models.User.create({
        //         username: username,
        //         password: hashed_pwd,
        //         role:role
        //     });




        //     const jwt_payload = {
        //         id:user.id,
        //         username:user.username,
        //         role:user.role
        //     };

        //     const token = await jwt.sign(jwt_payload,'30d');

        //     resolve(token);
        //     }catch (e) {
        //         reject(e);

        //     }
        // });

    }

    async login(username, password){

        return new Promise(async (resolve, reject)=>{
            try{
                console.log("202",username)
        //         await models.User.findOne({where:{username:username}})
        //                          .then(async user=>{
        //                              if(user !== null){
        //                                  const login_valid = await passwordUtil.compare(password, user.password);

        //                                  if(login_valid){
        //                                      const payload = {
        //                                          id: user.id,
        //                                          username:username,
        //                                          role:user.role
        //                                      };
        //                                      const token = await jwt.sign(payload,'10d');

        //                                      resolve({status: 200, message:'authorized', token: token});
        //                                  }else{
        //                                      resolve({status:401, message:'Invalid username or password, Please try again.'});
        //                                  }
        //                              }
        //                          })
        //                         .catch(err=>{
        //                            global.log.error(err);
        //                            reject(err);
        //                         });
            }catch (e) {
                reject(e);
            }
        });
    }
}

module.exports =  new UserController();