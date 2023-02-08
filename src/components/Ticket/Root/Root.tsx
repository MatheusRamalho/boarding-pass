import { TicketType } from "./Root.types";

export const TicketRoot = ({ children }: TicketType) => {
    return (
        <div className="w-80">
            {children}
        </div>
    );
}
