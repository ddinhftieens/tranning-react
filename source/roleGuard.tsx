import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { HeadersUtil } from '../utils/headersUtil';

export default function RoleGuard(props: any) {
  const location = useLocation();

  //thanhnv edit path param
  const param = useParams();
  const url = param.id ? location.pathname.replace("/" + param.id, "") : location.pathname;

  //const url =location.pathname;
  const navigate = useNavigate();
  const [roles, setRoles] = useState<any>({});


  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + '/sys/sys0201/getRoles.exclude', {
        headers: HeadersUtil.getHeadersAuth(),
      })
      .then(async (resp) => {
        setRoles(resp.data.responseData);
      })
      .catch((error) => {
        if (error == 'Network Error') {
          navigate('/err-network', { replace: true });
        } else {
          navigate('/not-permission', { replace: true });
        }
      });
  }, []);

  const checkRole = (roles: any[]) => {
    if (roles.length > 0) {
      let menus: string[] = []
      let hasPerm = roles.some((role: any) => {
        if (role) {
          let roleByMenu = role.split('$');
          menus.push(roleByMenu[0])
          if (roleByMenu[0] !== "" && roleByMenu[0] !== "/") {
            return roleByMenu[0].startsWith(url) && roleByMenu[1].includes('Y');
          }
        }
      });
      if (hasPerm) {
        return true
      }
    } else {
      return false
    }
  };

  return checkRole(roles)
    ? props.children
    : roles.length == 0 && <Navigate to="/not-permission" replace></Navigate>;
}
