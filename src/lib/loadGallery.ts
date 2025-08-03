import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightbox({
    gallery: "#my-gallery",
    children: "a",
    pswpModule: () => import("photoswipe"),
    showHideAnimationType: 'zoom',
    zoomAnimationDuration: 333,
    showAnimationDuration: 333,
    hideAnimationDuration: 333,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
});

lightbox.on("uiRegister", function () {
    if (lightbox.pswp && lightbox.pswp.ui) {
        lightbox.pswp.ui.registerElement({
            name: "download-button",
            order: 8,
            isButton: true,
            tagName: "a",

            html: {
                isCustomSVG: true,
                inner:
                    '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
                outlineID: "pswp__icn-download",
            },

            onInit: (el: any, pswp: any) => {
                el.setAttribute("download", "");
                el.setAttribute("target", "_blank");
                el.setAttribute("rel", "noopener");

                pswp.on("change", () => {
                    el.href = pswp.currSlide.data.src;
                });
            },
        });
    }
});

lightbox.init();