import './Button.css';

function Button(props) {

    return (
        <button className='button'>
            <p className="button-text">{props.text}</p>
        </button>
    );
}

export default Button;