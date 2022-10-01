import "./style.css";

const DateContainer = ({ date }) => (
    <div className="dateContainer">Today is {`${date.toLocaleString("en-US", { weekday: "long" })}
        ${date.toLocaleString("en-US", { day: "numeric" })}
        ${date.toLocaleString("en-US", { month: "long", year: "numeric" })}
        ${date.toLocaleTimeString()}`}
    </div>
);

export default DateContainer;