({
    scriptsLoaded : function(component, event, helper) {
        var labelset=["Loan payment","Property tax","Homeowner's insurance"] ;
        let loan = component.get("v.monthly") - component.get("v.mortgage.property_tax__c")
        			- component.get("v.mortgage.homeowners_insurance__c");
        var dataset=[loan,component.get("v.mortgage.property_tax__c"),
                     component.get("v.mortgage.homeowners_insurance__c")] ;
        
        new Chart(document.getElementById("pie-chart"), {
            type: 'pie',
            data: {
                labels:labelset,
                datasets: [{
                    backgroundColor: ["#438bbf", "#ad7ecd","#ff6b90"],
                    data: dataset
                }]
            },
            options: {
                legend: {
                    display: true,
                    position: 'right'
                }
               	,
                title: {
                    display: false,
                    text: 'monthly payment'
                }                
            }
        });
    },
    draw : function(component, event){
        var labelset=["Loan payment","Property tax","Homeowner's insurance"] ;
        let loan = component.get("v.monthly") - component.get("v.mortgage.property_tax__c")
        			- component.get("v.mortgage.homeowners_insurance__c");
        var dataset=[loan,component.get("v.mortgage.property_tax__c"),
                     component.get("v.mortgage.homeowners_insurance__c")] ;
       
        new Chart(document.getElementById("pie-chart"), {
            type: 'pie',
            data: {
                labels:labelset,
                datasets: [{
                    backgroundColor: ["#438bbf", "#ad7ecd","#ff6b90"],
                    data: dataset
                }]
            },
            options: {
                legend: {
                    display: true,
                    position: 'right'
                }
               	,
                title: {
                    display: false,
                    text: 'monthly payment'
                }                
            }
        });
  }
})
