const button = document.getElementById('purchase-btn');
const Total = document.getElementById('total-tk');
// 1
function ClickedProductAccessories() {
    const ProductName = getNameFromInput('product-1');
    GetInputValue(ProductName);
    const Value = getValueFromInput('value-1');
    const TotalTk = getValueFromInput('total-tk');
    Total.innerText = parseFloat(Value + TotalTk);
    if (Total.innerText > 0) {
        button.disabled = false;
    }
}


// 2
function ClickedProductCrockeries() {
    const ProductName = getNameFromInput('product-2');
    GetInputValue(ProductName);
    const Value = getValueFromInput('value-2');
    const TotalTk = getValueFromInput('total-tk');
    Total.innerText = parseFloat(Value + TotalTk);
    if (Total.innerText > 0) {
        button.disabled = false;
    }
}
// 3
function ClickedProductHomeCooker() {
    const ProductName = getNameFromInput('product-3');
    GetInputValue(ProductName);
    const Value = getValueFromInput('value-3');
    const TotalTk = getValueFromInput('total-tk');
    Total.innerText = parseFloat(Value + TotalTk);
    if (Total.innerText > 0) {
        button.disabled = false;
    }
}
// 4
function ClickedBackCap(){
    const ProductName = getNameFromInput('product-4');
    GetInputValue(ProductName);
    const Value = getValueFromInput('value-4');
    const TotalTk = getValueFromInput('total-tk');
    Total.innerText = parseFloat(Value + TotalTk);
    if (Total.innerText > 0) {
        button.disabled = false;
    }
}
// 5
function ClickedJerseySet(){
    const ProductName = getNameFromInput('product-5');
    GetInputValue(ProductName);
    const Value = getValueFromInput('value-5');
    const TotalTk = getValueFromInput('total-tk');
    Total.innerText = parseFloat(Value + TotalTk);
    if (Total.innerText > 0) {
        button.disabled = false;
    }
}
// 6
function ClickedSportsCates(){
    const ProductName = getNameFromInput('product-6');
    GetInputValue(ProductName);
    const Value = getValueFromInput('value-6');
    const TotalTk = getValueFromInput('total-tk');
    Total.innerText = parseFloat(Value + TotalTk);
    if (Total.innerText > 0) {
        button.disabled = false;
    }
}
// Apply 
const Apply = document.getElementById('Apply-btn');
const PreCouponCode = document.getElementById('coupon-input');
setInterval(function buttonChange() {
    const CouponCode = PreCouponCode.value;
    if (CouponCode === "SELL200") {
        Apply.disabled = false;
    }
}, 500);
// percentage calculate 
const PreDiscountValue = getNameFromInput('discount-value');
const PreTotalValue = getNameFromInput('total-value');
const Discount = document.getElementById('discount-value');
const TotalValue = document.getElementById('total-value');
function ClickedApplyBtn() {
    const TotalTk = getValueFromInput('total-tk');
    const CalculateDiscountValue = TotalTk * 0.20;
    const FixedCalculateDiscountValue = CalculateDiscountValue.toFixed(2)
    Discount.innerText = FixedCalculateDiscountValue;
    const CalculateTotalValue = TotalTk - CalculateDiscountValue;
    const FixedCalculateTotalValue = CalculateTotalValue.toFixed(2);
    TotalValue.innerText = FixedCalculateTotalValue;
}
                                            
function GoToHome (){
    window.location.href = '/';
}
// reusable function 
// Name 
function getNameFromInput(product) {
    const Products = document.getElementById(product);
    const ProductValue = Products.innerText;
    return ProductValue;
}
// Tk 
function getValueFromInput(value) {
    const Values = document.getElementById(value);
    const PreActualValue = Values.innerText;
    const ActualValue = parseFloat(PreActualValue);
    const FixedActualValue = ActualValue.toFixed(2);
    return FixedActualValue;
}
// Set Name 
function GetInputValue(name) {
    const ProductName = document.getElementById('product-name');
    const p = document.createElement('p');
    const count = ProductName.childElementCount;
    p.innerHTML = `${count + 1}. ${name}`;
    ProductName.appendChild(p);
}