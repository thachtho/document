1. Trong MySQL, bạn có thể sử dụng LIMIT và OFFSET để thực hiện phân trang.
    ```  
    SELECT *
    FROM Employees
    ORDER BY EmployeeID
    LIMIT 10 OFFSET 0;  -- Trang đầu tiên (1-10)
2. Trong SQL Server (2012 trở lên), bạn có thể sử dụng OFFSET và FETCH NEXT để phân trang.
    ```
    SELECT *
    FROM Employees
    ORDER BY EmployeeID
    OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;  -- Trang đầu tiên