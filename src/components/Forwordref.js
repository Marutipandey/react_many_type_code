import React , {forwardRef} from "react";

function ForwardRef(props,refinn){
return(
    <input type="text" ref={refinn} />
)
}export default forwardRef(ForwardRef);