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
// Apply 
const Apply = document.getElementById('Apply-btn');
const PreCouponCode = document.getElementById('coupon-input');
setInterval(function buttonChange(){
    const CouponCode = PreCouponCode.value;
    if(CouponCode === "SELL200"){
        Apply.disabled  = false;
    }
},500);
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
    return ActualValue;
}
// Set Name 
function GetInputValue(name) {
    const ProductName = document.getElementById('product-name');
    const p = document.createElement('p');
    const count = ProductName.childElementCount;
    p.innerHTML = `${count + 1}. ${name}`;
    ProductName.appendChild(p);
}