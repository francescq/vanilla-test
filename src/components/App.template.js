export default () => {

    return `
        <div class="glide grid-container">
            <div data-glide-el="track" class="glide__track">
                <ul child class="glide__slides">
                </ul>
            </div>

            <div class="glide__bullets" data-glide-el="controls[nav]">
                <button class="glide__bullet" data-glide-dir="=0"></button>
                <button class="glide__bullet" data-glide-dir="=1"></button>
                <button class="glide__bullet" data-glide-dir="=2"></button>
            </div>
        </div>
    `;
}