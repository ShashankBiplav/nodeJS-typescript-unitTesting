import { RequestHandler } from "express";
import { getUser } from "../services/getuser.service";
import { loginUser } from "../services/login.service";

export const getUsersController: RequestHandler = (req, res, next) => {
  try {
    const { id }: { id: number } = req.body;
    const data = getUser(id);
    res.status(200).json({ msg: "Welcome to homepage", data });
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler = (req, res, next) => {
  try {
    const {email, password}: {email:string, password:string} = req.body;
    const data: string = loginUser(email, password);
    if (data === "Not Authorized") {
      return res.status(403).json({
        msg: "Wrong email or password"
      });
    }
    res.status(200).json({
      msg: "login Successful!",
      token : data
    });
  } catch (error) {
    next(error);
  }
};

export const protectedController: RequestHandler = (req, res, next) => {
  res.status(200).json({msg:"Bingo you have reached the protected endpoint",
   id:req.headers.userId, 
   email:req.headers.email
  });
};


