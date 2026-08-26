import './buttons.css';

export function Button({ type = 'services', children }) {
    return (
        <button className={`btn btn-${type}`}>
            {children}
        </button>
    );
}