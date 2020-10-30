/*
Nth Highest Salary

https://leetcode.com/problems/nth-highest-salary/submissions/

Write a SQL query to get the nth highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the nth highest salary where n = 2 is 200. If there is no nth highest salary, then the query should return null.

+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
*/
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE n_offset INT;
  SET n_offset = N -1;
  RETURN (
      SELECT DISTINCT(Salary)
      FROM employee
      ORDER BY Salary DESC 
      LIMIT 1
      OFFSET n_offset
  );
END