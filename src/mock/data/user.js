import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=04d93bc2950a304e5277a8fce1f88bbe/30adcbef76094b365569542ba1cc7cd98c109d79.jpg',
    name: '王小明'
  }
];

const Users = [
  {
    id: 1,
    description: 'I have __________ apple.',
    option_A: 'an',
    option_B: 'a',
    option_C: 'the',
    option_D: '/',
    correct_answer: 'A',
    reason: '非元音发音开头的单词用不定冠词a表示非特指',
    point: '冠词'
  },
  {
    id: 2,
    description: '__________ are bald.',
    option_A: 'Programmers',
    option_B: 'Programmer',
    option_C: 'Programs',
    option_D: 'Program',
    correct_answer: 'A',
    reason: '理解句意 单复数',
    point: '名词'
  }
];

export { LoginUsers, Users };
