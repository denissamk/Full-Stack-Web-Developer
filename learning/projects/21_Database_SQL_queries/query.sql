-- 1. INSERT
-- INSERT INTO cars (
--   brand, model, year, price, color, condition, sold
-- ) VALUES (
--   'Ford', 'Escort RS2000', 1978, 39000, 'blue', 4, FALSE
-- ), (
--   'Aston Martin', 'V8 Vantage', 1977, 145000, 'dark green', 5, FALSE
-- );

-- 2. UPDATE
-- UPDATE cars
-- SET sold = TRUE
-- WHERE brand = 'Ford' AND model = 'Escort RS2000';

-- 3. DELETE
DELETE FROM cars
WHERE condition = 0;