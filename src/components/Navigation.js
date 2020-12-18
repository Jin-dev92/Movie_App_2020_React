import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            {/* <Link to="/about">About</Link> */}
            <Link to={{
                pathname:"/about",
                state:{
                    fromNavigation : true
                }
                // 다른 페이지로 redirect 될때 props 을 가져가고 싶을 때 사용한다.
            }}>About</Link>
            
            {/* a 태그 herf 를 사용하면 a 링크를 사용 할 때마다 리액트가 죽고 다시 불러지기 때문에 이것을 막기 위해 Link 라는 것은 사용한다. */}
        </div>
    );
}

export default Navigation;