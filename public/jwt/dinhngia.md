* Là 1 string cấu trúc gồm 3 phần nối với nhau bởi dấu chấm:
    - Phần đầu:
        - Header: gồm type thường là jwt, và thuật toán dùng để mã hóa.
    - Phần 2: 
        - Payload: Dùng xác định còn sống hay không và chứa 1 số thông tin của  người dùng.
    - Phần 3: 
        - Sinature(chữ ký): Là 1 string mã hóa header và payload, và 1 string bí mật nó để kiếm tra tính toàn vẹn của dữ liệu trong quá trình gửi đi
        - Ví dụ mã bí mật sẽ mã hóa header và payload ở client và gửi mã đó lên server, server tiếp tục mã hóa header và payload 1 lần nữa tạo ra 1 mã mới, sau đó 2 mã này sẽ so sánh với nhau để kiểm tra tính toàn ven dữ liệu
    