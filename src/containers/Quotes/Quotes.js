import React, {useEffect, useState} from 'react';
import './Quotes.css';
import Header from "../../components/Header/Header";
import Quote from "../../components/Quote/Quote";
import axiosQuotes from "../../axiosQuotes";
import Spinner from "../../components/UI/Spinner/Spinner";
import Category from "../../components/Category/Category";


const Quotes = props => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const category = !props.match.params.category ? null : props.match.params.category;

    useEffect(() => {
        const getQuotes = async () => {
            try {
                const quotesResponse = await axiosQuotes
                    .get(`${category ?  `/quotes.json?orderBy="category"&equalTo="${category}"` : '/quotes.json'}`);
                const QuotesCopy = Object.keys(quotesResponse.data)
                    .map(quote => ({
                        ...quotesResponse.data[quote],
                        id: quote
                    }));
                setQuotes(QuotesCopy);
            } finally {
                setLoading(false);
            }
        }
        getQuotes().catch(console.error);
    }, [category]);

    let quotesList = (
        <div className="quotesList">
            {quotes.map(quote => (
                <Quote
                    category={quote.category}
                    author={quote.author}
                    text={quote.text}
                    key={quote.id}
                    id={quote.id}
                />
            ))}
        </div>
    );

    if (loading) {
        quotesList = <Spinner/>
    }

    return (
        <>
            <Header/>
            <Category/>
            <div className="quotes">
                {quotesList}
            </div>
           </>
    );
};

export default Quotes;