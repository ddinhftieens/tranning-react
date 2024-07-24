import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import CateForm from './cate/CateForm';
import { toast } from 'react-toastify';

export default function Dashboard() {

    const [open, setOpen] = useState(false);

    const handleClickClose = () => {
        setOpen(false)
    }

    const showToast = () => {
        toast.success("Save data success")
    }

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
