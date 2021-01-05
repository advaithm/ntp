import React from 'react';
import { state } from '../..';
import icons from '../../icons';
import { StyledWidget } from './style';

export const Widget = ({ id, children }: { id: string, children: React.ReactNode }) => {
    let settings = state.get()[id];
    let slot = state.get().slots[id];

    if(!settings) {
        state.set({ [id]: {} })
        settings = {}
    }

    if(!slot) {
        const slots: {} = state.get().slots;
        const allSlots = ['top-left', 'top-center', 'top-right', 'center-left', 'center-center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-left']

        const slotsVals = Object.values(slots);

        for (const s of allSlots) {
            if(!slotsVals.includes((s as string))) {
                state.setSlot(id, (s as any))
                slot = s;
                break;
            }
        }
    }

    return (
        <StyledWidget className={slot} id={id}>
            {children}
            {/* <i /> */}
        </StyledWidget>
    )
}