/*
Human Traffic of Stadium
https://leetcode.com/problems/human-traffic-of-stadium/

Table: Stadium

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| visit_date    | date    |
| people        | int     |
+---------------+---------+
visit_date is the primary key for this table.
Each row of this table contains the visit date and visit id to the stadium with the number of people during the visit.
No two rows will have the same visit_date, and as the id increases, the dates increase as well.

Write an SQL query to display the records with three or more rows with consecutive id's, and the number of people is greater than or equal to 100 for each.

Return the result table ordered by visit_date in ascending order.

The query result format is in the following example.

Stadium table:
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 1    | 2017-01-01 | 10        |
| 2    | 2017-01-02 | 109       |
| 3    | 2017-01-03 | 150       |
| 4    | 2017-01-04 | 99        |
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-09 | 188       |
+------+------------+-----------+

Result table:
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-09 | 188       |
+------+------------+-----------+
The four rows with ids 5, 6, 7, and 8 have consecutive ids and each of them has >= 100 people attended. Note that row 8 was included even though the visit_date was not the next day after row 7.
The rows with ids 2 and 3 are not included because we need at least three consecutive ids.
*/

SELECT DISTINCT(s1.id) as id, s1.visit_date, s1.people
FROM Stadium AS s1, Stadium AS s2, Stadium AS s3
WHERE
    (s1.people >= 100 AND s2.people >= 100 AND s3.people >= 100 AND s1.id = s2.id - 1 AND s2.id = s3.id - 1 AND s1.id = s3.id - 2) OR -- S1, S2, S3
    (s1.people >= 100 AND s2.people >= 100 AND s3.people >= 100 AND s1.id = s2.id + 1 AND s2.id = s3.id - 2 AND s1.id = s3.id - 1) OR -- S2. S1. S3
    (s1.people >= 100 AND s2.people >= 100 AND s3.people >= 100 AND s1.id = s2.id + 2 AND s2.id = s3.id - 1 AND s1.id = s3.id + 1)    -- S2 S3 S1
ORDER BY s1.id ASC
