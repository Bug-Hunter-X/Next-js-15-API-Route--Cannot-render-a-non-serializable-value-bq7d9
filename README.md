# Next.js 15 API Route Error: Cannot render a non-serializable value

This repository demonstrates a common error in Next.js 15 API routes where attempting to directly return a Promise from a fetch call results in a "Cannot render a non-serializable value" error.  The solution involves properly handling the asynchronous operation and serializing the data before sending the response.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Try to access `/api/data`.  You'll encounter the error.

## Solution

The solution involves using `async/await` to handle the promise returned by `fetch` and properly sending the response data in the JSON format.