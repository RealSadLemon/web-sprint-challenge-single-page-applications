import React, {useState} from 'react';

const PizzaForm = props => {
    const {values, update, submit} = props;

    return (
        <form id='pizza-form'>
            <label> Name:
                <input name='name' id='name-input' type='text' value={values.name} onChange={update} />
            </label>
            <label> Size:
                <select id='size-dropdown' name='dropdown' onChange={update} value={values.dropdown}>
                    <option value=''>Select an Option</option>
                    <option value='large'>Large</option>
                    <option value='medium'>Medium</option>
                    <option value='personal'>Personal</option>
                </select>
            </label>
            <label> Toppings{`(?)`}:
                <label> Pepperoni
                    <input type='checkbox' name='pepperoni' checked={values.pepperoni} onChange={update}/>
                </label>
                <label> Mushrooms
                    <input type='checkbox' name='mush' checked={values.mush} onChange={update}/>
                </label>
                <label> Fetta Cheese
                    <input type='checkbox' name='fetta' checked={values.fetta} onChange={update}/>
                </label>
                <label> Italian Sausage
                    <input type='checkbox' name='italian' checked={values.italian} onChange={update}/>
                </label>
            </label>
            <label> Special Instructions: 
                <input type='text' name='special' value={values.special} onChange={update} id='special-text'/>
            </label>
        </form>
    )
}

export default PizzaForm