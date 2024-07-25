import axios from "axios";
import { ApiUrlUtil } from "../../utils/ApiUrlUtil";
import { ParamUtil, RequestParam } from "../../utils/ParamUtil";
import { HeadersUtil } from "../../utils/HeaderUtil";

export class CateService {
    private static _cateService: CateService;

    public static getInstance(): CateService {
        if (!CateService._cateService) {
            CateService._cateService = new CateService();
        }
        return CateService._cateService;
    }

    public getLstCate(modelSearch: any, id: number) {
        const params: RequestParam[] = ParamUtil.toRequestParams(modelSearch);
        const url = ApiUrlUtil.buildQueryString(process.env.REACT_APP_API_URL + `/cate/${id}/getLst`, params);
        
        "http://localhost:8397/api/cate/getLst?limit=10&page=1&keySearch=a"
        
        return axios.get(url, {
            headers: HeadersUtil.getHeaders(),
        });
    }
}