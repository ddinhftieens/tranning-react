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

    public getLstCate(modelSearch: any) {
        const params: RequestParam[] = ParamUtil.toRequestParams(modelSearch);
        const url = ApiUrlUtil.buildQueryString(process.env.REACT_APP_API_URL + '/cate/getLst', params);
        return axios.post(url, {
            headers: HeadersUtil.getHeaders(),
        });
    }
}