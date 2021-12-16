import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";

//assertion style
chai.should();

chai.use(chaiHttp);

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzYmlwbGF2QGljbG91ZC5jb20iLCJpYXQiOjE2Mzk2NjgyNDEsImV4cCI6MTYzOTc1NDY0MX0.FY6M264BH9d46X95spKa6RIuw8ShtwCodEtvRye4Rbk";

describe("Login User Endpoint", () => {
  /**
   * testing the protected endpoint PUT for a successful API call
   */
  describe("PUT /api/protected", () => {
    it("should return with id and email of user", (done) => {
      chai
        .request(app)
        .put("/api/protected")
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("email");
          res.body.should.have.property("id");
          res.body.should.have.property("msg");
          done();
        });
    });
  });
});
