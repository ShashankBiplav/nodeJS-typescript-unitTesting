
import {users} from "../models/db";

export const getUser= (id:number)=> {
  if (id) {
    return users.filter((element)=> element.id === id);
  }
  return [...users];
};
