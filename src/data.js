let users = [
  {
    id: 1,
    name: "Jhon Smith",
    salary: 10800,
    birthday: "12.05.1995",
  },
  {
    id: 2,
    name: "Monica Loretti",
    salary: 8000,
    birthday: "10.31.2000",
  },
  {
    id: 3,
    name: "Viktor Wide",
    salary: 9500,
    birthday: "07.22.2003",
  },
  {
    id: 4,
    name: "Sam In",
    salary: 14000,
    birthday: "09.01.1997",
  },
  {
    id: 5,
    name: "Olga Fish",
    salary: 4600,
    birthday: "01.27.2998",
  },
];

export function getUsers() { return users; }
export function getUser(id) { return users.find((user) => user.id === id); }
export function deleteUser(id) { users = users.filter((user) => user.id !== id); }