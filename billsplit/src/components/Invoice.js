import React from 'react';



const Invoice = (props) => {
    return (
        <>
            <div className="ui raised segment container">
                <div className="ui large header">
                    For the event of {props.eventTitle}
                </div>
                <div className="ui header">
                    Your total is ${props.amountTotal}
                </div>
                <div className="ui header">
                    With a party of {props.numberOfPartyMembers}
                </div>
                <div className="ui header">
                    {props.taxPercent ? `Tax ${props.taxPercent}%` : null}
                </div>
                <div className="ui header">
                    {props.tipPercent ? `Tip ${props.tipPercent}%`: null}
                </div>
                <div className="ui large header">
                    Total per person ${props.totalPerPerson}
                </div>
            </div>
        </>
    )
}

export default Invoice