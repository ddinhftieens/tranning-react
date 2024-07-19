import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom';

export default function RoleGuard(props: any) {

    const { role } = props;
    const [paramSearch, setParamSearch] = useSearchParams();

    const checkPer = () => {
        const roleParam = paramSearch.get("role");
        if (role.includes(roleParam)) {
            return true;
        }
        return false;
    }

    return (
        checkPer() ? props.children : <Navigate to={"/not-permission"} replace />
    )
}
