import React, { useEffect, useState } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import { RrihTodoType } from "./models/interfaces";
import "react-datepicker/dist/react-datepicker.css";
import './App.scss';
const domain = 'https://kyugyo-back.herokuapp.com';
export const apiUrl = 'http://localhost:8000/api/rrih-todo'

function App() {
  const [userName, setUserName] = useState<JSX.Element>();
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
        date: date
      };
      axios.post(apiUrl, todo).then((e) => {
        window.location.reload();
      })
    }
    else {
      // TODO バリデーションエラー時の処理
      throw new Error('Validation Error');
    }
    // e.preventDefault();
  }

  const updateTodo = (todo) => {
    if (todo == null) {
      return null;
    }
    const updateTodo = {
      text: todoText,
      date: date
    };
    axios.put(`${apiUrl}/${todo._id}`, updateTodo)
      .then((res) => {
        setAllTodos(res.data);
      });
    // e.preventDefault();
  };

  const deleteTodo = (todo) => {
    if (todo == null) {
      return null;
    }
    axios.delete(`${apiUrl}/${todo._id}`, { data: todo })
    .then((e) => {
      window.location.reload();
    });
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
          <div className="mx-auto">
            <form className="form-group" method="post">
              <div>
                <label>期日</label>
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={date}
                  showTimeSelect
                  onChange={handleDateChange}
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
            return <li key={i} className="list-group-item list-group-item-light text-dark my-1">
              <div className="d-flex justify-content-between">
                <div className="">{todo.text}</div>
                <div className="">{todo.date.toString().split('T')[0]}</div>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="btn btn-outline-primary rrih-menu-button py-1 px-2 rounded-pill"
                  // onClick={() => {updateTodo(todo)}}
                >
                  update
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger rrih-menu-button py-1 px-2 rounded-pill ml-2"
                  onClick={() => {deleteTodo(todo)}}
                >
                  delete
                </button>
              </div>
            </li>;
          })}
        </ul>
      </div>
      {/* <footer className="bg-success text-light text-center fixed-bottom">&copy; {userName}</footer> */}
    </div>
  );
}

export default App;
