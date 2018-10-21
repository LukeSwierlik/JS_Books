import {elements} from "../elements";
import { selectors } from "../constants/constants";

const closeLightBox = () => {
    document.querySelector(selectors.LIGHTBOX_CLOSE).addEventListener('click', () => {
        elements.lightbox.innerHTML = '';
        elements.lightbox.classList.remove('lightbox--active');
    });
};

export const renderLightBox = (img_source) => {
    const markup = `
        <div class="lightbox__wrapper center">
            <div class="lightbox__imgBox">
                <img src="${img_source}" class="lightbox__img"/>
            </div>
            
            
            <div class="lightbox__close">
                  <div class="close heavy"></div>
            </div>
        </div>
    `;

    elements.lightbox.insertAdjacentHTML('beforeend', markup);

    closeLightBox();
};