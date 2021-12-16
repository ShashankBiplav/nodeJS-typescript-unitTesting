import jwt from "jsonwebtoken";

import {users} from "../models/db";


export const loginUser = (email:string, password:string) => {
  const user = users.filter((user)=> user.email === email && user.password === password);
  if (user.length >0) {
    const token = jwt.sign({id: user[0].id, email: user[0].email }, "TokenSigningKey", {expiresIn: '1 day'});
    return token;
  }
  else{
    return "Not Authorized";
  }
};
