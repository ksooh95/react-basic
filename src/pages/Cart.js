import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, addAge } from '../store/userSlice.js';

function Cart() {
    const cartData = useSelector((state) => {
        return state.cart;
    });
    const userData = useSelector((state) => {
        return state.user;
    });
    console.log('userData :', userData);
    const dispatch = useDispatch();

    return (
        <div>
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
                                    <button>+</button>
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