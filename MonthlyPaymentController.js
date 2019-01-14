({
	handleRangeChange : function(component, event, helper) {
        let mon = 100+(+ component.get("v.monthly"));
        if(mon>1000){
           component.set("v.max",mon); 
        }else{
           component.set("v.max",1000); 
        }
	}
})
