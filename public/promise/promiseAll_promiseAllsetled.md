# Promise.all, Promise.allSettled và Promise.race

Trong JavaScript, `Promise.all` và `Promise.allSettled` là hai phương pháp để xử lý nhiều Promise đồng thời. Dưới đây là giải thích chi tiết về từng phương pháp:

## `Promise.all`

`Promise.all` nhận vào một mảng các Promise và trả về một Promise mới. Promise mới này sẽ:
- Được giải quyết (resolve) khi **tất cả** các Promise trong mảng đã được giải quyết thành công.
- Bị từ chối (reject) ngay khi **bất kỳ** Promise nào trong mảng bị từ chối.

Kết quả trả về của `Promise.all` là một mảng chứa các giá trị của từng Promise đã giải quyết thành công, theo cùng thứ tự như trong mảng ban đầu.

* Ví dụ:

    ``` javascript

    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // [3, 42, "foo"]
    }).catch((error) => {
    console.log(error);
    });

    ```    
* Nếu bất kỳ Promise nào bị từ chối, Promise.all sẽ ngay lập tức trả về một Promise bị từ chối với lý do từ chối của Promise đầu tiên:

### `Promise.allSettled`
`Promise.allSettled` cũng nhận vào một mảng các Promise và trả về một Promise mới. Tuy nhiên, khác với Promise.all, Promise mới này sẽ:

- Được giải quyết khi tất cả các Promise trong mảng đã hoàn thành, dù chúng có được giải quyết (resolve) hay bị từ chối (reject).
- Kết quả trả về của Promise.allSettled là một mảng chứa các đối tượng cho từng Promise, mỗi đối tượng có dạng { status: "fulfilled", value: <giá trị> } nếu Promise được giải quyết thành công, hoặc { status: "rejected", reason: <lý do> } nếu Promise bị từ chối.

    * Ví dụ:

        ``` 
        const promise1 = Promise.resolve(3);
        const promise2 = new Promise((resolve, reject) => {
        setTimeout(reject, 100, 'Error occurred');
        });
        const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 200, 'foo');
        });

        Promise.allSettled([promise1, promise2, promise3]).then((results) => {
        console.log(results);
        // [
        //   { status: "fulfilled", value: 3 },
        //   { status: "rejected", reason: "Error occurred" },
        //   { status: "fulfilled", value: "foo" }
        // ]
        });
        ```
...
#### `Promise.race`
- `Promise.race` Nhận vào một mảng các Promise và trả về một Promise mới được trả về nhanh nhất, bất kể promise nhanh nhất được trả về thành công hay thất bại.

**** Tóm tắt:
    - Promise.all: Kết thúc thành công khi tất cả các Promise thành công, hoặc bị từ chối ngay khi một Promise bị từ chối.
    -  Kết thúc khi tất cả các Promise đã hoàn thành, bất kể là thành công hay thất bại, và trả về trạng thái và kết quả của từng Promise.