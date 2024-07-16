import React, { useEffect, useState } from 'react'
import { StudentDto } from './student-dto'
import Swal from 'sweetalert2';
import axios from 'axios';

export default function AddStudent(props: any) {

    const { hideForm, studentDto } = props;

    const [student, setStudent] = useState<StudentDto>(new StudentDto())

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'e' || e.key === 'E' || e.key === '.' || e.key === ',') {
            e.preventDefault();
        }
    };

    useEffect(() => {
        if(studentDto != null) {
            setStudent({
                ...studentDto
            })
        }
    }, [])

    const handleChangeText = (event: any) => {
        setStudent({
            ...student,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeNumber = (event: any) => {
        const newValue = event.target.value;
        setStudent({
            ...student,
            [event.target.name]: newValue,
        });
    };

    const chk = () => {
        if (student.fullName === undefined || student.fullName === '') {
            setStudentState();
            return false;
        }
        if (student.dob === undefined || student.dob.toString() === '') {
            setStudentState();
            return false;
        }
        if (student.address === undefined || student.address === '') {
            setStudentState();
            return false;
        }
        return true;
    }

    const setStudentState = () => {
        setStudent((prev: StudentDto) => {
            return {
                ...prev,
                dob: prev.dob || 0,
                fullName: prev.fullName || '',
                address: prev.address || ''
            }
        })
    }


    const save = () => {

        if (!chk()) {
            return;
        }

        Swal.fire({
            title: `Xác nhận`,
            text: `Bạn có muốn thực hiện ...`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#89B449',
            cancelButtonColor: '#E68A8C',
            confirmButtonText: `Yes`,
            cancelButtonText: `No`
        }).then((result) => {
            if (result.value) {
                // logic
                let url = `https://trainning-react.atwom.edu.vn/api/public/student/save`;
                axios.post(url, student).then((resp: any) => {
                    if (resp.data.success) {
                        hideForm(true);
                    }
                }).catch((err: any) => {

                })
            }
        })
    }

    const cancel = () => {
        hideForm(false);
    }

    return (
        <div className='text-center'>
            <div>
                <span style={{ color: "red" }}>*</span>
                <input type='text'
                    name="fullName"
                    value={student.fullName || ""}
                    onChange={handleChangeText}
                    placeholder="Nhập fullName" />
                <div className={`invalid-feedback ${student.fullName?.toString() == '' ? "d-block" : ""}`} style={{ fontSize: "100%" }}>Không được để trống</div>
            </div>
            <div>
                <span style={{ color: "red" }}>*</span>
                <input type='number'
                    name="dob"
                    value={student.dob == undefined ? '' : student.dob}
                    onKeyDown={handleKeyPress}
                    onChange={handleChangeNumber}
                    placeholder="Nhập năm sinh" />
                <div className={`invalid-feedback ${student.dob?.toString() == '' ? "d-block" : ""}`} style={{ fontSize: "100%" }}>Không được để trống</div>
            </div>
            <div>
                <span style={{ color: "red" }}>*</span>
                <input type='text'
                    name="address"
                    value={student.address || ""}
                    onChange={handleChangeText}
                    placeholder="Nhập address" />
                <div className={`invalid-feedback ${student.address?.toString() == '' ? "d-block" : ""}`} style={{ fontSize: "100%" }}>Không được để trống</div>
            </div>
            <div>
                <button onClick={save}>Save</button>
                <button onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}
