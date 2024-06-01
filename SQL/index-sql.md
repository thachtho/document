1. Định nghĩa:
    - Index  là một cấu trúc dữ liệu đặc biệt được sử dụng để cải thiện tốc độ truy vấn, giúp định vị, trỏ tới địa chỉ dữ liệu trong 1 bảng, như mục lục 1 cuốn sách, lưu trữ đâu đó trong bộ nhớ của chúng ta.
2. Các kiểu index:
    1. Hash index: 
        -Được tổ chức dưới dạng key-value với key là giá trị của cột, value là địa chỉ được băm ra từ giá trị đó, nó không quan tâm về mặt thứ tự, 
        -Mạnh mẽ khi dùng với toán tử =, <>, IN, NOT IN
        -Không hữu ích khi dùng với >,<, LIKE tại vì nó không có thứ tự, nó chỉ biết tương ứng với chuỗi là 1 mã số gì đó thôi.
        -Cũng không tối ưu cho ORDER BY vì nó không biết phần tử tiếp theo là phần tử nào.
    2. B-Tree:
        -Tổ chức dưới dạng cây, tổ chức theo thứ tự tăng dần(lớn về bên phải nhỏ về bên trái), giúp tìm giá trị nhanh chóng bằng cách duyệt qua cây
        -Hầu hết các hệ quản trị cơ sở dữ liệu đang dùng.
3. Cẩn trọng:
    - Tốn bộ nhớ.
    - Chậm insert hay update vì phải update phải re-index và insert thì phải create index
4. Lệnh tạo index:
    - CREATE INDEX idx_tenindex on TABLE COLUMN

* Các trường hợp sql tự đánh index:
    - Khoá chính
    - Khoá ngoại
    - Các cột unique

* Cách xem thống kê 1 câu lệnh sql(quét qua bao nhiêu dòng, bao lâu, ...)
    - SET STATISTICS IO ON;
        ...
    - SET STATISTICS IO OFF;