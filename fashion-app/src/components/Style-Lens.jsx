import React from React;
import { useParams, Link } from "react-router-dom";

const StyleLens = () => {
    const {styleId} = useParams ();
    const style = style.find((s) => s.styleId === parseInt(styleId));

}

if (!style) {
    return(
        <div> 
            <h2> Please upload the photo in the correct format </h2>
            <Link to="/"> Back to the StyleLens</Link>
        </div>
    );
}

export default StyleLens;