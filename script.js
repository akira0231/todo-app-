// HTMLの要素を取得
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// 「追加」ボタンがクリックされたときの処理
addButton.addEventListener('click', addTask);
// 入力欄でEnterキーが押されたときの処理
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// タスクを追加する関数
function addTask() {
    const taskText = taskInput.value.trim(); // 入力されたテキスト（前後の空白を削除）

    // 入力が空でなければタスクを追加
    if (taskText !== '') {
        // li要素（リストの1行）を作成
        const li = document.createElement('li');
        
        // タスクのテキスト部分を作成
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        // タスクをクリックしたら完了・未完了を切り替える
        taskSpan.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        
        // 削除ボタンを作成
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // li要素にテキストと削除ボタンを追加
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);

        // ul要素（リスト全体）にli要素を追加
        taskList.appendChild(li);

        // 入力欄を空にする
        taskInput.value = '';
    }
}
