import React, { useState } from 'react';
import style from "./Accordionstyle";

const Accordion = (_obj) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(prev => !prev);
    }
    const obj = {
        accordion_wrapper_container: _obj.accordion_wrapper_container || "div",
        accordion_wrapper_class: _obj.accordion_wrapper_class || "accordionWrapper",
        title_wrapper_container: _obj.title_wrapper_container || "div",
        title_wrapper_class: _obj.title_wrapper_class || "titleWrapper",
        tile_text_wrapper: _obj.tile_text_wrapper || "p",
        title_text_text: _obj.title_text_text || "title",
        title_btn: _obj.title_btn || <><style>{style}</style><div className={show?"buttonWrapper":"buttonWrapper collapsed"}><span className="vertical"></span><span className="horizontal"></span></div></>,
        details_wrapper_container: _obj.details_container || "div",
        details_wrapper_class: show?"detailsWrapper":"detailsWrapper collapsed",
        details_text: _obj.details_text || "Lorem ipsom"
    }
    return (
        <div className={obj.accordion_wrapper_class}>
            <div  className={obj.title_wrapper_class} onClick={handleClick}><p>{obj.title_text_text}</p>{obj.title_btn}</div>
            { <div className={obj.details_wrapper_class}>{obj.details_text}</div> }
        </div>
    );
}
export default Accordion;