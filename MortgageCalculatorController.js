({
	click : function(component, event, helper) {
        let m = component.get("v.mortgage");
        
        let n = m.length_of_loan__c *12;
        let i = (m.interest_rate__c /100)/12;
        let d = (Math.pow((1 + i),n) -1 ) /(i*(Math.pow(1+i,n)));
        let amount = m.home_price__c - m.down_payment__c;
        let fees = m.property_tax__c/1 + m.homeowners_insurance__c/1;
        amount = amount/d + fees;
        component.set("v.monthly",amount);
	},
    onUpdate: function(component){
        let m = component.get("v.mortgage");
        
        let n = m.length_of_loan__c *12;
        let i = (m.interest_rate__c /100)/12;
        let d = (Math.pow((1 + i),n) -1 ) /(i*(Math.pow(1+i,n)));
        let loanPayment = component.get("v.monthly") - m.property_tax__c/1 + m.homeowners_insurance__c/1;
        let hp = loanPayment * d;
        component.set("v.mortgage.home_price__c",hp);
	}
})
