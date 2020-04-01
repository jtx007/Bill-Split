
export const calculateLogisticsTotal = bill => {
  
  if (bill.taxPercent.length === 0) {
    let initial =
      parseInt(bill.amountTotal) / parseInt(bill.numberOfPartyMembers);
    let tipPerPerson = parseInt(bill.amountTotal) * (parseInt(bill.tipPercent) / 100);
    let amountPerPerson = initial + tipPerPerson;
    return amountPerPerson;
  
  } else if (bill.tipPercent.length === 0) {
    let taxAmount = parseInt(bill.amountTotal) * (parseInt(bill.taxPercent) / 100);
    let initial = parseInt(bill.amountTotal) + taxAmount
    let amountPerPerson = (initial / (parseInt(bill.numberOfPartyMembers)))
    return amountPerPerson
  
  } else if (!bill.tipPercent && !bill.taxPercent) {
    let amountPerPerson = parseInt(bill.amountTotal) / parseInt(bill.numberOfPartyMembers);
    return amountPerPerson
  } else {
    let initial = parseInt(bill.amountTotal) / parseInt(bill.numberOfPartyMembers);
    let taxAmount = parseInt(bill.amountTotal) * (parseInt(bill.taxPercent) / 100);
    let tipPerPerson = (parseInt(bill.amountTotal) + taxAmount) * (parseInt(bill.tipPercent) / 100);
    let amountPerPerson = (initial + taxAmount) + tipPerPerson 
    return amountPerPerson
  }
};
