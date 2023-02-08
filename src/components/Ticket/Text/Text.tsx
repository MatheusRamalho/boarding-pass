import { TicketTextProps } from "./Text.types";

export const TicketText = ({ text }: TicketTextProps) => {
    return (
        <p className="">
            {text}
        </p>
    );
}
