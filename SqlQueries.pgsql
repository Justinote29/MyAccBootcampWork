-- Queries

-- Read- highlight and right click and run query to only run what's highlighted or right click and run from anywhere to run it all. Normally we capitalize our key words and write them on separate lines as shown below.

SELECT *     --this allows me to select everything
FROM countries;   --from  countries table_am_handler_in

SELECT country_name  --select only country name
FROM countries;

SELECT country_name,  --selects both columns (good to put columns on different lines)
        region_id   
FROM countries;



-- we can filter our rows, with WHERE

SELECT country_name,
        region_id
FROM countries
WHERE region_id < 3;


SELECT country_name,
        region_id
FROM countries
WHERE region_id = 3 
    or region_id = 5;

-- This does the same as above- shows countries and region id from countries table where region id equals 3 or 5
SELECT country_name,
        region_id
FROM countries
WHERE region_id IN (3,5);

-- This returns everything but entries with region ids of 3 or 5

SELECT country_name,
        region_id
FROM countries
WHERE region_id NOT IN (3,5);

-- look into SQL comparison operators for filter options

SELECT first_name,
        last_name,
        commission_pct
FROM employees
WHERE commission_pct IS NOT NULL;

-- you can reorder columns depending on how you want to see the info. but they do return entries in the order it was entered by default.  It will always be in that order in the, but we can control the order of the results we return from the DB.

SELECT commission_pct,
        first_name,
        last_name
FROM employees
WHERE commission_pct IS NOT NULL
    ORDER BY commission_pct;

    SELECT commission_pct,
        salary,
        first_name,
        last_name
FROM employees
WHERE commission_pct IS NOT NULL
    ORDER BY commission_pct DESC;

-- this query first orders by commision_pct and then if any entries have the same commission percentage, it sorts them by salary.  || means concatanate in SQL.  We can change the name of this column we concatanate too.  We can concatanate with single quotes to add a space.
 SELECT commission_pct
        percent,
        salary,
        first_name,
        last_name,
        first_name || ' ' || last_name AS "Full Name"
FROM employees
WHERE commission_pct IS NOT NULL
    ORDER BY commission_pct DESC,
                salary DESC;

-- Column Aliases- AS this changes the name of the column. Double quotes changes it to exactly as we write it, otherwise it will be lowercase
 SELECT commission_pct AS PERCENT,
        salary,
        first_name,
        last_name,
        first_name || ' ' || last_name AS "Full Name"
FROM employees
WHERE commission_pct IS NOT NULL
    ORDER BY commission_pct DESC,
            salary DESC;

--We can do things like subtract from the salary and view it
            SELECT commission_pct AS PERCENT,
        salary - 1000 AS "Reduced Salary",
        first_name,
        last_name,
        first_name || ' ' || last_name AS "Full Name"
FROM employees
WHERE commission_pct IS NOT NULL
    ORDER BY commission_pct DESC,
            salary DESC;

-- We can add on to filters like where commission_pct is not null and salary is greater than 7000
 SELECT commission_pct AS PERCENT,
        salary - 1000 AS "Reduced Salary",
        first_name,
        last_name,
        first_name || ' ' || last_name AS "Full Name"
FROM employees
WHERE commission_pct IS NOT NULL
AND salary > 7000
    ORDER BY commission_pct DESC,
            salary DESC;

SELECT *
FROM employees;

-- returns distinct salary numbers
SELECT DISTINCT salary
FROM employees;

-- Aggregate FUNCTIONS- for example AVG(), MIN(), MAX(). Aggregate functions are not allowed in the WHERE clause.

    -- find average pay of employees

SELECT AVG(salary)
FROM employees;

    --find minimum pay of employees
SELECT MIN(salary)
FROM employees;

    --find maximum pay of employees
SELECT MAX(salary)
FROM employees;


SELECT AVG(salary)
FROM employees;

--Here we run a subquery that has precedence b/c it's in parenthesis and then filter the results based on the average.

SELECT salary
FROM employees
WHERE salary >
    (SELECT AVG(salary)
    FROM employees);

-- Count tells us how many- here how many employees are making less than the average salary.  Count does not count null.
SELECT COUNT(salary)
FROM employees
WHERE salary >
    (SELECT MIN(salary)
    FROM employees);


