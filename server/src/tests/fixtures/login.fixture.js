import { userFixture } from "./user.fixture";
import app from "../../../index.js";
import request from "supertest";

export const loginFixture = async () => {
  const user = await userFixture();
  const response = await request(app)
    .post("/api/users/login")
    .send({
      username: user.username,
      password: user.password,
    })
    
    
    const cookie = response.headers['set-cookie'][0]
  return {
   cookie,
   userId: user.id,
  };
}