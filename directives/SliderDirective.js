// Generated by CoffeeScript 1.7.1
'use strict';
MainModule.directive('slide', function($timeout) {
  return {
    link: function(scope, element) {
      return $timeout(function() {
        $(".rslides").responsiveSlides({
          auto: false,
          speed: 500,
          nav: true,
          prevText: "Назад",
          nextText: "Далее",
          maxwidth: 500,
          before: function() {
            return scope.$parent.onlyCurrent = true;
          }
        });
        $('.next').click(function() {
          return scope.$parent.onlyCurrent = true;
        });
        return $('.prev').click(function() {
          return scope.$parent.onlyCurrent = true;
        });
      });
    }
  };
});

//# sourceMappingURL=SliderDirective.map
