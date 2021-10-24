This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the following commands to run this project:

```bash
npm install
&
npm run dev

```
   Project details

      Main points to consider:
         1. Used getStaticProps to get all unique userId at build time.
         2. UserId can be changed through a select form; queries the api for each userId's tasks.
         3. Use redux to keep the currentUserId and his todos in global state.
         4. Each userId's todos & new todos are requested through a redux thunk middleware with axios as client.
         5. Remove and finish tasks functionality is only done client-side; the api can't POST/PATCH/PUT;
         6. Used the api for posting new todos to demonstrate functionality and get a response with a new todo and a new id (always 201, that's why I used <title> as parameter to complete and delete tasks instead of id.)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
