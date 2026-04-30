angular
  .module('myApp')
  .controller('HomeController', [function () {
    var vm = this;

    vm.title = 'Obesity in the United States';
    vm.subtitle = 'A data-driven overview of one of America\'s most pressing public health challenges.';
    vm.source = 'Sources: CDC NHANES 2017–2020, State of Obesity Report 2023';

    vm.keyStats = [
      { value: '41.9%', label: 'Adults with Obesity', color: 'stat-pink', note: 'Ages 20 and older' },
      { value: '19.7%', label: 'Children with Obesity', color: 'stat-lavender', note: 'Ages 2–19' },
      { value: '9.2%', label: 'Severe Obesity Rate', color: 'stat-peach', note: 'Adults, BMI ≥ 40' },
      { value: '$173B', label: 'Annual Medical Cost', color: 'stat-mint', note: 'Attributed to obesity' }
    ];

    vm.demographics = [
      { group: 'Non-Hispanic Black Adults', rate: 49.9 },
      { group: 'Hispanic Adults', rate: 45.6 },
      { group: 'Non-Hispanic White Adults', rate: 41.4 },
      { group: 'Non-Hispanic Asian Adults', rate: 16.1 }
    ];

    vm.ageGroups = [
      { group: '20–39 years', rate: 39.8 },
      { group: '40–59 years', rate: 44.3 },
      { group: '60 and older', rate: 41.5 }
    ];

    vm.topStates = [
      { state: 'Mississippi', rate: 39.5 },
      { state: 'West Virginia', rate: 39.1 },
      { state: 'Alabama', rate: 36.3 },
      { state: 'Arkansas', rate: 36.0 },
      { state: 'Tennessee', rate: 35.5 },
      { state: 'Louisiana', rate: 35.4 }
    ];

    vm.trends = [
      { year: '2000', rate: 30.5 },
      { year: '2005', rate: 33.9 },
      { year: '2010', rate: 35.7 },
      { year: '2015', rate: 37.7 },
      { year: '2020', rate: 41.9 }
    ];

    vm.maxTrendRate = 50;

    vm.barWidth = function(rate) {
      return (rate / 55) * 100 + '%';
    };

    vm.trendBarHeight = function(rate) {
      return (rate / vm.maxTrendRate) * 100 + '%';
    };
  }]);
