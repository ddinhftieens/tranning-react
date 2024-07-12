import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Child2 from './Child2';
import axios from 'axios';
import { SearchParam } from './search-param';

export default function Part2() {

    const [count, setCount] = useState<number>(0);

    const [userInfo, setUserInfo] = useState({
        name: "Nguyen Van A",
        age: 20
    })



    const btnClickCount = () => {
        obj.name = "Nguyen Van D"
        // console.log(obj);
        setCount(count + 1)
    }

    const btnDoubleClickCount = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        setCount((pre: number) => pre + 1)
        setCount((pre: number) => pre + 1)
    }

    const obj = {
        name: "Nguyen Van C",
        age: 22
    }

    const tempRef = useRef<any>()

    useEffect(() => {
        console.log("12345678");
        console.log('Are they the same?', tempRef.current === obj);
        tempRef.current = obj;
    }, [count])

    const numRef = useRef<number>(0)
    const inputRef = useRef<any>()

    // const caculator = useMemo(() => {
    //     let temp = 0;
    //     for (let i = 0; i < 100; i++) {
    //         console.log(i);
    //         temp += i;
    //     }
    //     return temp + count
    // }, [count])

    // const caculator = () => {
    //     let temp = 0;
    //     for (let i = 0; i < 100; i++) {
    //         console.log(i);
    //         temp += i;
    //     }
    //     return temp + count
    // }

    // const callBack = () => {
    //     console.log("123");
    // }

    const callBack = useCallback(() => {
        console.log("123");
    }, [count])

    const [searchDto, setSearchDto] = useState(new SearchParam(1, 10))
    const [lst, setLst] = useState([])

    useEffect(() => {
        let url = `https://trainning-react.atwom.edu.vn/api/public/student/getLst?_keySearch=&_limit=10&_offset=0`
        axios.get(url).then((resp: any) => {
            console.log(resp.data);
        }).catch((err: any) => {

        })
    }, [searchDto.page])

    return (
        <div className='text-center'>
            <div>Count: {count}</div>
            <button onClick={btnClickCount}>Click counter</button>
            <button onClick={btnDoubleClickCount}>Click db counter</button>

            <div>
                Name: {userInfo.name}, age: {userInfo.age}
            </div>
            <button onClick={() => {
                setUserInfo({
                    ...userInfo,
                    name: "Nguyen Van B"
                })
            }}>Update userInfo</button>

            <div>Name 2: {obj.name}, age: {obj.age}</div>

            {/* {
                count % 2 == 0 && <Child2 />
            } */}

            <div>Number ref: {numRef.current}</div>
            <button onClick={() => {
                numRef.current = numRef.current + 1
            }}>Upd ref</button>

            <div>
                <input type='text' ref={inputRef} />
            </div>
            <button onClick={() => {
                console.log(inputRef.current);
                inputRef.current.focus();
            }}>Input ref</button>

            {/* <div>{caculator}</div> */}

            <Child2 callBack={callBack} />

            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lst.map((e: any, index: number) => {
                            return <tr key={e.id} className={`${e.id % 2 == 0 ? 'color-green' : 'color-red'}`}>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                                <td>{e.body}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <button onClick={() => {
                setSearchDto({
                    ...searchDto,
                    page: searchDto.page - 1
                })
            }}>Pre</button>
            <button onClick={() => {
                setSearchDto({
                    ...searchDto,
                    page: searchDto.page + 1
                })
            }}>Next</button>

        </div>
    )
}
