import './Card.css';

function card( props ) {

    // CSs class will not add directly so to apply expenseItems CSS, we need to add it manually.
    const classes = 'card ' + props.className;
    return <div className={ classes }>{ props.children }</div>
}

export default card;