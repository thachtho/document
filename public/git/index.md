1. git reflog:
    - Lấy lịch sử các commit kể các commit đã xóa.
2. git log --oneline:
    - Lấy các commit chưa xóa.
3. git reset --soft [địa_chỉ] : ví dụ "git reset --soft 8a37457"
    - Reset lại 1 commit theo địa chỉ của commit đó
4. git branch -D [ten_branch]
    - Xóa 1 branch
5. Gộp nhiều commit thành 1 commit:
    - Lấy lịch sử commit: git log --oneline
    - Reset lại 1  commit nào đó: git reset --soft d0e7002
    - Lệnh này để chỉ có 1 commit duy nhất sau khi gộp nhiều commit lại với nhau: git commit --amend --no-edit
    - Git add . và commit lên.