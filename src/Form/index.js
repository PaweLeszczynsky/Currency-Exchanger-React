import "./style.css";
const Form = ({ firstItem, secoundItem, thirdItem, fourthItem }) => {
    return (
        <form
            className="exchangerForm">
            <fieldset className="exchangerForm__fieldset">
                <legend className="exchangerForm__legend">Currency Exchanger</legend>
                {firstItem}
                {secoundItem}
                {thirdItem}
                {fourthItem}
            </fieldset>
        </form>)
};
export default Form;
