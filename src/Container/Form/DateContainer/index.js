import "./style.css";
import { useCurrentDate } from "../../../Clock";

const DateContainer = () => {
    const date = useCurrentDate();
    return (
        <div className="dateContainer">Today is {`${date.toLocaleString("en-US", { weekday: "long" })}
        ${date.toLocaleString("en-US", { day: "numeric" })}
        ${date.toLocaleString("en-US", { month: "long", year: "numeric" })}
        ${date.toLocaleTimeString()}`}
        </div>
    );
};

export default DateContainer;