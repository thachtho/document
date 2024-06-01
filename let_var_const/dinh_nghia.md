* Phạm vi:
    - VAR: 
        - Có phạm vi là globally-scoped. Nó không bị hạn chế trong block (khối mã).
        - Có thể khai báo lại biến khi sử dụng var.
        - Biến khai báo bằng var được hoisting lên đầu phạm vi của chúng và khởi tạo với giá trị undefined.

        ví dụ: 
                
                var a = 1;
                if (true) {
                    var a = 2;
                }

                console.log(a)
                =>> a lúc này sẽ có giá trị là 2 và var phạm vi truy cập là global.

    - LET:
        - Let có phạm vi là block-scoped, tức là chỉ tồn tại trong block mà nó được khai báo (bao gồm các block trong các cặp dấu {}).
        - Không thể khai báo lại biến đã được khai báo bằng let trong cùng phạm vi.
        
        ví dụ: 
                
                let a = 1;
                if (true) {
                    let a = 2;
                }

                console.log(a)
                =>> a lúc này sẽ có giá trị là 1 và let phạm vi truy cập là block.

    - Const:
        - Giống như let, const có phạm vi là block-scoped.
        - Bạn không thể khai báo lại biến đã được khai báo bằng const trong cùng phạm vi.
        - Biến khai báo bằng const không thể được gán lại giá trị mới sau khi nó đã được khai báo. Tuy nhiên, nếu biến đó là một đối tượng hoặc mảng, bạn có thể thay đổi thuộc tính hoặc phần tử bên trong đối tượng hoặc mảng đó.

   