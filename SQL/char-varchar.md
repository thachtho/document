1. CHAR: 
	- Có kích thước cố định, sẽ chiếm đủ bằng giá trị khai báo, nếu không đủ sẽ lấp bằng khoảng trắng
	- Vì cố định nên  truy vấn và so sánh dữ liệu có thể nhanh hơn so với VARCHAR.
	- tốn dung lượng lưu trữ vì các giá trị ngắn hơn vẫn phải sử dụng toàn bộ không gian đã định
2. VARCHAR:
	- Có kích thước thay đổi, chỉ sử dụng không gian cần thiết cho dữ liệu thực tế
	- Có thể chậm hơn một chút so với CHAR do kích thước thay đổi

* Tóm lại:
	- CHAR phù hợp cho các dữ liệu có độ dài cố định hoặc gần cố định, như mã số, mã sản phẩm, hoặc trạng thái.
	- VARCHAR phù hợp cho các dữ liệu có độ dài thay đổi, như tên người, địa chỉ email, hoặc mô tả.



* NCHAR và NVARCHAR là các biến thể của CHAR và VARCHAR được thiết kế để hỗ trợ các chuỗi ký tự Unicode
ví dụ Unicode thì có thể lưu trữ bất kỳ ngôn ngữ nào