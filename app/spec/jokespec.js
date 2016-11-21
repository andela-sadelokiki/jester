describe('Jokers App', function() {
  var jobScope, JokeCtrl;
  beforeEach(module('Jokers'));

  beforeEach(inject(function($controller, $rootScope) {
    jobScope = $rootScope.$new();
    JokeCtrl = $controller('JokeCtrl', {
      $scope: jobScope
    });
  }));

  it('Joke controller should be defined', function() {
    expect(JokeCtrl).toBeDefined();
  });

  describe('Joke Controller', function() {

    it('should have variable alljokes of type array', function() {
      var type = typeof jobScope.alljokes;
      expect(type).toBe('object');
    });

    it('should have function getNerdy of type array', function() {
      var type = typeof jobScope.getNerdy;
      expect(type).toBe('function');
    });

    it('should have function getExplicit of type array', function() {
      var type = typeof jobScope.getExplicit;
      expect(type).toBe('function');
    });

    it('should have function chuckNorrisJokes of type array', function() {
      var type = typeof jobScope.chuckNorrisJokes;
      expect(type).toBe('function');
    });
  });
});
