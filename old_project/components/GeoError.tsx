import React from 'react';
import browser from 'browser-detect';

const GeoError = () => {
    const { name } = browser();
    const link = (() => {
        let l = "";
        switch(name) {
            default:
            case "chrome":
                l = "https://support.google.com/chrome/answer/114662?hl=ca";
                break;
            case "firefox":
                l = "https://support.mozilla.org/ca/kb/does-firefox-share-my-location-websites";
                break;
        }
        return l
    })();
    return (
        <div>
            <h3>Necessitem la geolocalització</h3>
            <p>La plataforma necessita conèixer la teva localització per crear comunitats o trobar-ne d'existents a prop.</p>
            <p>Pots llegir com activar l'opció de geolocalització per <span style={{textTransform: "capitalize"}}>{ name }</span> a <a href={link}>la web oficial</a>.</p>
        </div>
    );
};

export default GeoError;
