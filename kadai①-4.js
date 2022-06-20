const title = 
`===========================
現在持っているタスクの一覧
===========================`;
const taskAction = ['机を片付ける', '牛乳を買う', '散歩する'];
const taskGenre = ['掃除', '買い物', '運動'];

function newTask(addAction, addGenre) {
  taskAction.push(addAction);
  taskGenre.push(addGenre);

  console.log(title);
  for (let i = 0; i < taskAction.length; i++) {
  console.log(`${i}：[内容]${taskAction[i]}、[ジャンル]${taskGenre[i]}`);
  }
}

console.log(title);
for (let i = 0; i < taskAction.length; i++) {
  console.log(`${i}：[内容]${taskAction[i]}、[ジャンル]${taskGenre[i]}`);
}

const inputTaskAction = 'タスクを入力して下さい';
const inputTaskGenre = 'ジャンルを入力して下さい';

const inputTask = new newTask(inputTaskAction, inputTaskGenre);

