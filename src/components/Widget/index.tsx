import React from 'react';
import { state } from '../..';
import icons from '../../icons';
import { StyledWidget } from './style';

export const Widget = ({ id, children, defaultSlot }: { id: string, children: React.ReactNode, defaultSlot: string }) => {
    const [settings, setSettings] = React.useState(state.get()[id]);
    const [slot, setSlot] = React.useState(state.get().slots[id]);

    React.useEffect(() => {
        if(!slot) setSlot(defaultSlot)

        if(slot && settings) console.log(`[WidgetLoader] Loaded ${id}`, settings, slot)
    }, [slot, settings])

    return (
        <StyledWidget className={slot} id={id}>
            {children}
        </StyledWidget>
    )
}