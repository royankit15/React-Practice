
function ExpenseDetails (props)
{

    const title= props.title;
    const AmountofExpense= props.Amount;

    return (
        <div>
        <div >{title}</div>
        <div >{AmountofExpense}</div>
        </div>
    );
}

export default ExpenseDetails;