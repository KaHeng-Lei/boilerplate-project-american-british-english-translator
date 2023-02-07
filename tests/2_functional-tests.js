const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server =
  "https://boilerplate-project-american-british-english-translator.kaheng-lei.repl.co";

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  let text = "Mangoes are my favorite fruit.";
  let locale = "american-to-british";

  test("1. Translation with text and locale fields", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text, locale })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          `Mangoes are my <span class="highlight">favourite</span> fruit.`
        );
        done();
      });
  });

  test("2. Translation with text and invalid locale field", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text, locale: "AmericanToChinese" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Invalid value for locale field");
        done();
      });
  });

  test("3. Translation with missing text field", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "", locale })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });

  test("4. Translation with missing locale field", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text, locale: "" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });

  test("5. Translation with empty text", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "", locale })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });

  test("6. Translation with text that needs no translation", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "Hello", locale })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});
