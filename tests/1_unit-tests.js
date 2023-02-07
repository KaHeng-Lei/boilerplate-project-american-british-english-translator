const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  suite("American to British English tests", function () {
    test("1. Translate Mangoes are my favorite fruit. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("Mangoes are my favorite fruit.")[1],
        `Mangoes are my <span class="highlight">favourite</span> fruit.`
      );
      done();
    });

    test("2. Translate I ate yogurt for breakfast. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("I ate yogurt for breakfast.")[1],
        `I ate <span class="highlight">yoghurt</span> for breakfast.`
      );
      done();
    });

    test("3. Translate We had a party at my friend's condo. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("We had a party at my friend's condo.")[1],
        `We had a party at my friend's <span class="highlight">flat</span>.`
      );
      done();
    });

    test("4. Translate Can you toss this in the trashcan for me? to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish(
          "Can you toss this in the trashcan for me?"
        )[1],
        `Can you toss this in the <span class="highlight">bin</span> for me?`
      );
      done();
    });

    test("5. Translate The parking lot was full. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("The parking lot was full.")[1],
        `The <span class="highlight">car park</span> was full.`
      );
      done();
    });

    test("6. Translate Like a high tech Rube Goldberg machine. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish(
          "Like a high tech Rube Goldberg machine."
        )[1],
        `Like a high tech <span class="highlight">Heath Robinson device</span>.`
      );
      done();
    });

    test("7. Translate To play hooky means to skip class or work. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish(
          "To play hooky means to skip class or work."
        )[1],
        `To <span class="highlight">bunk off</span> means to skip class or work.`
      );
      done();
    });

    test("8. Translate No Mr. Bond, I expect you to die. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("No Mr. Bond, I expect you to die.")[1],
        `No <span class="highlight">Mr</span> Bond, I expect you to die.`
      );
      done();
    });

    test("9. Translate Dr. Grosh will see you now. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("Dr. Grosh will see you now.")[1],
        `<span class="highlight">Dr</span> Grosh will see you now.`
      );
      done();
    });

    test("10. Translate Lunch is at 12:15 today. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("Lunch is at 12:15 today.")[1],
        `Lunch is at <span class="highlight">12.15</span> today.`
      );
      done();
    });
  });

  suite("British to American English", function (done) {
    test("11. Translate We watched the footie match for a while. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "We watched the footie match for a while."
        )[1],
        `We watched the <span class="highlight">soccer</span> match for a while.`
      );
      done();
    });

    test("12. Translate Paracetamol takes up to an hour to work. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "Paracetamol takes up to an hour to work."
        )[1],
        `<span class="highlight">Tylenol</span> takes up to an hour to work.`
      );
      done();
    });

    test("13. Translate First, caramelise the onions. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish("First, caramelise the onions.")[1],
        `First, <span class="highlight">caramelize</span> the onions.`
      );
      done();
    });

    test("14. Translate I spent the bank holiday at the funfair. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "I spent the bank holiday at the funfair."
        )[1],
        `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`
      );
      done();
    });

    test("15. Translate I had a bicky then went to the chippy. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "I had a bicky then went to the chippy."
        )[1],
        `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`
      );
      done();
    });

    test("16. Translate I've just got bits and bobs in my bum bag. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "I've just got bits and bobs in my bum bag."
        )[1],
        `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`
      );
      done();
    });

    test("17. Translate The car boot sale at Boxted Airfield was called off. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "The car boot sale at Boxted Airfield was called off."
        )[1],
        `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`
      );
      done();
    });

    test("18. Translate Have you met Mrs Kalyani? to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish("Have you met Mrs Kalyani?")[1],
        `Have you met <span class="highlight">Mrs.</span> Kalyani?`
      );
      done();
    });

    test("19. Translate Prof Joyner of King's College, London. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "Prof Joyner of King's College, London."
        )[1],
        `<span class="highlight">Prof.</span> Joyner of King's College, London.`
      );
      done();
    });

    test("20. Translate Tea time is usually around 4 or 4.30. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "Tea time is usually around 4 or 4.30."
        )[1],
        `Tea time is usually around 4 or <span class="highlight">4:30</span>.`
      );
      done();
    });
  });

  suite("Highlight translation", function (done) {
    test("21. Translate Mangoes are my favorite fruit. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("Mangoes are my favorite fruit.")[1],
        `Mangoes are my <span class="highlight">favourite</span> fruit.`
      );
      done();
    });

    test("22. Translate I ate yogurt for breakfast. to British English", function (done) {
      assert.equal(
        translator.toBritishEnglish("I ate yogurt for breakfast.")[1],
        `I ate <span class="highlight">yoghurt</span> for breakfast.`
      );
      done();
    });

    test("23. Translate We watched the footie match for a while. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "We watched the footie match for a while."
        )[1],
        `We watched the <span class="highlight">soccer</span> match for a while.`
      );
      done();
    });

    test("24. Translate Paracetamol takes up to an hour to work. to American English", function (done) {
      assert.equal(
        translator.toAmericanEnglish(
          "Paracetamol takes up to an hour to work."
        )[1],
        `<span class="highlight">Tylenol</span> takes up to an hour to work.`
      );
      done();
    });
  });
});
