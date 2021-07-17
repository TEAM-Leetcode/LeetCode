# Write your MySQL query statement below

# 제일 간단하게 푸는 방법입니다
SELECT Email
FROM Person
GROUP BY Email
HAVING COUNT(*) > 1;

# Sub-Query를 해서 하는 방법입니다 (여기선 HAVING 대신 WHERE 써서 해도 됩니다)
SELECT temp.Email
FROM (SELECT Email, COUNT(*) AS Count
     FROM Person
     GROUP BY Email) AS temp
WHERE temp.Count > 1;