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
        <div>
          <a href="https://rrih.github.io" className="text-light">rrih</a>
        </div>
        <div>
          <a href="https://github.com/rrih">{avatarIcon}</a>
        </div>
      </nav>
      <div className="rrih-w mx-md-auto container pt-md-2">
        <div className="text-center">
          <div className="mx-auto">
            <div className="profile text-left">
              <div className="border-bottom">
              <h2>rrih</h2>
              紙を折り続けて死ぬ
              </div>
              <div className="border-bottom">
              <h3>リンク</h3>
              <ul>
                <li>
                  Twitter: <a href="https://twitter.com/rrih_dev">@rrih_dev</a>
                </li>
                <li>
                GitHub: <a href="https://github.com/rrih">@rrih</a>
                </li>
                <li>
                はてなブログ: <a href="https://rrih.hatenablog.com">https://rrih.hatenablog.com</a>
                </li>
                <li>
                Qiita: <a href="https://qiita.com/rrih">@rrih</a>
                </li>
                <li>
                  Facebook: <a href="https://facebook.com/rsklv">@rsklv</a>
                </li>
                <li>
                  instagram: <a href="https://instagram.com/roi_web">@roi_web</a>
                </li>
                <li>
                  wantedly: <a href="https://www.wantedly.com/users/43733929">リンク</a>
                </li>
              </ul>

              
              </div>

              <div className="border-bottom">
                <h3>連絡先</h3>
                <ul>
                  <li>
                    メールアドレス: rsklvあっとicloud.com
                  </li>
                </ul>
                "あっと"の部分を"@"に変えてください。<br/>
                メールも一応確認していますが、最も反応が早いものはTwitterです。
              </div>

              <div className="border-bottom">
                <h3>web</h3>
                <ul>
                  <li>
                    <a href="https://rrih.github.io/kyugyo">https://rrih.github.io/kyugyo</a>
                  </li>
                  店舗の休業情報のまとめサイト
                  <li>
                    <a href="http://rrih.github.io/sparkle-of-life">http://rrih.github.io/sparkle-of-life</a>
                  </li>
                  いのちのかがやき
                  <li>
                    <a href="https://feel-prod.herokuapp.com">https://feel-prod.herokuapp.com</a>
                  </li>
                  お気持ちを表明するサイト
                </ul>
              </div>
              
              <div className="border-bottom">
                <h3>使用技術</h3>
                <ul>
                  <li>CakePHP/PHP</li>
                  <li>MySQL</li>
                  <li>HTML/CSS/JavaScript</li>
                </ul>
              </div>
              <div className="border-bottom">
                <h3>aboutme</h3>
                <ul>
                  <li> 
                    <h4>居場所</h4>
                    <ul>
                      <li>群馬</li>
                    </ul>
                  </li>
                  <li>
                    <h4>career</h4>
                    <ul>
                      <li>2017年4月〜2021年3月 東京電機大学理工学部理工学科</li>
                      <li>2019年3月〜2020年7月 某社 webエンジニア, インターン</li>
                      <li>2020年9月〜現在 某社, 開発部 インターン</li>
                    </ul>
                  </li>
                  
                  <li>
                    <h4>興味/関心/趣味領域</h4>
                    <ul>
                      <li>
                        <a href="https://www.origami-noa.jp/%E3%81%8A%E3%82%8A%E3%81%8C%E3%81%BF%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/%E3%81%8A%E3%82%8A%E3%81%8C%E3%81%BFq-a/#:~:text=%E8%BF%91%E5%B9%B4%E3%81%AF%E3%80%81%E6%96%B0%E3%81%97%E3%81%84%E6%8A%98%E3%82%8A%E6%96%B9,%E5%89%B5%E4%BD%9C%E6%8A%98%E3%82%8A%E7%B4%99%E3%80%8D%E3%81%A8%E3%81%84%E3%81%84%E3%81%BE%E3%81%99%E3%80%82">
                          創作折り紙
                        </a>
                      </li>
                      <li>
                        <a href="https://ja.wikipedia.org/wiki/Web%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0#%E3%82%B5%E3%83%BC%E3%83%90%E3%82%B5%E3%82%A4%E3%83%89">
                          web dev
                        </a>
                      </li>
                      <li>イラスト/絵</li>
                      <li>甘いもの</li>
                      <li>サービス開発対象としてのSNS</li>
                      <li>珈琲</li>
                      <li><a href="https://www.monsterenergy.com/">Monster Energy</a></li>
                      <li>お酒</li>
                      <li>
                        漫画/アニメ/読書/ゲーム
                        <ul>
                          <li><a href="https://ja.wikipedia.org/wiki/NEW_GAME!">
                          NEWGAME</a></li>
                          <li>
                            <a href="https://ja.wikipedia.org/wiki/%E3%83%9D%E3%82%B1%E3%83%83%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC">
                              Pokémon
                            </a>
                          </li>
                          <li>EVANGELION</li>
                          <li>DEATH NOTE</li>
                          <li>Sword Art Online</li>
                          <li>涼宮ハルヒの憂鬱</li>
                          <li>Attack on Titan</li>
                          <li>星新一</li>
                          <li>鬼滅の刃</li>
                        </ul>
                      </li>
                      <li>Apple devise</li>
                      <li>一人暮らし</li>
                      <ul><li>家探し中</li></ul>
                      <li>より良い睡眠</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <a className="btn btn-outline-dark rounded-pill py-3 px-4 font-weight-bold" href="//twitter.com/share" data-text="rrih" data-url="https://rrih.github.io" data-lang="ja">
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