SELECT first_name || ' ' ||last_name
AS fullname
FROM hr.employees;



SELECT employee_id, last_name, salary, commission_pct
FROM hr.employees
WHERE commission_pct IS NOT NULL
OR salary > 10000
AND hire_date > '31-DEC-98';

SELECT first_name, last_name
FROM hr.employees
WHERE department_id = 80;


SELECT first_name, last_name
FROM hr.employees
WHERE salary * 12 > 80000;

-- percent is a wildcard-  like is pattern matching- this is the employees whose last name's start with K. UPPER will make each one uppercase so we can have a case insensitive filter or where first name ends with G.
SELECT first_name, last_name
FROM hr.employees
WHERE UPPER(last_name) like UPPER('k%')
    or UPPER(first_name) like upper('%g');


SELECT * FROM employees;

-- how many employees
SELECT count(*) FROM employees;

SELECT min(salary), max(salary) FROM employees;

--how many commissioned employees
SELECT count(commission_pct) FROM employees;


-- show the name of the employee who makes the highest salary
SELECT first_name, last_name
FROM hr.employees
WHERE salary = (SELECT max(salary) FROM employees);

-- shows the highest salary in each department_id.  From employees table, group by dept. id and then show the department id and highest salary.
SELECT department_id, max(salary)
FROM hr.employees
GROUP BY department_id;


-- shows which job has the highest salary and orders by job salary
SELECT max(salary), job_id
FROM hr.employees
GROUP BY job_id
ORDER BY max(salary);


--get average salary by job id and cuts off the decimal with trunc.
SELECT job_id, trunc(avg(salary))
FROM hr.employees
GROUP BY job_id
ORDER BY avg(salary);



-- how many managers are there?
SELECT COUNT(distinct manager_id)
FROM employees;

--calculating compensation-  coalesce()- says if commission is null, evaluate it as zero.  coalesce let's us deal with nulls.
SELECT  first_name, last_name,
        trunc(salary +
        coalesce(commission_pct,0) * salary) as Total_Compensation
FROM employees;



--sorting- order by ascending order of last name

SELECT first_name, last_name
FROM employees
ORDER BY last_name ASC;

SELECT first_name, last_name
FROM employees
ORDER BY last_name DESC;

--multiple column sort- first sorts by last name and if anyone has the same last name, it sorts by first name.

SELECT first_name, last_name
FROM employees
ORDER BY last_name DESC, first_name desc;


--Extract

SELECT first_name, last_name,
        extract ('year' from hire_date) as hire_year,
        extract ('month' from hire_date) as hire_month
    FROM employees;

--CASE Syntax -  allows you to do if, then, else statements in SQL. Use a case statement as below.  Evaluates from top to bottom with the When else statements.

SELECT first_name, last_name, salary,
CASE
    WHEN salary < 5000 THEN 'LOW'
    WHEN salary < 10000 THEN 'MEDIUM'
    ELSE 'HIGH'
END AS SALARY_CATEGORY
FROM employees;


--gives us time
SELECT localtimestamp;

SELECT current_timestamp at time zone 'CDT';

--this number is number of seconds since epoch (since 1970)
SELECT EXTRACT(EPOCH FROM NOW());

--calculates how many days I've lived
SELECT CURRENT_DATE -  TO_DATE('11/19/1980', 'MM/DD/YYYY');


Subqueries

SELECT first_name, last_name
FROM hr.employees
WHERE salary > (SELECT avg(salary)
                FROM employees);

--find department in UK
SELECT department_name
from departments
WHERE location_id in
(SELECT location_id from hr.locations
where country_id = 'UK');


SELECT first_name, last_name
FROM employees 
WHERE department_id IN
(
    SELECT department_id FROM hr.departments
    WHERE location_id IN (
        SELECT location_id FROM locations
        WHERE city = 'Seattle'));

JOINS - to join tables

-- This joins the following columns from the two tables.

SELECT employees.first_name || ' ' ||employees.last_name AS fullName, departments.department_id, departments.department_name
FROM employees JOIN departments
ON (employees.department_id = departments.department_id);

--Left Join joins the whole first table event where it doesn't coincide with the right table.

