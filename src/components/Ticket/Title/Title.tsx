import { TicketTitleProps } from "./Title.types";

export const TicketTitle = ({ title }: TicketTitleProps) => {
    return (
        <h2 className="text-center">
            {title}
        </h2>
    );
}
