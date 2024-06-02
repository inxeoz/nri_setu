// Initialize default values
export let state = {
  loggedIn: false,
  cookies: '',
  name: 'usr_name',
  username: '',
  password: '',
  utype: 'Student',
  session: '2021-22',
  theme: 'dark',
  margin: {
    left: 15,
    right: 15,
  },
  size: 30,
  temp: '',
  notice: '',
  transactions: '',
  studentdue: [
    {
      label: '',
      value: '',
      name: '',
    },
  ],
  verified: false,
  slider_images: ['https://images.wallpapersden.com/image/download/winking-anime-girl_a2xtZ2yUmZqaraWkpJRobWlmrWlla2Y.jpg', 'https://th.bing.com/th/id/OIP.Qq5n2QeuwVBuRFFIplUQZQHaNK?rs=1&pid=ImgDetMain'],
  headings: [],
};

// Update function to modify state
export function update(type, value) {
  switch (type) {
    case 'margin':
      state.margin = { ...state.margin, ...value };
      break;
    case 'studentdue':
      if (value === 'clear') {
        state.studentdue = [];
      } else {
        state.studentdue.push(value);
      }
      break;
    default:
      state[type] = value;
  }
}
