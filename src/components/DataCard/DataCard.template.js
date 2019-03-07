export default (props) => {
    return `
        <div class="card-container">
            <h1 class="header">${props.val}</h1>
            <div id="timer">
            <svg width="720" height="120">
                <circle cx="40" cy="60" r="10"></circle>
                <circle cx="40" cy="60" r="8"></circle>
            </svg>
        </div>
    `;
}