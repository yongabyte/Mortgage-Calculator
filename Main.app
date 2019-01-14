<aura:application extends="force:slds">
     <aura:attribute name="mortgage" type="Mortgage__c"
         default="{ 'sobjectType': 'Mortgage__c',
                        'home_price__c': '100000',
                        'down_payment__c': '0',
                        'interest_rate__c': '6',
                        'length_of_loan__c': '30',
                        'property_tax__c':'0',
                  		'homeowners_insurance__c': '0'
                  }"/>
    <aura:attribute name ="monthly" type="Double"/>
    <lightning:layout >
        <c:MortgageCalculator mortgage="{!v.mortgage}" monthly="{!v.monthly}"/>
        <c:MonthlyPayment monthly="{!v.monthly}" mortgage="{!v.mortgage}"/>
     </lightning:layout>
</aura:application>
