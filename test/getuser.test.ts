import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";

//assertion style
chai.should();

chai.use(chaiHttp);

describe("Get User Endpoint", () => {
  /**
   * testing the POST users route => POST REQUEST
   */
  describe("POST /api/users", () => {
    it("should get all users", (done) => {
      chai
        .request(app)
        .post("/api/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
  });

  /**
   * testting the POST route where userId is passed in request body
   */
  describe("POST /api/users", () => {
    it("should get a single user", (done) => {
      chai
        .request(app)
        .post("/api/users")
        .send({
          id: 2,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
  });
});
