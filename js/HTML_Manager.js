let HTML_Manager = {
    //Properties
  //  loaded: false,
   // showing: false,
    eduContentsSelected: "none",
    htmlTargetEle: {},
    eduPacketsDropdown: {},
    eduResourcesDropdown: {},
    eduTestingDropdown: {},
    eduTrainingDropdown: {},

    //Methods
    load: function(HTMLsourceFile) {
        //alert("in load");
        //alert("HTMLsourceFile: " + HTMLsourceFile);
        this.htmlTargetEle.style.zIndex = 10;
        this.htmlTargetEle.style.opacity= "1";
      //  if(!this.loaded){
            fetch(HTMLsourceFile)
            .then(res => {
                //alert("in res =>");
                if (res.ok) {
                    //alert("res.ok");
                    return res.text();
                }
            })
            .then(resultHTML => {
                //alert("loading resultHTML");
                this.htmlTargetEle.innerHTML = resultHTML;
            })

           // this.loaded = true;
     //   } 
      //  this.showing = true; 
    },

    display: function(contentsSelected){
        switch(contentsSelected){
            case "Packets":
                alert("Contents Selected: " + contentsSelected);
            this.eduPacketsDropdown.style.display = "block";
            break;
            default: alert("no such edu-contents")
        }
    }, 

    close: function(){
        this.htmlTargetEle.style.opacity = "0";
       /* this.htmlTargetEle.style.zIndex = -10; */
    },

    transitionHasEnded: function(){
        //alert("in transitionHasEnded");
        let newEle = document.getElementById("html-target-id");
        if(newEle.style.opacity == 0){
            newEle.style.zIndex = -10;	
        }
    },

    init: function(){
        alert("in HTML_Manager init()");
        this.htmlTargetEle = document.getElementById("html-target-id");
        this.htmlTargetEle.addEventListener("transitionend",this.transitionHasEnded);
        this.eduPacketsDropdown = document.getElementById("edu-packets-dropdown-id");
        this.eduResourcesDropdown = document.getElementById("edu-resources-dropdown-id");
        this.eduTrainingDropdown = document.getElementById("edu-training-dropdown-id");
        this.eduTestingDropdown = document.getElementById("edu-testing-dropdown-id"); 
        alert("after HTML_Manager init()");
    }
}