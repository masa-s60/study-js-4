const title = 
`===========================
現在持っているタスクの一覧
===========================`;

const cleaning = {
  action:'机を片付ける',
  genre:'掃除'
};

const shopping = {
  action:'牛乳を買う',
  genre:'買い物'
};

const motion = {
  action:'散歩する',
  genre:'運動'
};

const taskList = [cleaning, shopping, motion];

const displayTaskList = () => {
  console.log(title);
  taskList.forEach((value, index) => {
    console.log(`${index}：[内容]${taskList[index].action}、[ジャンル]${taskList[index].genre}`);
  });
}

function task(action, genre) {
  this.action = action;
  this.genre = genre;
}

const addTask = (addAction, addGenre) => {
  const newTask = new task(addAction, addGenre);
  taskList.push(newTask);
}

displayTaskList();
const inputAction = prompt('タスクを入力して下さい');
const inputGenre = prompt('ジャンルを入力して下さい');
addTask(inputAction, inputGenre);
displayTaskList();
alert('新しいタスク追加しました。');
const nextAction = prompt('「確認、追加、削除、終了」の４つのいずれかを入力してください');