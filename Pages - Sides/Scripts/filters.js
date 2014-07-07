$(window).load(function() {
                $("#main").bind('click', $.proxy(function (event) {
                    var status = $(event.target).attr('data-filter'); 
                    console.log(status);
                    var boxes = document.getElementsByTagName("box");
                    if(status != null){
                        for(var i = 0; i < boxes.length; i++){
                            var type = boxes[i].getAttribute("data-filter");
                            var box = boxes[i].getAttribute("id");
                            document.getElementById(box).style.display = "inline-block";
                            if(!(type.indexOf(status) > -1) && status != "reset"){
                                console.log(box);
                                document.getElementById(box).style.display = "none";
                            }
                        }
                    }
                }))
            })