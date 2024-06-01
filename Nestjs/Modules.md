- Modules là nơi tổ chức và đóng gói các thành phần của ứng dụng trong NestJS
- Mỗi ứng dụng NestJS có thể có nhiều modules, mỗi module đóng vai trò như một phần tử độc lập, chứa các controllers, services, providers, và các thành phần khác.

* Các thành phần trong 1 module:
    - Imports: Cho phép bạn import các modules khác vào module hiện tại.
    - Controller: sử dụng để xử lý các yêu cầu HTTP từ clients và gửi lại các phản hồi. Trong một module, bạn có thể định nghĩa một hoặc nhiều controllers. Các controllers này thường được gắn kết với các tuyến đường cụ thể và xử lý các yêu cầu tương ứng.
    -  Providers: Là nơi chứa các thành phần inject vào các controllers, services, hoặc modules khác.
    - Exports: Xuất các thành phần của module để chúng có thể được sử dụng bên ngoài của module hiện tại.