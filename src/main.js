
//Variables
const formBill = document.querySelector('#formBill')
const billAmount = document.querySelector('#billAmount');

const tip5 = document.querySelector('#tip5')
const tip10 = document.querySelector('#tip10')
const tip15 = document.querySelector('#tip15')
const tip25 = document.querySelector('#tip25')
const tip50 = document.querySelector('#tip50')
const tipCustom = document.querySelector('#tipCustom')
const customTipInput = document.querySelector('#customTipInput')

const formPeople = document.querySelector('#formPeople')
const textWarningPeople = document.querySelector('#textWarningPeople')
const numberPeople = document.querySelector('#numberPeople');

const personalTipAmount = document.querySelector('#personalTipAmount');
const personalCountAmount = document.querySelector('#personalCountAmount')
const totalTipAmount = document.querySelector('#totalTipAmount');

const resetButton = document.querySelector('#resetButton')



function initialValues () {
    personalTipAmount.textContent = '$0.00'
    personalCountAmount.textContent = '$0.00'
    totalTipAmount.textContent = '$0.00'
}
initialValues ()


function calculatorTip( tip ) {
    const bill = billAmount.value
    const totalTip = bill * tip;

    if( !billAmount.value ) {
        textWarningBill.classList.add('warning')
        formBill.classList.add('requiereField')
    }
    
    if( !numberPeople.value ) {
        textWarningPeople.classList.add('warning')
        formPeople.classList.add('requiereField')
    }
    
    else {
        textWarningBill.classList.remove('warning')
        textWarningBill.classList.add('hide')
        formBill.classList.remove('requiereField')
        textWarningPeople.classList.remove('warning')
        textWarningPeople.classList.add('hide')
        formPeople.classList.remove('requiereField')
        const people = numberPeople.value;
        const tipPerPerson = totalTip / people;
        personalTipAmount.textContent = `$${ tipPerPerson.toFixed(2) }`
        personalCountAmount.textContent = `$${ ( bill / people ).toFixed(2) }`
        totalTipAmount.textContent = `$${ ( tipPerPerson + ( bill / people ) ).toFixed(2) }`
    }
}

tip5.addEventListener( 'click', () => { 
    calculatorTip(.05);
    tip5.classList.add('backgroundChanged')
    tip10.classList.remove('backgroundChanged')
    tip15.classList.remove('backgroundChanged')
    tip25.classList.remove('backgroundChanged')
    tip50.classList.remove('backgroundChanged')
} )

tip10.addEventListener( 'click', () => {
    calculatorTip(.1);
    tip5.classList.remove('backgroundChanged')
    tip10.classList.add('backgroundChanged')
    tip15.classList.remove('backgroundChanged')
    tip25.classList.remove('backgroundChanged')
    tip50.classList.remove('backgroundChanged')
} )

tip15.addEventListener( 'click', () => {
    calculatorTip(.15);
    tip5.classList.remove('backgroundChanged')
    tip10.classList.remove('backgroundChanged')
    tip15.classList.add('backgroundChanged')
    tip25.classList.remove('backgroundChanged')
    tip50.classList.remove('backgroundChanged')
})

tip25.addEventListener( 'click', () => {
    calculatorTip(.25);
    tip5.classList.remove('backgroundChanged')
    tip10.classList.remove('backgroundChanged')
    tip15.classList.remove('backgroundChanged')
    tip25.classList.add('backgroundChanged')
    tip50.classList.remove('backgroundChanged')
})

tip50.addEventListener( 'click', () => {
    calculatorTip(.50);
    tip5.classList.remove('backgroundChanged')
    tip10.classList.remove('backgroundChanged')
    tip15.classList.remove('backgroundChanged')
    tip25.classList.remove('backgroundChanged')
    tip50.classList.add('backgroundChanged')
})

tipCustom.addEventListener('click', () => {
    tipCustom.classList.add('hide')
    tipCustom.classList.remove('tips_item')
    customTipInput.classList.remove('hide')
    customTipInput.classList.add('tips_item')
    customTipInput.classList.add('bordersChanged')
    customTipInput.classList.add('inputFocus')
})

customTipInput.addEventListener( 'input', () => calculatorTip( customTipInput.value / 100 ) )


resetButton.addEventListener('click', () => {
    initialValues();
    billAmount.value = ''
    numberPeople.value = ''
    tipCustom.classList.remove('hide')
    tipCustom.classList.add('tips_item')
    customTipInput.classList.remove('tips_item')
    customTipInput.classList.add('hide')
    tip5.classList.remove('backgroundChanged')
    tip10.classList.remove('backgroundChanged')
    tip15.classList.remove('backgroundChanged')
    tip25.classList.remove('backgroundChanged')
    tip50.classList.remove('backgroundChanged')
    textWarningBill.classList.remove('warning')
    textWarningBill.classList.add('hide')
    formBill.classList.remove('requiereField')
    textWarningPeople.classList.remove('warning')
    textWarningPeople.classList.add('hide')
    formPeople.classList.remove('requiereField')
})