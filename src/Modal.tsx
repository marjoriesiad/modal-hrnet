import React from 'react';

export function Modal(props : {
    text: string
    display:string
    width:string
    height:string
    bgColor:string
    margin:string
    button:string
    buttonText:string
    buttonWidth:string
    buttonHeight: string
    buttonBgColor: string
    buttonBorder: string
    buttonMargin: string
    buttonPadding:string}) {

    // useState/Effect to trigger modal display
    const [modalDisplay, setmodalDisplay] = React.useState(props.display);
    const onButtonClick = () => { 
        setmodalDisplay("none") 
    }
    React.useEffect(() => {
        const showModal = (props.display ? 'block' : 'none');
        setmodalDisplay(showModal);
    }, [props.display])

    
    // check if the prop.button exist to display it
    let btnDisplay = "none"
    if (props.button) {
        btnDisplay = "inline-block"
    }

    return  (<div className="modal-container"
            style={
                {
                    display:modalDisplay,
                }
            }>
            <div className="modal" style={
                {
                    width: props.width,
                    height: props.height,
                    backgroundColor: props.bgColor,
                    margin: props.margin
                }
            }><span className="close" onClick={onButtonClick}>
                &times;
            </span>
                
                <p>{props.text}</p>
                <button className='modalBtn' style={
                    {
                        display: btnDisplay,
                        width: props.buttonWidth,
                        height: props.buttonHeight,
                        backgroundColor: props.buttonBgColor,
                        border: props.buttonBorder,
                        margin: props.buttonMargin,
                        padding: props.buttonPadding
                    }
                } onClick={onButtonClick}> {props.buttonText} </button>
            </div>
        </div>
    );
}