import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function AuthGuard(props: any) {
    const [auth, setAuth] = useState(false);

    // kiểm
    const [paramSearch, setParamSearch] = useSearchParams();

    useEffect(() => {
        if(paramSearch.get("token") != null) {
            setAuth(true)
        }
    }, [])

    return (
        auth && props.children
    )
}
