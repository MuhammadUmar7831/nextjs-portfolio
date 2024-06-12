import React, { RefObject, useEffect, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import Navigation from './Menu/Navigation';

export default function Menu({ menuRefs }: { menuRefs: RefObject<HTMLElement>[] }) {
    const [isOpen, setOpen] = useState(false);
    const [hamColor, setHamColor] = useState('#FFFFFF');
    useEffect(() => {
        if (isOpen) {
            setHamColor('#000000');
        } else {
            setHamColor('#FFFFFF');
        }
    }, [isOpen])

    return (
        <div className='z-50 fixed top-4 right-6 flex justify-end'>
            <span className='z-50'><Hamburger color={hamColor} toggled={isOpen} toggle={setOpen} /></span>
            <Navigation isOpen={isOpen} setOpen={setOpen} menuRefs={menuRefs} />
        </div>
    )
}
