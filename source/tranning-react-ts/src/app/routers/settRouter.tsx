import Setting001 from "../../Setting001";
import Setting002 from "../../Setting002";
import Settings from "../../Settings";

export const settRouter: any = {
    path: 'sett',
    element: (
        <Settings />
    ),
    children: [
        { path: 'sett-001', element: <Setting001 /> },
        { path: 'sett-002', element: <Setting002 /> }
    ],
  };