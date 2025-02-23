import React, {useEffect} from 'react';

function Item(props) {
    const { id, text: initialText, onDelete, onUpdate } = props;
    const [text, setText] = React.useState(initialText);

    useEffect(() => {
        setText(initialText);
    }, [initialText]);

    return (
        <div className="itemTask">
            <input
                className="textTask"
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
                onBlur={() => onUpdate(id, text)}
            />
            <button
                className="buttonAction deleteTask"
                onClick={onDelete}
                >
            </button>
        </div>
    );
}

export default Item;