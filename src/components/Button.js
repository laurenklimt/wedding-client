import './Button.css';

function Button(props) {

    return (
        <button path={props.page} className='button'>
            <p className="button-text">{props.text}</p>
        </button>
    );
}

export default Button;