import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import { SocialService } from '../services/common/SocialService';
import OAuth2 from '../pages/auth/OAuth2';
import { AuthConstant } from '../constants/authConstant';
export default function Oauth2Guard(props: any) {
    const cookie = new Cookies();

    const [auth, setAuth] = useState(false);

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const _code = params.get('code');
    const _type = params.get('type');

    useEffect(() => {
        if (cookie.get('access_token') !== undefined && cookie.get('access_token') !== '') {
            setAuth(true)
        } else {
            if (_code && _type) {
                SocialService.getInstance().loginOauth2({ code: _code, type: _type?.toLocaleUpperCase() }).then((resp: any) => {
                    if (resp.data.status) {
                        const expires = new Date();
                        expires.setDate(expires.getDate() + AuthConstant.EXPIRES_TOKEN)
                        cookie.remove(AuthConstant.ACCESS_TOKEN)
                        cookie.remove(AuthConstant.PUBLIC_KEY)
                        cookie.set(AuthConstant.ACCESS_TOKEN, resp.data.responseData, { path: '/', expires: expires })
                        window.location.href = "/"
                    }
                }).catch((err: any) => {

                })
            }
        }
    }, []);

    return (
        auth ? props.children : <OAuth2 />
    )
}
