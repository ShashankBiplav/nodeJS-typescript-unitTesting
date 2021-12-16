import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { IncomingHttpHeaders } from 'http';

declare module 'http' {
    interface IncomingHttpHeaders {
        "userId"?: string,
        "email"?: string
    }
}

import { users } from "../models/db";

export const isUser:RequestHandler = async (req ,res, next) => {
  const authHeader = req.get('Authorization');
  try {
    if (!authHeader) {
      const err= new Error("Not authorized");
      return next(err);
    }
    const token = authHeader.split(' ')[1];
    let decodedToken:any;
    decodedToken = jwt.verify(token, "TokenSigningKey");
    if (!decodedToken) {
      const error = new Error('Not Authorized');
      next(error);
    }
    const user = users.filter((user)=> user.email === decodedToken.email && user.id === decodedToken.id);
     if (!user) {
      const error = new Error('User Firm not found');
      next(error);
    }
    req.headers.userId = decodedToken.id;
    req.headers.email = decodedToken.email;
    next();
  } catch (error) {
    next(error);
  }
};