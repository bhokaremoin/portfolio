'use client'
import React, { createContext, ReactNode, useContext } from 'react'

interface GlobalProps {
    resumeURL: string
    linkedinURL: string
    emailId: string
}

const GlobalContext = createContext<GlobalProps | undefined>(undefined)

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
                                                                             children,
                                                                         }) => {
    const resumeURL =
        'https://drive.google.com/file/d/1Z2ky6yK91swzkeR7Mo5mE0TJB2I8DCm6/view?usp=sharing'
    const emailId = 'bhokaremoin@gmail.com'
    const linkedinURL = 'https://www.linkedin.com/in/moinbhokare/'
    return (
        <GlobalContext.Provider value={{ resumeURL, linkedinURL, emailId }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error(
            'useGlobalContext must be used within a GlobalContextProvider'
        )
    }
    return context
}
