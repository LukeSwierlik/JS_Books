import {elements} from "../elements";
import { selectors } from "../constants/constants";


class LightBoxView {
    constructor(img_source) {
        this.img_source = img_source;
    }

    closeLightBox() {
        document.querySelector(selectors.LIGHTBOX_CLOSE).addEventListener('click', () => {
            elements.lightbox.innerHTML = '';
            elements.lightbox.classList.remove('lightbox--active');
        });
    };

    render() {
        const markup = `
            <div class="lightbox__wrapper center">
                <div class="lightbox__imgBox">
                    <img src="${this.img_source}" class="lightbox__img"/>
                </div>
                
                
                <div class="lightbox__close">
                    <div class="close heavy"></div>
                </div>
            </div>
        `;

        elements.lightbox.insertAdjacentHTML('beforeend', markup);

        this.closeLightBox();
    }
}

export default LightBoxView;