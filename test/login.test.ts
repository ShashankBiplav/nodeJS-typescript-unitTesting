import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";

//assertion style
chai.should();

chai.use(chaiHttp);

describe("Login User Endpoint", () => {
  /**
   * testing the login endpoint POST for a successful login
   */
  describe("POST /api/auth", () => {
    it("should return a token", (done) => {
      chai
        .request(app)
        .post("/api/auth")
        .send({
          email: "sbiplav@icloud.com",
          password: "Qwerty@123",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("token");
          res.body.should.have.property("msg");
          done();
        });
    });
  });
  /**
   * testing the login endpoint for an unsuccessful login
   */
  describe("POST /api/auth", () => {
    it("should return a token", (done) => {
      chai
        .request(app)
        .post("/api/auth")
        .send({
          email: "sbiplav@icloud.com",
          password: "Qwerty@12",
        })
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.not.have.property("token");
          res.body.should.have.property("msg");
          done();
        });
    });
  });
});
