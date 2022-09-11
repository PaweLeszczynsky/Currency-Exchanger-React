import "./style.css";
const onFormSubmit = (event) => {
    event.preventDefault();
};
const Form = ({ firstItem, secoundItem, thirdItem, fourthItem }) => (

    <form onInput={onFormSubmit}
        className="exchangerForm">
        <fieldset className="exchangerForm__fieldset">
            <legend className="exchangerForm__legend">Currency Exchanger</legend>
            {firstItem}
            {secoundItem}
            {thirdItem}
            {fourthItem}
        </fieldset>
    </form>
);

export default Form;