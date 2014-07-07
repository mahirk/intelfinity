var items = new Array();
items["autix"] = "http://flc.co.in";
items["flc"] = "http://flc.co.in";
items["rise"] = "http://flc.co.in";
items["pathify"] = "http://flc.co.in";
items["catlyft"] = "http://flc.co.in";
items["c4k"] = "http://flc.co.in";
items["chowdown"] = "http://flc.co.in";
items["suw"] = "http://flc.co.in";
items["otg"] = "http://flc.co.in";
items["amun"] = "http://flc.co.in";
items["aaa"] = "http://flc.co.in";
items["interaa"] = "http://flc.co.in";

$(window).load(function() {
   $("#projlist").bind('click', $.proxy(function (event) {
       var targetel = $(event.target);
       var val = targetel.attr('id'); 
       console.log(targetel);
       console.log(val);
       if (val == null){
            val = targetel.attr('name');
        }
       if(val != null){
            window.location = items[val];
       }
   }))
})