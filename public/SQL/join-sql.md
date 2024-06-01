* Join: Kết hợp dữ liệu từ nhiều bảng.
1. LEFT JOIN:
    - LEFT JOIN trả về tất cả các hàng từ bảng bên trái, cộng với các hàng từ bảng bên phải, khớp với điều kiện kết nối. Nếu không có bản ghi nào khớp, các cột từ bảng bên phải sẽ có giá trị NULL.
2. RIGHT JOIN:
    - Trả về tất cả các hàng từ bảng bên phải, cộng với các hàng từ bảng bên trái mà khớp với điều kiện kết nối. Nếu không có bản ghi nào khớp, các cột từ bảng bên trái sẽ có giá trị NULL
3. FULL JOIN:
    - Kết hợp cả hai bảng - bảng bên trái và bảng bên phải, Nếu không có bản ghi nào khớp, các cột từ bảng không có bản ghi sẽ có giá trị NULL.
4. INNER JOIN(JOIN): 
    - Kết hợp cả 2 bảng và phải khớp điều kiện kết nối