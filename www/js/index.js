var watchAccelId;
var Start_Accel = function() {

	var success = function(a){
		document.getElementById('x').innerHTML = a.x;
		document.getElementById('y').innerHTML = a.y;
		document.getElementById('z').innerHTML = a.z;
	};

	var fail = function(e){
		alert("watchAccel fail callback with error code "+e);
	};

	var opt = {};
	opt.frequency = 500;
	watchAccelId = navigator.accelerometer.watchAcceleration(success, fail, opt);

};

var Stop_Accel = function() {
		navigator.accelerometer.clearWatch(watchAccelId);
};

var Get_Accel = function() {

	var success = function(a){
		document.getElementById('x').innerHTML = a.x;
		document.getElementById('y').innerHTML = a.y;
		document.getElementById('z').innerHTML = a.z;
	}; 
    var fail = function(e){
		alert("watchAccel fail callback with error code "+e);
	};    
	navigator.accelerometer.getCurrentAcceleration(success, fail);
};

function init(){
    document.addEventListener("deviceready", function(){}, false);
};
