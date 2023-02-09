import { TicketRootWrapper } from "./Root.styles";
import { TicketType } from "./Root.types";

export const TicketRoot = ({ children }: TicketType) => {
    return (
        <TicketRootWrapper>
            {children}
        </TicketRootWrapper>
    );
}
