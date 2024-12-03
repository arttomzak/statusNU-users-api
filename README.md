Approach:

Create a PostgreSQL database with a table named users,
  - This has the primary key of id, which identifies each user
  - features first_name, last_name, and email schema as well
    
Write a get request that fetches all the data in a json so that my frontend can call upon it and populate friendcards



Key takeaways / problems:

  - You cannot start a node server while importing modules for whatever reason
       converting the imports to something like     const { Pool } = require("pg");    does the trick
  - CHECK POSTMAN frequently, create mini test cases where it just prints a string or similar to see if its even working
          NOTE: YOU MUST RESTART YOUR NODE SERVER TO SEE CHANGES TO GET REQUESTS (at least in Postman), it was calling old versions that weren't saved in the codebase and I was confused
  - I feel like a wizard after getting all of this working and seeing the friend cards populate
