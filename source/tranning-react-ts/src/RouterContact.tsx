import React, { useEffect } from 'react'
import { useLocation, useMatch, useParams, useSearchParams } from 'react-router-dom';

console.log("Contact");

export default function RouterContact() {

    const location = useLocation();

    const { username } = useParams<{ username: string }>();

    const [searchParams, setSearchParams] = useSearchParams()

    const match = useMatch('/contact');

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.hash);
        console.log(location.key);
        console.log(location.search);
        console.log(username);
        console.log(searchParams.get("access_token"));
        console.log(searchParams.get("page"));

        console.log(match);
    }, [])

    return (
        <div>RouterContact</div>
    )
}
