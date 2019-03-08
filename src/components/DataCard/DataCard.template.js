export default (props) => {
    return `
        <div class="card-container theme-${props.type}">
            <div class="header">
                <div class="title">${props.title}</div>
                <div class="value">${props.value}</div>
            </div>
            <div class="device tablet">
                <div class="title">Tablet</div>
                <span class="perc">${props.tablet.percentage} %</span>
                <span class="value">${props.tablet.value}</span>                
            </div>
            <div class="device phone">
                <div class="title">Smartphone</div>
                <span class="perc">${props.phone.percentage} %</span>
                <span class="value">${props.phone.value}</span>
            </div>
        </div>
    `;
}