import React, { ReactNode } from 'react'
import { createURL, getData } from '@/lib/sanityClient'
import Context from './context';

const ContextProvider = async ({children} : {children: ReactNode}) => {
    const settingsURL = createURL("siteSettings");
    const settingsData = await getData(settingsURL);
    const siteInfo = settingsData.result[0];

    return (
        <Context.Provider value={siteInfo}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider