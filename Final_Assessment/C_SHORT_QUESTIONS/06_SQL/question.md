Write a "single" SQL Query that returns data from the `TEAMS` and `PLAYERS` tables such that

1. All teams are returned, even if there are no players included in that team.

SELECT name
FROM teams

2. List `TEAM_ID` and `TEAM_NAME`.

SELECT id, 
       name
FROM teams;


3. List player's `FULLNAME` (First and Last Name separated by a space).

SELECT fname || ' ' || lname
AS FULLNAME
FROM players;

4. If the player `weight` is greater than 200 lbs, return the text `"Heavy"`.  (Hint: you may use CASE).  Else, return the text `"Medium"`.

SELECT fname, lname, weight,
CASE 
    WHEN weight > 200 THEN 'Heavy'
    WHEN weight <= 200 THEN 'Medium'
    ELSE ''
END AS Size
FROM players

5. Order by player's `weight` in ascending order.

The output may look something like this. Some intermediate rows have been removed for brevity.

SELECT *
FROM players
ORDER BY weight;

```
 team_id |  name  |     city      | state |     fullname      | weight | Weight Category
---------+--------+---------------+-------+-------------------+--------+-----------------
       1 | Royals | Kansas City   | MO    | Jarrod Dyson      |    160 | Medium
       1 | Royals | Kansas City   | MO    | Terrance Gore     |    165 | Medium
       1 | Royals | Kansas City   | MO    | Tim Collins       |    170 | Medium
       1 | Royals | Kansas City   | MO    | Nori Aoki         |    180 | Medium
       ...
       1 | Royals | Kansas City   | MO    | Francisco Pena    |    230 | Heavy
       1 | Royals | Kansas City   | MO    | Erik Kratz        |    240 | Heavy
       1 | Royals | Kansas City   | MO    | Billy Butler      |    240 | Heavy
       1 | Royals | Kansas City   | MO    | Salvador Perez    |    240 | Heavy
       1 | Royals | Kansas City   | MO    | Carlos Peguero    |    250 | Heavy

       2 | Giants | San Francisco | CA    | Joaquin Arias     |    165 | Medium
       2 | Giants | San Francisco | CA    | Tim Lincecum      |    170 | Medium
       2 | Giants | San Francisco | CA    | Matt Duffy        |    170 | Medium
       2 | Giants | San Francisco | CA    | Ehire Adrianza    |    170 | Medium
       2 | Giants | San Francisco | CA    | Gregor Bianco     |    175 | Medium
       2 | Giants | San Francisco | CA    | Kendry Flores     |    175 | Medium
       ...
       2 | Giants | San Francisco | CA    | Erik Cordier      |    250 | Heavy
       2 | Giants | San Francisco | CA    | Angel Villalona   |    255 | Heavy
       2 | Giants | San Francisco | CA    | Jean Machi        |    255 | Heavy
```
