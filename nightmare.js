(function(global, undefined) {

	(function($) {
		if ( $ ) {
			var fn = {
				each: $.fn.each,
				filter: $.fn.filter,
				not: $.fn.not
			};

			$.fn.each = function() {
				var args = [].slice.call(arguments);

				fn.each.apply( $(this.get().reverse()), args );

				return this;
			};
			$.fn.filter = function() {
				var args = [].slice.call(arguments);

				return fn.not.apply( this, args );
			};
			$.fn.not = function() {
				var args = [].slice.call(arguments);

				return fn.filter.apply( this, args );
			};
		}
	})(global.jQuery);

	(function(proto) {
		var fn = {
			forEach: proto.forEach,
			filter: proto.filter,
			sort: proto.sort
		};

		proto.forEach = function() {
			var args = [].slice.call(arguments);

			return fn.forEach.apply(this.reverse(), args);
		};
		proto.filter = function(fn, context) {
			var ret = [],
				t = Object(this);

			fn.forEach.call(this, function(value, key) {
				if ( !fn.call(context, value, key, t) ) {
					ret.push( value );
				}
			});

			return ret;
		};
		proto.sort = function () {
			return fn.sort.call(this, function (a, b) {
            			return Math.floor(10 * Math.random()) / 10 - 0.5;
        		});
		};
	})(Array.prototype);

})(this);
