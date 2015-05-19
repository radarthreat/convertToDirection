function convertToDirection (degrees) {
			if (degrees.between(348.75, 360)) {
				direction = "N";}
			else if (degrees.between(0, 11.25)) {
				direction = "N";}
			else if (degrees.between(11.25, 33.75)) {
				direction = "NNE";}
			else if (degrees.between(33.75, 56.25)) {
				direction = "NE";}
			else if (degrees.between(56.25, 78.75)) {
				direction = "ENE";}
			else if (degrees.between(78.75, 101.25)) {
				direction = "NE";}
			else if (degrees.between(101.25, 123.75)) {
				direction = "ESE";}
			else if (degrees.between(123.75, 146.25)) {
				direction = "SE";}
			else if (degrees.between(146.25, 168.75)) {
				direction = "SSE";}
			else if (degrees.between(168.75, 191.25)) {
				direction = "S";}
			else if (degrees.between(191.25, 213.75)) {
				direction = "SSW";}
			else if (degrees.between(213.75, 236.25)) {
				direction = "SW";}
			else if (degrees.between(236.25, 258.75)) {
				direction = "WSW";}
			else if (degrees.between(258.75, 281.25)) {
				direction = "W";}
			else if (degrees.between(281.25, 303.75)) {
				direction = "WNW";}
			else if (degrees.between(303.75, 326.25)) {
				direction = "NW";}
			else if (degrees.between(326.25, 348.75)) {
				direction = "NNW";}
			else {direction = "Invalid Direction";}
		
			return direction;
		};
