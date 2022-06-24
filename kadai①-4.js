const title = 
`===========================
現在持っているタスクの一覧
===========================`;

const tasks = [
  {
    name:'机を片付ける',
    genre:'掃除'
  },
  {
    name:'牛乳を買う',
    genre:'買い物'
  },
  {
    name:'散歩する',
    genre:'運動'
  }
];

const displayTaskList = () => {
  console.log(title);
  tasks.forEach((task, index) => {
    console.log(`${index}：[内容]${tasks[index].name}、[ジャンル]${tasks[index].genre}`);
  });
}

function CreateTask(name, genre) {
  return{
    name,
    genre
  }
}

const addTask = (addAction, addGenre) => {
  tasks.push(CreateTask(addAction, addGenre));
  displayTaskList();
}

displayTaskList();
const inputAction = prompt('タスクを入力して下さい');
const inputGenre = prompt('ジャンルを入力して下さい');
addTask(inputAction, inputGenre);
alert('新しいタスク追加しました。');
const nextAction = prompt('「確認、追加、削除、終了」の４つのいずれかを入力してください');