1. JavaScript là đơn luồng:
    - Chỉ có một luồng thực thi duy nhất cho mã JavaScript.
2. Event Loop và Event Queue:
    - Khi các tác vụ bất đồng bộ (như setTimeout) hết hạn, callback của chúng được đẩy vào event queue.
    - Event loop liên tục kiểm tra event queue và đẩy các callback vào luồng chính để thực thi khi luồng chính rảnh rỗi(nghĩa là khi luồng chính thực hiện xong các tác vụ thì evenloop mới thực hiện).
3. Thực thi các callback:
    - Các callback trong event queue được thực thi lần lượt, không đồng thời, vì event loop chỉ xử lý một tác vụ tại một thời điểm.
4. Ví dụ với setTimeout:
    ```
        console.log("Bắt đầu");

        setTimeout(() => {
        console.log("Timeout 1");
        }, 500);

        setTimeout(() => {
        console.log("Timeout 2");
        }, 500);

        setTimeout(() => {
        console.log("Timeout 3");
        }, 500);

        console.log("Kết thúc");
    ```

    - "Bắt đầu" và "Kết thúc" được in ra ngay lập tức.
    - Sau 500ms, các callback Timeout 1, Timeout 2, và Timeout 3 hết hạn và được đẩy vào event queue.
    - Event loop thực thi các callback lần lượt, in "Timeout 1", "Timeout 2", và "Timeout 3" theo thứ tự.