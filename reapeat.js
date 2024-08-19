const ActualTotalPrice = document.getElementById('total-tk');
// function 1 
const ClickedProductAccessories = () =>{
   const ProductName =  GetNameFromHtml('product-1');
   SetNameFromHtml(ProductName);
   const value = GetValueFromHtml('value-1');
   const FloatValue = parseFloat(value);
   const TotalPrice = GetNameFromHtml('total-tk');
   const FloatTotalPrice = parseFloat(TotalPrice);
   const Prices = parseFloat(FloatValue + FloatTotalPrice);
   const Price = Prices.toFixed(2);
   if(Price > 0){
    const MakePurchase = document.getElementById('purchase-btn');
    MakePurchase.disabled = false;
   }
   ActualTotalPrice.innerText = Price;
}
// function 2 
const ClickedProductCrockeries = () =>{
   const ProductName =  GetNameFromHtml('product-2');
   SetNameFromHtml(ProductName);
   const value = GetValueFromHtml('value-2');
   const FloatValue = parseFloat(value);
   const TotalPrice = GetNameFromHtml('total-tk');
   const FloatTotalPrice = parseFloat(TotalPrice);
   const Prices = parseFloat(FloatValue + FloatTotalPrice);
   const Price = Prices.toFixed(2);
   if(Price > 0){
    const MakePurchase = document.getElementById('purchase-btn');
    MakePurchase.disabled = false;
   }
   ActualTotalPrice.innerText = Price;
}
// function 3 
const ClickedProductHomeCooker = () =>{
   const ProductName =  GetNameFromHtml('product-3');
   SetNameFromHtml(ProductName);
   const value = GetValueFromHtml('value-3');
   const FloatValue = parseFloat(value);
   const TotalPrice = GetNameFromHtml('total-tk');
   const FloatTotalPrice = parseFloat(TotalPrice);
   const Prices = parseFloat(FloatValue + FloatTotalPrice);
   const Price = Prices.toFixed(2);
   if(Price > 0){
    const MakePurchase = document.getElementById('purchase-btn');
    MakePurchase.disabled = false;
   }
   ActualTotalPrice.innerText = Price;
}
// function 4 
const ClickedBackCap = () =>{
   const ProductName =  GetNameFromHtml('product-4');
   SetNameFromHtml(ProductName);
   const value = GetValueFromHtml('value-4');
   const FloatValue = parseFloat(value);
   const TotalPrice = GetNameFromHtml('total-tk');
   const FloatTotalPrice = parseFloat(TotalPrice);
   const Prices = parseFloat(FloatValue + FloatTotalPrice);
   const Price = Prices.toFixed(2);
   if(Price > 0){
    const MakePurchase = document.getElementById('purchase-btn');
    MakePurchase.disabled = false;
   }
   ActualTotalPrice.innerText = Price;
}
// function 5
const ClickedJerseySet = () =>{
   const ProductName =  GetNameFromHtml('product-5');
   SetNameFromHtml(ProductName);
   const value = GetValueFromHtml('value-5');
   const FloatValue = parseFloat(value);
   const TotalPrice = GetNameFromHtml('total-tk');
   const FloatTotalPrice = parseFloat(TotalPrice);
   const Prices = parseFloat(FloatValue + FloatTotalPrice);
   const Price = Prices.toFixed(2);
   if(Price > 0){
    const MakePurchase = document.getElementById('purchase-btn');
    MakePurchase.disabled = false;
   }
   ActualTotalPrice.innerText = Price;
}
// function 6 
const ClickedSportsCates = () =>{
   const ProductName =  GetNameFromHtml('product-6');
   SetNameFromHtml(ProductName);
   const value = GetValueFromHtml('value-6');
   const FloatValue = parseFloat(value);
   const TotalPrice = GetNameFromHtml('total-tk');
   const FloatTotalPrice = parseFloat(TotalPrice);
   const Prices = parseFloat(FloatValue + FloatTotalPrice);
   const Price = Prices.toFixed(2);
   if(Price > 0){
    const MakePurchase = document.getElementById('purchase-btn');
    MakePurchase.disabled = false;
   }
   ActualTotalPrice.innerText = Price;
}
// function 7
const handleClickChair = () =>{
    const ProductName =  GetNameFromHtml('product-7');
    SetNameFromHtml(ProductName);
    const value = GetValueFromHtml('value-7');
    const FloatValue = parseFloat(value);
    const TotalPrice = GetNameFromHtml('total-tk');
    const FloatTotalPrice = parseFloat(TotalPrice);
    const Prices = parseFloat(FloatValue + FloatTotalPrice);
    const Price = Prices.toFixed(2);
    if(Price > 0){
    const MakePurchase = document.getElementById('purchase-btn');
    MakePurchase.disabled = false;
   }
    ActualTotalPrice.innerText = Price;
 }
