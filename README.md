# Module: MMM-10th-planet-todays-warmup
The `MMM-10th-planet-todays-warmup` module is displaying todays 10th planet warm up routine.

## Screenshots
- Screenshot
todo: add screenshot

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "10th-planet-todays-warmup",
		position: "lower_third",	// This can be any of the regions.
									// Best results in one of the middle regions like: lower_third
		config: {
			// The config property is optional.
			// If no config is set, the default compliments are shown.
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:


| Option           | Description
| ---------------- | -----------
| `updateInterval` | How often does the warmups have to change? (Milliseconds) <br><br> **Possible values:** `1000` - `86400000` <br> **Default value:** `30000` (30 seconds)
| `fadeSpeed`      | Speed of the update animation. (Milliseconds) <br><br> **Possible values:**`0` - `5000` <br> **Default value:** `4000` (4 seconds)
| `warmups`	   | The list of warmups. <br><br> **Possible values:** An array with the warmup routine.
| `classes`        | Override the CSS classes of the div showing the compliments <br><br> **Default value:** `thin xlarge bright`

### Compliment configuration

The `warmups` property contains an array of the warm up sets

#### Default value:
````javascript
config: {
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
        ]
}
````
