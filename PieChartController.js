({
    scriptsLoaded : function(component, event, helper) {
   		helper.draw(component);
    },
    
    onMonthlyChanged : function(component, event,helper){
        helper.draw(component);
	}
})
