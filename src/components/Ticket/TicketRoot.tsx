import { ReactNode } from 'react'

interface TicketType {
    children: ReactNode
}

export const TicketRoot = ({ children }: TicketType) => {
    return (
        <div className="w-72 sm:w-96 my-5 bg-white rounded-xl shadow">
            {children}
        </div>
    )
}
