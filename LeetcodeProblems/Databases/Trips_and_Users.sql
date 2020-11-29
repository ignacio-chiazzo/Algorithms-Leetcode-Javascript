/*
Trips and Users
https://leetcode.com/problems/trips-and-users/

SQL Schema
The Trips table holds all taxi trips. Each trip has a unique Id, while Client_Id and Driver_Id are both foreign keys to the Users_Id at the Users table. Status is an ENUM type of (‘completed’, ‘cancelled_by_driver’, ‘cancelled_by_client’).

+----+-----------+-----------+---------+--------------------+----------+
| Id | Client_Id | Driver_Id | City_Id |        Status      |Request_at|
+----+-----------+-----------+---------+--------------------+----------+
| 1  |     1     |    10     |    1    |     completed      |2013-10-01|
| 2  |     2     |    11     |    1    | cancelled_by_driver|2013-10-01|
| 3  |     3     |    12     |    6    |     completed      |2013-10-01|
| 4  |     4     |    13     |    6    | cancelled_by_client|2013-10-01|
| 5  |     1     |    10     |    1    |     completed      |2013-10-02|
| 6  |     2     |    11     |    6    |     completed      |2013-10-02|
| 7  |     3     |    12     |    6    |     completed      |2013-10-02|
| 8  |     2     |    12     |    12   |     completed      |2013-10-03|
| 9  |     3     |    10     |    12   |     completed      |2013-10-03| 
| 10 |     4     |    13     |    12   | cancelled_by_driver|2013-10-03|
+----+-----------+-----------+---------+--------------------+----------+
The Users table holds all users. Each user has an unique Users_Id, and Role is an ENUM type of (‘client’, ‘driver’, ‘partner’).

+----------+--------+--------+
| Users_Id | Banned |  Role  |
+----------+--------+--------+
|    1     |   No   | client |
|    2     |   Yes  | client |
|    3     |   No   | client |
|    4     |   No   | client |
|    10    |   No   | driver |
|    11    |   No   | driver |
|    12    |   No   | driver |
|    13    |   No   | driver |
+----------+--------+--------+
Write a SQL query to find the cancellation rate of requests made by unbanned users (both client and driver must be unbanned) between Oct 1, 2013 and Oct 3, 2013. The cancellation rate is computed by dividing the number of canceled (by client or driver) requests made by unbanned users by the total number of requests made by unbanned users.

For the above tables, your SQL query should return the following rows with the cancellation rate being rounded to two decimal places.

+------------+-------------------+
|     Day    | Cancellation Rate |
+------------+-------------------+
| 2013-10-01 |       0.33        |
| 2013-10-02 |       0.00        |
| 2013-10-03 |       0.50        |
+------------+-------------------+
*/

-- solution 1
SELECT trips_per_date.Request_at AS "Day", Round(coalesce(cancelled_trips.count_of_cancelled_trips, 0) / trips_per_date.count_of_trips, 2) as "Cancellation Rate"
FROM (
        SELECT Trips.Request_at, count(*) as count_of_cancelled_trips
        FROM  Trips JOIN Users as users_drivers ON Trips.Driver_Id = users_drivers.Users_Id JOIN Users as users_clients ON Trips.Client_Id = users_clients.Users_Id
        WHERE users_drivers.Banned = "No" AND users_clients.Banned = "No" AND (Trips.Status = "cancelled_by_driver" OR Trips.Status = "cancelled_by_client") 
        GROUP BY Trips.Request_at
    ) as cancelled_trips RIGHT JOIN ( 
        SELECT Request_at, count(*) as count_of_trips 
        FROM Trips JOIN Users as users_drivers ON Trips.Driver_Id = users_drivers.Users_Id JOIN Users as users_clients ON Trips.Client_Id = users_clients.Users_Id
        WHERE users_drivers.Banned = "No" AND users_clients.Banned = "No"
        Group by Request_at
    ) as trips_per_date ON cancelled_trips.Request_at = trips_per_date.Request_at
WHERE trips_per_date.Request_at >= Date("2013-10-01") AND trips_per_date.Request_at <= Date("2013-10-03")
ORDER BY trips_per_date.Request_at

-- solution 2
SELECT Trips.Request_at AS "Day", ROUND(count(IF(Trips.Status = "cancelled_by_driver" OR Trips.Status = "cancelled_by_client",TRUE,null)) / count(*), 2) as "Cancellation Rate"
FROM  Trips JOIN Users as users_drivers ON Trips.Driver_Id = users_drivers.Users_Id JOIN Users as users_clients ON Trips.Client_Id = users_clients.Users_Id
WHERE users_drivers.Banned = "No" AND users_clients.Banned = "No" -- AND ()  
    AND Trips.Request_at >= Date("2013-10-01") AND Trips.Request_at <= Date("2013-10-03")
GROUP BY Trips.Request_at
ORDER BY Trips.Request_at