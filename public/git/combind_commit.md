* Gộp nhiều commit thành 1 commit:
    - Lấy lịch sử commit: git log --oneline
    - Reset lại 1  commit nào đó: git reset --soft d0e7002
    - Lệnh này để chỉ có 1 commit duy nhất sau khi gộp nhiều commit lại với nhau: git commit --amend --no-edit
    - Git add . và commit lên.