// function 8
const handleChildrenPlay = () =>{
   const ProductName =  GetNameFromHtml('product-8');
   SetNameFromHtml(ProductName);
   const value = GetValueFromHtml('value-8');
   const FloatValue = parseFloat(value);
   const TotalPrice = GetNameFromHtml('total-tk');
   const FloatTotalPrice = parseFloat(TotalPrice);
   const Prices = parseFloat(FloatValue + FloatTotalPrice);
   const Price = Prices.toFixed(2);
   if(Price > 0){
    const MakePurchase = document.getElementById('purchase-btn');
    MakePurchase.disabled = false;
   }
   ActualTotalPrice.innerText = Price;
}
// function 9
const handleFlexibleSofa = () =>{
    const ProductName =  GetNameFromHtml('product-9');
    SetNameFromHtml(ProductName);
    const value = GetValueFromHtml('value-9');
    const FloatValue = parseFloat(value);
    const TotalPrice = GetNameFromHtml('total-tk');
    const FloatTotalPrice = parseFloat(TotalPrice);
    const Prices = parseFloat(FloatValue + FloatTotalPrice);
    const Price = Prices.toFixed(2);
    if(Price > 0){
    const MakePurchase = document.getElementById('purchase-btn');
    MakePurchase.disabled = false;
   }
    ActualTotalPrice.innerText = Price;
 }
//  Apply btn 
setInterval(function buttonChange(){
    const CouponCodeValue = document.getElementById('coupon-input');
     const CouponCode = CouponCodeValue.value;
     const ApplyBtn = document.getElementById('Apply-btn');
    if(CouponCode === 'SELL200'){
            ApplyBtn.disabled = false;
    }
},500);
// calculation part percentage
const ClickedApplyBtn = () =>{
    const Discount = document.getElementById('discount-value');
    const Total = document.getElementById('total-value');
    // Total Price 
    const TotalPrice = GetValueFromHtml('total-tk');
    const FixedTotalPrice = parseFloat(TotalPrice);
    // discount 
    const PreDiscount = FixedTotalPrice * 0.20;
    const FixedDiscount =PreDiscount.toFixed(2);
    Discount.innerText= FixedDiscount;
    // Total 
    const FixedFloatingPreTotal = FixedTotalPrice - PreDiscount;
    const FixedTotal = FixedFloatingPreTotal.toFixed(4);
    Total.innerText = FixedTotal

}
// get Name 
const GetNameFromHtml = (name) =>{
    const Name = document.getElementById(name);
    const ActualName = Name.innerText;
   return ActualName;
}
// get Value 
const GetValueFromHtml = (value) =>{
    const Value = document.getElementById(value);
    const PreValue = Value.innerText;
    // const ActualValue = parseFloat(PreValue);
    return PreValue;
}
// setName 
const SetNameFromHtml = (name) =>{
    const SetProductName = document.getElementById('product-name');
    const p = document.createElement('p');
    const count = SetProductName.childElementCount;
    p.innerHTML = `${count + 1}. ${name}`;
    SetProductName.appendChild(p);

}
// GoToHome 
const GoToHome = () =>{
    window.location.href = '/';
}