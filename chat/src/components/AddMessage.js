import React from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../actions";

const AddMessage = () => {
    const dispatch = useDispatch();
    let input;

    return (
        <section id="new-message">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter' && input.value.trim() !== '') {
                        dispatch(addMessage(input.value, 'Me'));
                        input.value = '';
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