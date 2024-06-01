const express = require('express');
const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it')();

const app = express();

const publicDirectoryPath = path.join(__dirname, 'public');

app.use(express.static(publicDirectoryPath));

// Middleware để xử lý route '/'
app.get('/', (req, res) => {
    // Đọc thư mục và tạo danh sách các thư mục và tệp
    fs.readdir(publicDirectoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Hiển thị danh sách thư mục và tệp
        let fileList = '<ol>';
        files.forEach(file => {
            // Kiểm tra xem đối tượng là thư mục hay tệp
            const isDirectory = fs.statSync(path.join(publicDirectoryPath, file)).isDirectory();
            if (isDirectory) {
                fileList += `<li style="margin-bottom: 10px"><a href="/${file}/">${file}</a></li>`;
            } else if (path.extname(file) === '.md') {
                fileList += `<li style="margin-bottom: 10px"><a href="/file/${encodeURIComponent(file)}">${file}</a></li>`;
            }
        });
        fileList += '</ol>';

        res.send(`<h1>Danh Sách</h1>${fileList}`);
    });
});

// Middleware để xử lý route '/file/:fileName'
app.get('/file/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(publicDirectoryPath, fileName);

    // Kiểm tra xem tệp tồn tại không
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('Error accessing file:', err);
            return res.status(404).send('File Not Found');
        }

        // Đọc nội dung tệp
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).send('Internal Server Error');
            }

            // Nếu là tệp Markdown (.md), chuyển đổi nó sang HTML trước khi gửi về cho client
            if (path.extname(fileName) === '.md') {
                const htmlContent = markdownIt.render(data);
                return res.send(htmlContent);
            }

            // Nếu không phải tệp Markdown, gửi nội dung tệp trực tiếp
            res.type('text/plain').send(data);
        });
    });
});

// Middleware để xử lý route '/:directoryName/'
app.get('/:directoryName/', (req, res) => {
    const directoryName = req.params.directoryName;
    const directoryPath = path.join(publicDirectoryPath, directoryName);

    // Đọc thư mục và tạo danh sách các thư mục và tệp
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Hiển thị danh sách thư mục và tệp
        let fileList = `<h2>Kiến thức trong "${directoryName}"</h2><ol>`;
        files.forEach(file => {
            // Kiểm tra xem đối tượng là thư mục hay tệp
            const isDirectory = fs.statSync(path.join(directoryPath, file)).isDirectory();
            if (isDirectory) {
                fileList += `<li style="margin-bottom: 10px"><a href="/${directoryName}/${file}/">${file}</a></li>`;
            } else if (path.extname(file) === '.md') {
                fileList += `<li style="margin-bottom: 10px"><a href="/file/${encodeURIComponent(directoryName + '/' + file)}">${file}</a></li>`;
            }
        });
        fileList += '</ol>';

        res.send(fileList);
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
