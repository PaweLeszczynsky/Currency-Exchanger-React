import { useCurrentDate } from "../../../Clock";
import { StyledDateContainer } from "./styled";

const DateContainer = () => {
    const date = useCurrentDate();
    return (
        <StyledDateContainer>Today is {`${date.toLocaleString("en-US", { weekday: "long" })}
        ${date.toLocaleString("en-US", { day: "numeric" })}
        ${date.toLocaleString("en-US", { month: "long", year: "numeric" })}
        ${date.toLocaleTimeString()}`}
        </StyledDateContainer>
    );
};

export default DateContainer;