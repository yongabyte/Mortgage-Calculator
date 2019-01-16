({
    draw : function(component) {
        var labelset=["Loan payment","Property tax","Homeowner's insurance"] ;
        let loan = component.get("v.monthly") - component.get("v.mortgage.property_tax__c")
                    - component.get("v.mortgage.homeowners_insurance__c");
        var dataset=[loan,component.get("v.mortgage.property_tax__c"),
                     component.get("v.mortgage.homeowners_insurance__c")] ;
        
        for (let i = 0; i < dataset.length; i++){
            dataset[i] = (dataset[i]/1).toFixed(2);
        }
        
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
