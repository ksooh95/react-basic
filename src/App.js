import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/detail.js';
import axios from 'axios';
import Cart from './pages/Cart.js';

export function App() {
    const [shoes] = useState(data);
    const [more, setMore] = useState(false);
    const [shoes2, setShoes2] = useState([]);
    const navigate = useNavigate();
    console.log(shoes);

    useEffect(() => {
        axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((data) => setShoes2(data))
            .catch((err) => {
                console.log('에러 :', err);
            });
    }, []);

    console.log('shoes2 : ', shoes2);

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/detail');
                            }}
                        >
                            detail
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/event');
                            }}
                        >
                            Event
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}

            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            메인페이지임
                            <div className="main-bg"></div>
                            <Items shoes={shoes} navigate={navigate} />
                            {more ? <Items2 shoes2={shoes2} /> : null}
                            <button
                                onClick={() => {
                                    setMore(true);
                                }}
                            >
                                더보기
                            </button>
                        </div>
                    }
                />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route
                    path="/cart"
                    element={
                        <div>
                            <Cart />
                        </div>
                    }
                />
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>멤버임</div>} />
                </Route>

                <Route path="/event" element={<Event />}>
                    <Route path="one" element={<>첫 주문시 양배추즙 서비스</>} />
                    <Route path="two" element={<>생일기념 쿠폰받기</>} />
                </Route>

                <Route path="*" element={<>없는페이지</>} />
            </Routes>
        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
        </div>
    );
}

function Event() {
    return (
        <>
            <h4>오늘의 이벤트</h4>
            <Link to="one">양배추 링크</Link>
            <br />
            <Link to="two">생일 링크</Link>
            <Outlet></Outlet>
        </>
    );
}

const Items = (props) => {
    return (
        <div className="item_wrap">
            {props.shoes.map((a, i) => {
                return (
                    <Link to={`/detail/${i}`}>
                        <div className="item">
                            <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} alt="" />
                            <h4>{a.title}</h4>
                            <p>{a.price}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

const Items2 = (props) => {
    return (
        <div className="item_wrap">
            {props.shoes2.data.map((a, i) => {
                return (
                    <div className="item">
                        <img src={`https://codingapple1.github.io/shop/shoes${i + 4}.jpg`} alt="" />
                        <h4>{a.title}</h4>
                        <p>{a.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default App;
