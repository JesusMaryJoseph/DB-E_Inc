/*    
*   NavHandler    line 7
*  
*/ 


/* Create a new Class to handle the Main Navigation */

let NavHandler = {
	//Properties
	hidden: true,
//	changingPg: false,
//	navDropDownId: "home-nav-id",
//	selectedPgId: "home-pg-id", 
	navDropDownId: {},
//	navOptsCntnrId: {},
//	mouseActionEle: {},


	//Methods
	mouseLeave: function(){
	//	this.mouseActionEle.innerHTML += 'leaving: ' + evt.target.id + '<br>';
		if(this.hidden == true){ return };
		this.showHide();
	},

	showHide: function() {  //show or hide Navigation selection list
		//alert("in showHide");
		if(this.hidden) {
		//	alert('show dropdown');
		    this.navDropDownId.classList.remove('hide-dropdown');
			this.hidden = false; 
		//	alert('this.hidden: ' + this.hidden);
		}else{
			//alert('hide dropdown');
			this.navDropDownId.classList.add('hide-dropdown');
			this.hidden = true;
		}
	}, //End of Mehod: showHide()

	hideNav: function(){
		document.getElementById('nav-cntnr-id').classList.remove('display-nav')
	    this.hidden = true;
	},

	displayNav: function(){
	//	alert("in displayNav");
	/*	this.navOptsCntnrId.classList.remove('hide-nav'); */
		this.navCntnrId.classList.remove('hide-nav');
	    this.hidden = false;
	},

	init: function(){
		//alert("in NavHandler.init()");
		this.navDropDownId = document.getElementById("nav-dropdown-id");
	   //alert("NavHandler.init() finished");
	}


} //End of Class(Object): NavHandler




/* Create a new Class to handle Page Manipulation */

let PageManager = {
	// Properties
	selectedPg: "Home",

	changePage: function(evt) {
	//	this.changingPg = true;
		alert("in changePg()");
	alert("evt.target.value: " + evt.target.value);
		let navId = evt.target.id;
	//	alert("evt.target.id: " + navId + "  old.id: " + this.selectedNavId);
		/*TODO
		*   1.) remove class 'sel-nav' from the present selected navId(ie this.selectedNavId) 
		*   2.) add class 'selNav' to the newly clicked Id(ie navId)
		*	3.) Change Pages 
		*		a.) add class 'hidePg' to the present page
		*		b.) remove class 'hidePg' from the newly clicked Id
		*   4.) update: this.selectedNavId = navId 
		*	5.) hide navOptionsCntnr and update this.hidden
		*/
		// 1.) and 2.)
//	alert("adding 'sel-nav' to " + navId);
		document.getElementById(navId).classList.add("sel-nav");
//	alert("removing 'sel-nav' from " + this.selectedNavId);
		document.getElementById(this.selectedNavId).classList.remove("sel-nav");
//	alert("add & remove 'sel-nav' completed");
		// 3.a)
		document.getElementById(this.selectedPgId).classList.replace('show-pg','hide-pg');
		// 3.b)
		switch(navId){
			case "home-nav-id":
				document.getElementById("home-pg-id").classList.replace('hide-pg','show-pg');
				this.selectedPgId = "home-pg-id";
				break;
			case "about-nav-id":
				document.getElementById("about-pg-id").classList.replace('hide-pg','show-pg');
				this.selectedPgId = "about-pg-id";
				break;
			case "company-nav-id": 
                DisplayCompany.load();
				document.getElementById("company-pg-id").classList.replace('hide-pg','show-pg');
				this.selectedPgId = "company-pg-id";
        //    alert("Calling DisplayCompany.load()");
				break;
			case "resource-nav-id":
				document.getElementById("resource-pg-id").classList.replace('hide-pg','show-pg');
				this.selectedPgId = "resource-pg-id";
				break;
			default:
				alert(navId + " does not exist");
		}
	}
	/*	//4.)
//	alert("navId: " + navId);
		this.selectedNavId = navId;
		this.showHide();
		//5.) 
		//this.navCntnrId.classList.add('hide-nav');
		setTimeout(this.hideOpts,400);
		this.hidden = true; */

/*	hideOpts: function() {
		this.changingPg = false;
	} */

	} 

//End of PageManager
