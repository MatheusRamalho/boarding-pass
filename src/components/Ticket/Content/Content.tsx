import { TicketContentProps } from "./Content.types";

export const TicketContent = ({ children }: TicketContentProps) => {
    return (
        <article className="w-full ">
            {children}
        </article>
    );
}
