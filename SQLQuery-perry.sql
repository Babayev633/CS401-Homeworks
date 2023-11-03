-- 1. Create Table called "Students" and add these columns ("StudentID","firstName",'lastName','age','university','city').
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    age INT,
    university VARCHAR(100),
    city VARCHAR(100)
);

-- 2. Add all CS401 students to "Students" table.
INSERT INTO Students (StudentID, firstName, lastName, age, university, city)
VALUES 
    (1, 'Parviz', 'Babazada', 22, 'ADA University', 'Baku'),
    (2, 'Rafiq', 'Javadov', 22, 'ADA University', 'Baku'),
    (3, 'Vuqar', 'Jafarov', 22, 'BDU', 'Baku'),
	(4, 'Akbar', 'Abilov', 22, 'ADA University', 'Baku'),
	(5, 'Aslan', 'Qasimli', 24, 'Azerbaijan University', 'Baku'),
	(6, 'Elnur', 'Necefli', 21, 'BMU', 'Baku'),
	(7, 'Natiq', 'Teyyublu', 19, 'BSU', 'Baku');

-- 3. Add yourself twice
INSERT INTO Students (StudentID, firstName, lastName, age, university, city)
VALUES 
    (8, 'Parviz', 'Babazada', 22, 'ADA University', 'Baku'),
    (9, 'Parviz', 'Babazada', 22, 'ADA University', 'Baku');

-- 4. Execute All students
SELECT * FROM Students;

-- 5. Execute only age column
SELECT age FROM Students;

-- 6. Execute only firstName and lastName columns
SELECT firstName, lastName FROM Students;

-- 7. Execute students where first name starts with "M" or "N"
SELECT * FROM Students WHERE firstName LIKE 'M%' OR firstName LIKE 'N%';

-- 8. Execute all students where firstName NOT equal "Perviz"
SELECT * FROM Students WHERE firstName <> 'Perviz';

-- 9. Execute students where second letter starts with 'U' in firstName
SELECT * FROM Students WHERE SUBSTRING(firstName, 2, 1) = 'U';

-- 10. Update city to 'Rome' where StudentID is equal to 2 and 3
UPDATE Students SET city = 'Rome' WHERE StudentID IN (2, 3);

-- 11. Execute all students where age greater than 20
SELECT * FROM Students WHERE age > 20;

-- 12. Order by age (Sort) | ASC
SELECT * FROM Students ORDER BY age ASC;

-- 13. Order by firstName | DESC
SELECT * FROM Students ORDER BY firstName DESC;

-- 14. Execute only unique students (using DISTINCT)
SELECT DISTINCT * FROM Students;

-- 15. Sum all students' age
SELECT SUM(age) FROM Students;

-- 16. Find youngest student
SELECT * FROM Students WHERE age = (SELECT MIN(age) FROM Students);

-- 17. Find eldest student
SELECT * FROM Students WHERE age = (SELECT MAX(age) FROM Students);

-- 18. Count columns
SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Students';

-- 19. Avg students' age
SELECT AVG(age) FROM Students;

-- 20. Delete student where StudentID is equal 5
DELETE FROM Students WHERE StudentID = 5;

-- 21. Execute students where firstName='Perviz' or firstName='Ilkin' (using IN operator)
SELECT * FROM Students WHERE firstName IN ('Perviz', 'Ilkin');

-- 22. Execute students where age between 22 and 29
SELECT * FROM Students WHERE age BETWEEN 22 AND 29;

-- 23. Select Top 4 students
SELECT TOP 4 * FROM Students;

-- 24. Delete Students table
DROP TABLE Students;
