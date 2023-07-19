"use client"

import { Typography } from '@/app/(components)/atoms';
import { memo, useCallback, useMemo, useState } from 'react';
import { THOBE_FILTERS } from '../constants';
import { strCapitalize } from '@/utlis';
import ColorPanel from '../prop_panel/ColorPanel';

export default function CustomizeGround({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [customeParams, setCustomeParams] = useState({});
  const [activeFilter, setActiveFilter] = useState('colour');

  // console.log({customeParams})
  const callFilterPanel = useCallback((filter: string) => {
    switch (filter) {
      case 'sleeve':
      setCustomeParams({...customeParams,sleeve:filter})  
      return <div>Sleeve Panel</div>;
      case 'colar':
      setCustomeParams({...customeParams,colar:filter})  
      return <div>Colar Panel</div>;
      case 'arm':
      setCustomeParams({...customeParams,arm:filter})  
      return <div>Arm Panel</div>;
      case 'material':
      setCustomeParams({...customeParams,material:filter})  
      return <div>Material Panel</div>;
      default:
      setCustomeParams({...customeParams,colour:filter})  
      return <ColorPanel />;
    }
  },[customeParams]);

  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex-1">
        <Typography variant="h4">Customize It</Typography>
        <ul className="flex gap-1 overflow-x-scroll pb-2">
          {THOBE_FILTERS.map((filter: string, indx: number) => (
            <li key={indx} onClick={() => setActiveFilter(filter)}>
              <Typography
                variant="h5"
                className={`${
                  filter == activeFilter
                    ? 'bg-blue-900 font-bold'
                    : ' bg-blue-400'
                } text-white`}
              >
                {strCapitalize(filter)}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="w-full">{callFilterPanel(activeFilter)}</div>
      </div>

      <div></div>
    </div>
  );
}
