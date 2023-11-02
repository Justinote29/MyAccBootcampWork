SELECT *
FROM teams;

1. All teams are returned, even if there are no players included in that team.
SELECT name
FROM teams;


2. List `TEAM_ID` and `TEAM_NAME`.

SELECT id, 
       name
FROM teams;


SELECT * 
FROM players;

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

-- 5. Order by player's `weight` in ascending order.

SELECT *
FROM players
ORDER BY weight;