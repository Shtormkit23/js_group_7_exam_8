import React from 'react';
import './QuoteForm.css';

const QuoteForm = props => {
    return(
        <>
            <form onSubmit={props.sendHandler}>
                <select
                    className="Input"
                    name="category"
                    value={props.category}
                    onChange={props.quoteDataChanged}
                    required={true}
                >
                    <option value="">Select a category...</option>
                    <option value="famous-people">Famous people</option>
                    <option value="humour">Humour</option>
                    <option value="saying">Saying</option>
                    <option value="motivational">Motivational</option>
                    <option value="star-wars">Star Wars</option>
                </select>
                <input
                    className="Input" placeholder="Quote author..."
                    type="text" name="author"
                    value={props.author}
                    onChange={props.quoteDataChanged}
                />
                <textarea
                    className="Input textarea" placeholder="Quote text..."
                    typeof="text" name="text"
                    value={props.text}
                    onChange={props.quoteDataChanged}
                />
                <button className='more'>{props.button}</button>
            </form>
        </>
    )
};

export default QuoteForm;