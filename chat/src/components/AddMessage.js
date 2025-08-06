import React from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../actions";

const AddMessage = () => {
    const dispatch = useDispatch(); // used to trigger the addMessage function
    let input;

    return (
        <section id="new-message">
            <input
                onKeyPress={(e) => { // send message when enter pressed
                    if (e.key === 'Enter' && input.value.trim() !== '') {
                        dispatch(addMessage(input.value, 'Me')); // dispatch directly to the store
                        input.value = ''; // clear input
                    }
                }}
                type='text'
                ref={(node) => {
                    input = node;
                }}
            />
        </section>
    );
};

export default AddMessage;