SELECT employees.first_name || ' ' ||employees.last_name AS fullName, departments.department_id, departments.department_name
FROM employees LEFT JOIN departments
ON employees.department_id = departments.department_id;

2 joins on two different logical connections

SELECT first_name ||  ' ' || last_name AS Full_Name,
d.department_name, l.city
FROM employees AS e LEFT JOIN departments AS d
ON (e.department_id = d.department_id)
LEFT JOIN locations AS l
ON (l.location_id = d.location_id);

--types of joins    Inner/Equi JOIN (normal way)- have to join on logical CONNECTION, on matching rows ONLY
                    -- OUTER Joins- LEFT, Right, Full- return unmatched rows as well, from left, right, or both tables.
                    -- Full Outer Joins--  FULL JOIN


--Joins are between 2 tables so if you want three to show, you need to do 2 joins.

SELECT e.first_name, d.department_name
FROM employees AS e
RIGHT JOIN departments AS d
ON (e.department_id = d.department_id);




--to insert into a table
INSERT INTO department(
    department_id,
    department_name,
    manager_id,
    location_id
) VALUES(
    120,
    'transportation',
    102,
    1700
)


SELECT p.fname || ' ' || p.lname AS Full_Name, p.height, p.weight, t.name AS team
FROM players as p LEFT JOIN hr.teams AS t
ON(p.team_id=t.id);




--SELF JOIN- used in heirarchical data- joins on manager_id

SELECT emp.first_name || ' ' || emp.last_name AS "Employee Full Name", mgr.first_name || ' ' || mgr.last_name AS "Manager Full Name"
FROM hr.employees AS emp
LEFT JOIN employees AS mgr
ON(emp.manager_id = mgr.employee_id);

SELECT emp.first_name || ' ' || emp.last_name AS "Employee Full Name", mgr.first_name || ' ' || mgr.last_name AS "Manager Full Name",
d.department_name 
FROM hr.employees AS emp
LEFT JOIN employees AS mgr
ON(emp.manager_id = mgr.employee_id)
LEFT JOIN departments as d
ON(emp.department_id = d.department_id)
;

SELECT emp.first_name || ' ' || emp.last_name AS "Employee Full Name",
d.department_name AS "Employees Department",
 mgr.first_name || ' ' || mgr.last_name AS "Emp Manager Full Name",
 --Department managers full name
dMgr.first_name || ' ' || dMgr.last_name AS "Dept Mgr full_Name"
FROM hr.employees AS emp
LEFT JOIN employees AS mgr
ON(emp.manager_id = mgr.employee_id)
LEFT JOIN departments as d
ON(emp.department_id = d.department_id)
LEFT JOIN employees AS dMgr
ON (d.manager_id = dMgr.employee_id)
;

INSERT INTO hr.movies_april_2023 (
    movie_name,
    genre,
    length_minutes,
    year_made
    ) VALUES(
        'No Country for Old Men',
        'Drama',
        122,
        2007
    );

    SELECT * FROM hr.movies_april_2023;

    DELETE FROM hr.movies_april_2023
    WHERE movies_id IN (3);

    INSERT INTO hr.movies_april_2023 (
    movie_name,
    genre,
    length_minutes,
    year_made
    ) VALUES(
        'Fire of Love',
        'Documentary',
        94,
        2022
    );

    INSERT INTO hr.movie_ratings_april_2023(
        Rating,
        comment,
        Movie_ID
    )
    VALUES(
        9.5,
        'Great crime drama with set in Texas the one of the best bad guys of all time',
        8
    )

    SELECT * FROM hr.movie_ratings_april_2023;


    SELECT m.movies_id, m.movie_name, count(r.Ratings_id), avg(r.rating) ave_rating
    FROM movies_april_2023 AS m
    JOIN movie_ratings_april_2023 AS r
    on m.movies_id = r.movie_id
    GROUP BY m.movies_id, m.movie_name
    HAVING count(r.ratings_id)>1;
    

    SELECT * FROM  bucketlist.users;

    INSERT INTO bucketlist.users(
        username,
        passwordhash,
        email
    ) VALUES(
        'jerwin',
        'asdfsdfsaf',
        'justin@justin.com'
    )

    