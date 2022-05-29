# technical-interview

This is the code you will need for the technical part of BYP's engineering recruitment process.

Below are the instructions for setting up your environment and the starting point for the coding exercise.

We will be on a call with a shared coding environment, and we will be pair programming. If you would prefer not to (as a lot of people can freeze up during technical interviews), you also have the option to "take home" the exercise. You'd work on it for an hour and then we would discuss how it went and the choices you made. Please be mindful of the goals below.

## Set up

You will need the following installed on your machine:

- NodeJs and npm ([More information](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- Mocha ([More information](https://mochajs.org/))

Clone this repository on to your local machine and run `npm i` to install mocha.

Run `npm test` to run the tests. Two tests should pass:

```
  checkout
    ✔ This test will pass
    ✔ I can scan an item without an error being thrown


  2 passing (4ms)
```

If the tests pass, everything is working.

## Sharing a session on VSCode

[VSCode](https://code.visualstudio.com/) has a feature called "Live Share" which allows you to share your workspace. If you can, please set this up [using these instructions](https://docs.microsoft.com/en-us/visualstudio/liveshare/quickstart/share).

If you do not or can not use VSCode, we will use a video call to share/present your screen instead.

## Goals

The aim of this exercise is to see how you code and how well we work together. The following are some of the ways we assess the exercise.

* Is the code [clean](https://garywoodfine.com/what-is-clean-code/) and [testable](https://www.toptal.com/javascript/writing-testable-code-in-javascript).
* Is the code as [Functional](https://www.youtube.com/watch?v=e-5obm1G_FY) as possible without sacrificing readability (as oppose to Object Orientated code or Procedural code).
* Are we using tests to drive the development by following the [Test Driven Development process](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html).
* Is the code being safely [refactored](https://www.agilealliance.org/glossary/refactoring/).
* Are we making the [smallest steps possible](https://www.thedroidsonroids.com/blog/6-misconceptions-about-tdd-part-4-steps-size) as we write and [refactor](https://wiki.c2.com/?RefactoringInVerySmallSteps) the code.
* Communication:
  * Talking about your decision making process.
  * Ask for help when you get stuck.
  * Focus on the people and the problem, not the implimentation.

# Checkout Specification

A client has asked us to build some software for their new coffee shop's checkout. The code will need to scan items with a function called `scan`, and return the current total price with a function called `getTotalPrice`.

Example:

```js

const checkout = new Checkout();

checkout.scan("Apple");
checkout.getTotalPrice(); // returns 1

```

**The client already has customers in the shop, but no working till.**

The following items can be scanned (the String is passed to the `scan` function):

- Apple (£1.00)
- Banana (£1.20)
- Flat White (£3.50)
- Americano (£2.00)

There is a special offer on Bananas: if you buy 3 you only pay for 2.

There is a special offer on Americanos: they are 4 for £6.50.

Pricing and special offers change frequently.

## Todo

Optimise the getSpecialOffer() function having better performance in production scale environment.
