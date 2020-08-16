import React, { useEffect, useState } from 'react';
import axios from "axios";
// import DatePicker from "react-datepicker";
// import { RrihTodoType } from "./models/interfaces";
import "react-datepicker/dist/react-datepicker.css";
import './App.scss';
const domain = 'https://kyugyo-back.herokuapp.com';
export const apiUrl = `${domain}/api/rrih-todo`;

function App() {
  // const [userName, setUserName] = useState<JSX.Element>();
  const [avatarIcon, setAvatarIcon] = useState<JSX.Element>();
  // const [date, setDate] = useState<Date>();
  // const [todoText, setTodoText] = useState<String>('');
  // const [allTodos, setAllTodos] = useState<RrihTodoType[]>([]);

  // const getAllTodos = async () => {
  //   await axios.get(apiUrl)
  //     .then((res) => {
  //       console.log(res.data);
  //       setAllTodos(res.data);
  //     })
  // }

  const getUserWithGitHub = async () => {
    await axios.get('https://api.github.com/users/rrih')
      .then((res) => {
        // const r: JSX.Element = <a href={res.data.html_url} className="text-decoration-none text-light">{res.data.name}</a>;
        // setUserName(r);
        const au = <img src={res.data.avatar_url} alt="rrih-avatar-url" width={30}/>
        setAvatarIcon(au);
      });
  };

  useEffect(() => {
    // getAllTodos();
    getUserWithGitHub();
    
  }, []);

  // const handleDateChange = date => {
  //   setDate(date);
  // }

  // const handleTodoSubmit = (e) => {
  //   if (todoText != null && date != null) {
  //     const todo = {
  //       text: todoText,
  //       date: date
  //     };
  //     axios.post(apiUrl, todo).then((e) => {
  //       window.location.reload();
  //     })
  //   }
  //   else {
  //     // TODO バリデーションエラー時の処理
  //     throw new Error('Validation Error');
  //   }
  //   // e.preventDefault();
  // }

  // const updateTodo = (todo) => {
  //   if (todo == null) {
  //     return null;
  //   }
  //   const updateTodo = {
  //     text: todoText,
  //     date: date
  //   };
  //   axios.put(`${apiUrl}/${todo._id}`, updateTodo)
  //     .then((res) => {
  //       setAllTodos(res.data);
  //     });
  //   // e.preventDefault();
  // };

  // const deleteTodo = (todo) => {
  //   if (todo == null) {
  //     return null;
  //   }
  //   axios.delete(`${apiUrl}/${todo._id}`, { data: todo })
  //   .then((e) => {
  //     window.location.reload();
  //   });
  //   // e.preventDefault();
  // }

  return (
    <div>
      <nav className="navbar bg-success text-light">
        <div>rrih</div>
        <div>
          <a href="https://github.com/rrih">{avatarIcon}</a>
        </div>
      </nav>
      <div className="rrih-w mx-md-auto container pt-md-2">
        <div className="text-center">
          <div className="mx-auto">
            <div className="rrih-top-icon m-3">
              {avatarIcon}
            </div>
            <a className="btn btn-outline-dark rounded-pill" href="//twitter.com/share" data-text="rrih" data-url="https://rrih.github.io" data-lang="ja">
              <i className="fab fa-twitter"></i> ツイートする
            </a>
          </div>
        </div>
      </div>
      {/* <footer className="bg-success text-light text-center">&copy; {userName}</footer> */}
    </div>
  );
}

export default App;
