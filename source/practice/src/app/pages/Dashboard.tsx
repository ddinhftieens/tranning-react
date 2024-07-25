import React, { useEffect, useState } from 'react'
import { Dialog } from 'primereact/dialog';
import CateForm from './cate/CateForm';
import { toast } from 'react-toastify';
import { CateService } from '../services/cate/CateService';

export default function Dashboard() {

    const [open, setOpen] = useState(false);

    const handleClickClose = () => {
        setOpen(false)
    }

    const showToast = () => {
        toast.success("Save data success")
    }

    useEffect(() => {

        CateService.getInstance().getLstCate({limit: 10, page: 1, keySearch: "a"}).then((resp: any) => {
            
        }).catch((err: any) => {

        })
    }, [])

    return (
        <>
            <Dialog header={"Add"} baseZIndex={1100} visible={open} onHide={() => handleClickClose()}>
                <CateForm />
            </Dialog>
            <div onClick={() => setOpen(true)}>Dashboard = Add</div>
            <div onClick={showToast}>Toast</div>
        </>
    )
}
