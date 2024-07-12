import React, { useEffect, useState } from 'react'
import { StudentSearch } from './student-search'
import axios from 'axios';
import AddStudent from './AddStudent';

export default function Student() {

    const [searchDto, setSearchDto] = useState(new StudentSearch("", 5, 0, 1, new Date().getTime()));
    const [studentLst, setStudentLst] = useState([])

    useEffect(() => {
        let url = `https://trainning-react.atwom.edu.vn/api/public/student/getLst?_keySearch=${searchDto.keySearch}&_limit=${searchDto.limit}&_offset=${(searchDto.page - 1) * searchDto.limit}`;
        axios.get(url).then((resp: any) => {
            if (resp.data.success) {
                setStudentLst(resp.data.data)
            }
        }).catch((err: any) => {

        })
    }, [searchDto.page, searchDto.timer, searchDto.keySearch])

    const handleChangeText = (event: any) => {
        setSearchDto({
            ...searchDto,
            [event.target.name]: event.target.value,
        });
    };

    const delStudent = (studentId: number) => {
        let url = ``;
        axios.delete(url).then((resp: any) => {
            if (resp.data.success) {
                setSearchDto({
                    ...searchDto,
                    timer: new Date().getTime()
                })
            }
        }).catch((err: any) => {

        })
    }

    const [showForm, setShowForm] = useState<boolean>(false)

    const addStudent = () => {
        setShowForm(!showForm)
    }

    return (
        <div className='text-center'>
            <input type='text' placeholder='ad' name='keySearch'
                value={searchDto.keySearch}
                onChange={handleChangeText}
            />
            <button onClick={() => {
                setSearchDto({
                    ...searchDto,
                    timer: new Date().getTime()
                })
            }}>Search</button>

            <button onClick={addStudent}>Add</button>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fullname</th>
                            <th>dob</th>
                            <th>address</th>
                            <th>created date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentLst.map((e: any, index: number) => {
                                return <tr key={e.id} className={`${e.id % 2 == 0 ? 'color-green' : 'color-red'}`}>
                                    <td>{e.id}</td>
                                    <td>{e.fullName}</td>
                                    <td>{e.dob}</td>
                                    <td>{e.address}</td>
                                    <td>{e.createdDate}</td>
                                    <td>
                                        <button onClick={() => delStudent(e.id)}>Del</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <button onClick={() => {
                        setSearchDto({
                            ...searchDto,
                            page: searchDto.page - 1
                        })
                    }}>Pre</button>
                    <span>{searchDto.page}</span>
                    <button onClick={() => {
                        setSearchDto({
                            ...searchDto,
                            page: searchDto.page + 1
                        })
                    }}>Next</button>
                </div>
            </div>
            <div>
                {
                    showForm && <AddStudent />
                }
            </div>
        </div>
    )
}
