/*
Reformat Department Table
https://leetcode.com/problems/reformat-department-table

Table: Department

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| revenue       | int     |
| month         | varchar |
+---------------+---------+
(id, month) is the primary key of this table.
The table has information about the revenue of each department per month.
The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].
 

Write an SQL query to reformat the table such that there is a department id column and a revenue column for each month.

The query result format is in the following example:

Department table:
+------+---------+-------+
| id   | revenue | month |
+------+---------+-------+
| 1    | 8000    | Jan   |
| 2    | 9000    | Jan   |
| 3    | 10000   | Feb   |
| 1    | 7000    | Feb   |
| 1    | 6000    | Mar   |
+------+---------+-------+

Result table:
+------+-------------+-------------+-------------+-----+-------------+
| id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
+------+-------------+-------------+-------------+-----+-------------+
| 1    | 8000        | 7000        | 6000        | ... | null        |
| 2    | 9000        | null        | null        | ... | null        |
| 3    | null        | 10000       | null        | ... | null        |
+------+-------------+-------------+-------------+-----+-------------+

Note that the result table has 13 columns (1 for the department id + 12 for the months).
*/




-- better solution
SELECT id,
    sum(CASE WHEN month = "Jan" then revenue else NULL END) AS "Jan_Revenue",
    sum(CASE WHEN month = "Feb" then revenue else NULL END) AS "Feb_Revenue",
    sum(CASE WHEN month = "Mar" then revenue else NULL END) AS "Mar_Revenue",
    sum(CASE WHEN month = "Apr" then revenue else NULL END) AS "Apr_Revenue",
    sum(CASE WHEN month = "May" then revenue else NULL END) AS "May_Revenue",
    sum(CASE WHEN month = "Jun" then revenue else NULL END) AS "Jun_Revenue",
    sum(CASE WHEN month = "Jul" then revenue else NULL END) AS "Jul_Revenue",
    sum(CASE WHEN month = "Aug" then revenue else NULL END) AS "Aug_Revenue",
    sum(CASE WHEN month = "Sep" then revenue else NULL END) AS "Sep_Revenue",
    sum(CASE WHEN month = "Oct" then revenue else NULL END) AS "Oct_Revenue",
    sum(CASE WHEN month = "Nov" then revenue else NULL END) AS "Nov_Revenue",
    sum(CASE WHEN month = "Dec" then revenue else NULL END) AS "Dec_Revenue"
FROM Department
GROUP BY id


-- bad solution
with jan AS (
    SELECT id, revenue AS Jan_Revenue
    FROM Department
    WHERE month = "Jan"
), feb AS (
    SELECT id, revenue AS Feb_Revenue
    FROM Department
    WHERE month = "Feb"
), mar AS (
    SELECT id, revenue AS Mar_Revenue
    FROM Department
    WHERE month = "Mar"
), apr AS (
    SELECT id, revenue AS Apr_Revenue
    FROM Department
    WHERE month = "Apr"
), may AS (
    SELECT id, revenue AS May_Revenue
    FROM Department
    WHERE month = "May"
), jun AS (
    SELECT id, revenue AS Jun_Revenue
    FROM Department
    WHERE month = "Jun"
), jul AS (
    SELECT id, revenue AS Jul_Revenue
    FROM Department
    WHERE month = "Jul"
), aug AS (
    SELECT id, revenue AS Aug_Revenue
    FROM Department
    WHERE month = "Aug"
), sep AS (
    SELECT id, revenue AS Sep_Revenue
    FROM Department
    WHERE month = "Sep"
), oct AS (
    SELECT id, revenue AS Oct_Revenue
    FROM Department
    WHERE month = "Oct"
), nov AS (
    SELECT id, revenue AS Nov_Revenue
    FROM Department
    WHERE month = "Nov"
), decemb AS (
    SELECT id, revenue AS Dec_Revenue
    FROM Department
    WHERE month = "Dec"
)
    
SELECT Distinct(Department.id),  jan.Jan_Revenue,  feb.Feb_Revenue,  mar.Mar_Revenue,  apr.Apr_Revenue,  may.May_Revenue,   jun.Jun_Revenue,  jul.Jul_Revenue,  aug.Aug_Revenue,  sep.Sep_Revenue, oct.Oct_Revenue, nov.Nov_Revenue,  decemb.Dec_Revenue
    FROM Department LEFT JOIN jan using(id)
    LEFT JOIN feb using(id) 
    LEFT JOIN mar using(id)
    LEFT JOIN apr using(id)
    LEFT JOIN may using(id)
    LEFT JOIN jun using(id)
    LEFT JOIN jul using(id)
    LEFT JOIN aug using(id)
    LEFT JOIN sep using(id)
    LEFT JOIN oct using(id)
    LEFT JOIN nov using(id)
    LEFT JOIN decemb using(id)
    