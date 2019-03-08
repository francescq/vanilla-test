export default (props) => {
    return `
        <div class="card-container">
            <h1 class="header">${props.title}</h1>
            <p>${props.value}</p>
            <div id="timer">
            <svg width="60" height="60">
                <circle cx="40" cy="60" r="10"></circle>
                <circle cx="40" cy="60" r="8"></circle>
            </svg>
            <span>
                ${props.phone.value}
                ${props.phone.percentage} %
            </span>
            <span>
                ${props.tablet.value}
                ${props.tablet.percentage} %
            </span>
        </div>
    `;
}