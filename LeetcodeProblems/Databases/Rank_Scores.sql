/* 
Rank Scores
https://leetcode.com/problems/rank-scores/

Write a SQL query to rank scores. If there is a tie between two scores, both should have the same ranking. Note that after a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no "holes" between ranks.

+----+-------+
| Id | Score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+
For example, given the above Scores table, your query should generate the following report (order by highest score):

+-------+---------+
| score | Rank    |
+-------+---------+
| 4.00  | 1       |
| 4.00  | 1       |
| 3.85  | 2       |
| 3.65  | 3       |
| 3.65  | 3       |
| 3.50  | 4       |
+-------+---------+
Important Note: For MySQL solutions, to escape reserved words used as column names, you can use an apostrophe before and after the keyword. For example `Rank`.
*/

-- Solution 1
SELECT Scores.Score, t3.Rank
FROM Scores JOIN (
    select Score, (@inc := @inc + 1) as "Rank"
    FROM (
        SELECT Score as Score
        FROM Scores
        GROUP BY Score
        ORDER BY Score DESC
    ) AS t1 CROSS JOIN  (SELECT @inc := 0 ) as t2
) as t3 ON Scores.Score = t3.Score
ORDER BY t3.Rank ASC


-- Solution 2
-- Set two variables, one to keep the previous Score and other to keep the current Rank
SELECT Score,
    @curr := CASE WHEN @previous = (@previous := Score) THEN 
        CAST(@curr AS SIGNED INTEGER)
        ELSE 
        CAST(@curr + 1 AS SIGNED INTEGER)
    END AS "Rank"
FROM Scores, (SELECT @curr := 0, @previous := -1) as t1
ORDER BY SCORE DESC

