import React, { useEffect, useState } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import { RrihTodoType } from "./models/interfaces";
import "react-datepicker/dist/react-datepicker.css";
import './App.scss';
export const apiUrl = 'https://kyugyo-back.herokuapp.com/api/rrih-todo'

function App() {
  // const userNameWithGitHub = <a href="https://github.com/rrih" className="text-decoration-none text-light">rrih</a>;
  const [userName, setUserName] = useState<JSX.Element>();
  // const [isLogin, setIsLogin] = useState<Boolean>(false);
  const [avatarIcon, setAvatarIcon] = useState<JSX.Element>();
  const [date, setDate] = useState<Date>();
  const [todoText, setTodoText] = useState<String>('');
  const [allTodos, setAllTodos] = useState<RrihTodoType[]>([]);

  const getAllTodos = async () => {
    await axios.get(apiUrl)
      .then((res) => {
        console.log(res.data);
        setAllTodos(res.data);
      })
  }

  const getUserWithGitHub = async () => {
    await axios.get('https://api.github.com/users/rrih')
      .then((res) => {
        const r: JSX.Element = <a href={res.data.html_url} className="text-decoration-none text-light">{res.data.name}</a>;
        setUserName(r);
        const au = <img src={res.data.avatar_url} alt="rrih-avatar-url" width={30}/>
        setAvatarIcon(au);
      });
  };

  useEffect(() => {
    getAllTodos();
    getUserWithGitHub();
    
  }, []);

  const handleDateChange = date => {
    setDate(date);
  }

  const handleTodoSubmit = (e) => {
    if (todoText != null && date != null) {
      const todo = {
        text: todoText,
        date: date.toString().split('T')[0]
      };
      axios.post(apiUrl, todo).then((e) => {
        window.location.reload();
      })
    }
    else {
      throw new Error('Validation Error');
    }
    // e.preventDefault();
  }

  return (
    <div>
      <nav className="navbar bg-success text-light">
        <div>{userName}のTODO</div>
        <div>
          ただ {userName} {avatarIcon} がやることを並べるだけのサイト
        </div>
      </nav>
      <div className="rrih-w mx-md-auto container pt-md-2">
        <div className="d-md-flex">
          <div className="ml-md-5">
            {/* <div className="border rounded py-md-3 px-md-5 my-md-2">
              いつまでに？
            </div> */}
            <form className="form-group" method="post">
              <div>
                <label>期日</label>
                <DatePicker
                  // dateFormat="Pp"
                  dateFormat="yyyy/MM/dd"
                  selected={date}
                  showTimeSelect
                  onChange={handleDateChange}
                  // customInput={CustomInput}
                />
              </div>
              <div>
                <label>内容</label>
                <input
                  type="text"
                  placeholder="todo"
                  className="input todo..."
                  name="todo"
                  onChange={(e) => {setTodoText(e.target.value)}}
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleTodoSubmit}
              >
                TODOを生成する
              </button>
            </form>
            
          </div>
        </div>
                
        <ul className="list-group mb-5">
          {allTodos.map((todo, i) => {
            return <li key={i} className="list-group-item list-group-item-light text-dark my-1 d-flex justify-content-between">
              {/* date: {todo.date}text: {todo.text} */}
              
              {/* <DatePicker
                // dateFormat="Pp"
                dateFormat="yyyy/MM/dd"
                selected={todo.date}
                showTimeSelect
                onChange={(e) => handleDateChange(e)}
                // customInput={CustomInput}
              /> */}
              <div className="">{todo.text}</div>
              <div className="">{todo.date}</div>
            </li>;
          })}
        </ul>
      </div>
      {/* <footer className="bg-success text-light text-center fixed-bottom">&copy; {userName}</footer> */}
    </div>
  );
}

export default App;
