var app = function(){

};app.prototype={
//use the javascript prototype
    edit:function(id,id2){
        alert(id + "---" + id2);
    },
    show:function(id){
        alert(id);
    }
};app = new app; //generate an app Object;
