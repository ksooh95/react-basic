import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, addAge } from '../store/userSlice.js';
import { addCount } from '../store.js';
import { useEffect, useState, memo } from 'react';

const Child = memo(function () {
    console.log('자식 : 재렌더링됨');
    return <div>자식임</div>;
});

function Cart() {
    const cartData = useSelector((state) => {
        return state.cart;
    });
    const userData = useSelector((state) => {
        return state.user;
    });
    const dispatch = useDispatch();
    const [count, setCount] = useState();

    useEffect(() => {}, []);

    return (
        <div>
            <Child count={count}></Child>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            ></button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>수량변경</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch(addCount(item.id));
                                        }}
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch(changeName());
                                        }}
                                    >
                                        이름변경
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            {userData.name} {userData.age} 의 장바구니
            <button
                onClick={() => {
                    dispatch(addAge(1));
                }}
            >
                +
            </button>
        </div>
    );
}
export default Cart;
