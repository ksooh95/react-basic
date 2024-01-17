import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
    const [text, setText] = useState('');
    const [탭, 탭변경] = useState(0);
    const [detailFade, setDetailFade] = useState('');

    useEffect(() => {
        setDetailFade('end');
    }, []);

    useEffect(() => {
        if (isNaN(text)) {
            alert('그러지마시오');
        }
    }, [text]);

    const [count, setCount] = useState(0);

    const { id } = useParams();
    const imgid = parseInt(id) + 1;
    const findItem = props.shoes.find((x) => x.id == id);

    return (
        <div className={`container start ${detailFade}`}>
            <input
                type="text"
                onChange={(e) => {
                    setText(e.target.value);
                }}
                value={text}
            />
            {alert ? <Alert /> : null}
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {count}버튼
            </button>
            <div>-------------------------------</div>
            <div className="tab_btn">
                <button
                    onClick={() => {
                        탭변경(0);
                    }}
                >
                    탭0
                </button>
                <button
                    onClick={() => {
                        탭변경(1);
                    }}
                >
                    탭1
                </button>
                <button
                    onClick={() => {
                        탭변경(2);
                    }}
                >
                    탭2
                </button>
            </div>
            <TabContent 탭={탭} />

            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + imgid + '.jpg'} alt="" />
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

function TabContent({ 탭 }) {
    const [fade, setFade] = useState('');

    useEffect(() => {
        const a = setTimeout(() => {
            setFade('end');
        }, 100);
        return () => {
            clearTimeout(a);
            setFade('');
        };
    }, [탭]);

    return (
        <div className={`start ${fade}`}>
            {탭 === 0 ? <div>내용0</div> : null}
            {탭 === 1 ? <div>내용1</div> : null}
            {탭 === 2 ? <div>내용2</div> : null}
        </div>
    );
}

function Alert() {
    return (
        <div
            className="alert alert-warning"
            style={{ backgroundColor: '#fff000', color: '#000', fontSize: '20px', marginTop: '50px' }}
        >
            2초이내 구매시 할인
        </div>
    );
}

export default Detail;
