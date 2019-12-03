/* global Log, Module */

/* Magic Mirror
 * Module: MMM-10th-planet-todays-warmup
 *
 * By Helge Andre Sletten
 * 
 * MIT Licensed.
 */
Module.register("MMM-10th-planet-todays-warmup", {

	// Module config defaults.
	defaults: {
        warmups: [
            {
                id: 'A',
                to: '/A',
                icon: 'apps',
                title: 'Granbys',
                description: '',
                videoUrl: ''
            },
            {
                id: 'B',
                to: '/B',
                icon: 'apps',
                title: 'Hail Marys',
                description: '',
                videoUrl: ''
            },
            {
                id: 'C',
                to: '/C',
                icon: 'apps',
                title: 'Pressure Passes',
                description: '',
                videoUrl: ''
            },
            {
                id: 'D',
                to: '/D',
                icon: 'apps',
                title: 'Standing Passes',
                description: '',
                videoUrl: ''
            },
            {
                id: 'E',
                to: '/E',
                icon: 'apps',
                title: 'Quarter Guard',
                description: '',
                videoUrl: ''
            },
            {
                id: 'F',
                to: '/F',
                icon: 'apps',
                title: 'Butterflies',
                description: '',
                videoUrl: ''
            },
            {
                id: 'G',
                to: '/G',
                icon: 'apps',
                title: 'Top Half Passes',
                description: '',
                videoUrl: ''
            },
            {
                id: 'H',
                to: '/H',
                icon: 'apps',
                title: 'Open Guards',
                description: '',
                videoUrl: ''
            }
        ],
		updateInterval: 30000,
		fadeSpeed: 4000,
		morningStartTime: 3,
		morningEndTime: 12,
		afternoonStartTime: 12,
		afternoonEndTime: 17
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		var self = this;

		// Schedule update timer.
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
    },

    getWarmUpLetterByDate: function(date){

        // If no given date we fetch todays date
        var today = date || new Date();
        var ONE_DAY = 1000 * 3600 * 24;

        // Config
        var startDate = new Date(2019,0,14);
        
        var diff = Math.ceil((Math.abs(today.getTime() - startDate.getTime())/ (ONE_DAY)));
        var offSet = diff % 7;
        var toBeRem = Math.floor(diff/7)*3;
        if(offSet > 4){
            toBeRem += (offSet - 4);
        }
        var finCount = (((diff-1) - toBeRem) % 32);
    
        var rotation = [
            'A', 'B', 'C', 'D'
            ,'E', 'F', 'G', 'H'
            ,'B', 'A', 'D', 'C'
            ,'F', 'E', 'H', 'G'
            ,'D', 'C', 'B', 'A'
            ,'H', 'G', 'F', 'E'
            ,'C', 'D', 'A', 'B'
            ,'G', 'H', 'E', 'F'
        ];
    
        return rotation[finCount];
    },

    getWarmupById: function(id){
        return this.config.warmups.filter(function(item){
            return item.id === id;
        })[0];
    },
    
    getWarmupOfTheDay: function(){
        var letterOfTheDay = this.getWarmUpLetterByDate();
        var warmup = this.getWarmupById(letterOfTheDay);   

        return "Today's warm up: " + warmup.id + ' - ' + warmup.title;
    },

	// Override dom generator.
	getDom: function() {
		var warmupText = this.getWarmupOfTheDay();

		var compliment = document.createTextNode(warmupText);
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
		wrapper.appendChild(compliment);

		return wrapper;
	}

});
