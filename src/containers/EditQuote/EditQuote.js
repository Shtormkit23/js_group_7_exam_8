import React, {useEffect, useState} from 'react';
import './EditQuote.css';
import axiosQuotes from "../../axiosQuotes";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Spinner from "../../components/UI/Spinner/Spinner";
import Header from "../../components/Header/Header";

const EditQuote = props => {
    const [editQuote, setEditQuote] = useState([]);
    const [loading, setLoading] = useState(true);

    const id = props.match.params.id;

    useEffect(() => {
        const getQuote = async () => {
            try {
                const quoteResponse = await axiosQuotes.get(`/quotes/${id}.json`);
                setEditQuote(quoteResponse.data);
            } finally {
                setLoading(false);
            }
        }
        getQuote().catch(console.error);
    }, [id]);

    const changeQuote = async event => {
        event.preventDefault();
        const newQuote = {
            ...editQuote,
        };

        try {
            await axiosQuotes.put(`/quotes/${id}.json`, newQuote);
        } finally {
            props.history.replace('/');
        }
    }

    const onChangeQuote = event => {
        const name = event.target.name;
        const value = event.target.value;
        setEditQuote(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    let quotesForm = (
        <QuoteForm
            text={editQuote.text}
            author={editQuote.author}
            category={editQuote.category}
            sendHandler={event => changeQuote(event)}
            quoteDataChanged={onChangeQuote}
            button={'EDIT'}
        />
    );

    if (loading) {
        quotesForm = <Spinner/>
    }

    const deleteQuote = async () => {
        const id = props.match.params.id;
        try {
            await axiosQuotes.delete(`/quotes/${id}.json`);
        } finally {
            props.history.replace('/');
        }
    }

    return (
        <>
            <Header/>
            <div className='edit-quote'>
                <h3 className="about-title">Edit quote</h3>
                {quotesForm}
                <button type="button" className="more" onClick={deleteQuote}>DELETE</button>
            </div>
       </>
    );
};

export default EditQuote;