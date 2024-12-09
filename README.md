# Unhandled Promise Rejection in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous middleware.  Improper error handling within asynchronous functions can lead to crashes or silent failures, making debugging difficult.

## The Bug

The `bug.js` file contains an Express.js application with an asynchronous middleware function (`doSomethingAsync`). This function simulates an operation that may fail randomly.  Crucially, it lacks proper error handling. If the asynchronous operation rejects, the error is not caught, leading to an unhandled promise rejection and the application potentially crashing or behaving unexpectedly.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle errors in asynchronous middleware.  A `catch` block is added to handle potential rejections, ensuring graceful error handling and preventing unhandled promise rejections.