import React, { useState } from "react";
import {calculateLogisticsTotal} from '../utils/calculateTotalAmout'
import Invoice from '../components/Invoice'
const CalculatorPage = () => {
  const [values, setValues] = useState({
    eventTitle: "",
    amountTotal: "",
    numberOfPartyMembers: "",
    taxPercent: "",
    tipPercent: ""
  });

  const [total, setTotal] = useState('')

  const [invoice, showInvoice] = useState(false)


  const handleInputChanges = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
      e.preventDefault()
      let total = (calculateLogisticsTotal(values))
    setTotal(total)
      showInvoice(true)
  }

  
  const showInvoiceOrForm = () => {
      if (invoice) {
          return <Invoice eventTitle={values.eventTitle} numberOfPartyMembers={values.numberOfPartyMembers} amountTotal={values.amountTotal} taxPercent={values.taxPercent} tipPercent={values.tipPercent} totalPerPerson={total} />
      } else {
          return (
            <div className="ui form container">
              <div className="ui message large">
                <div className="header">Getting Started</div>
                <ul className="list massive">
                  <li>Fill out the form below</li>
                  <li>Inputs not marked with red asterisk are not required to calculate bill</li>
                </ul>
              </div>
              <form onSubmit={handleSubmit} className="ui big form">
                <div className="required field">
                  <label>Event Title</label>
                  <input
                    required
                    type="text"
                    name="eventTitle"
                    value={values.eventTitle}
                    onChange={handleInputChanges}
                  />
                </div>
                <div className="required field">
                  <label>Total Amount</label>
                  <input
                    required
                    type="number"
                    name="amountTotal"
                    value={values.amountTotal}
                    onChange={handleInputChanges}
                  />
                </div>
                <div className="required field">
                  <label>Party/individual Number</label>
                  <input
                    required
                    type="number"
                    name="numberOfPartyMembers"
                    value={values.numberOfPartyMembers}
                    onChange={handleInputChanges}
                  />
                </div>
                <div className="field">
                  <label>Tax Percentage %</label>
                  <input
                    type="number"
                    name="taxPercent"
                    value={values.taxPercent}
                    onChange={handleInputChanges}
                  />
                </div>
                <div className="field">
                  <label>Tip Percentage</label>
                  <input
                    type="number"
                    name="tipPercent"
                    value={values.tipPercent}
                    onChange={handleInputChanges}
                  />
                </div>
                <button className="ui green submit button" type="submit">Submit</button>
              </form>
            </div>
          );

      }
  }

  return (
      <>
      {showInvoiceOrForm()}
      </>
  )

};

export default CalculatorPage;
