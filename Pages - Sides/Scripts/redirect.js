var items = new Array();
items["autix"] = "https://github.com/mahirk/autixdev";
items["flc"] = "http://flc.co.in";
items["rise"] = "../Files/Extended Essay_Virtulaization_Mahir_signed.pdf";
items["pathify"] = "http://pathify.info";
items["catlyft"] = "https://github.com/mahirk/catlyft";
items["c4k"] = "https://github.com/mahirk/CodingForKids";
items["chowdown"] = "https://github.com/mahirk/chowdown";
items["suw"] = "http://startupuw.com";
items["otg"] = "http://flc.co.in";
items["amun"] = "http://abwamun.org";
items["aaa"] = "http://abwaalumni.com";
items["interaa"] = "http://interaa.in";

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