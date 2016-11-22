describe('Jokers App', function() {
  var jokeScope, JokeCtrl, JokeService;

  beforeEach(module('Jokers'));

  beforeEach(inject(function($rootScope, $controller) {
    jobScope = $rootScope.$new();

    JokeService = {
      getNerdyJokes: function() {},
      getExplicitJokes: function() {},
      chuckNorrisJokes: function() {}
    };

    spyOn(JokeService, 'getNerdyJokes');
    spyOn(JokeService, 'getExplicitJokes');
    spyOn(JokeService, 'chuckNorrisJokes');

    JokeService.getNerdyJokes();
    JokeService.getExplicitJokes();
    JokeService.chuckNorrisJokes();

    JokeCtrl = $controller('JokeCtrl', {
      $scope: jobScope,
    });
  }));

  it('Joke controller should be defined', function() {
    expect(JokeCtrl).toBeDefined();
  });

  it('should get an instance of JokeServzice', function() {
    expect(JokeService).toBeDefined();
  });


  describe('Joke Controller', function() {
    it('should have variable alljokes of type array', function() {
      var type = typeof jobScope.alljokes;
      expect(type).toBe('object');
    });

    it('should call JokeService.getNerdyJokes() once', function() {
      expect(JokeService.getNerdyJokes).toHaveBeenCalled();
      expect(JokeService.getNerdyJokes.calls.count()).toEqual(1);
    });

    it('should call JokeService.getExplicitJokes() once', function() {
      expect(JokeService.getExplicitJokes).toHaveBeenCalled();
      expect(JokeService.getExplicitJokes.calls.count()).toEqual(1);
    });

    it('should call JokeService.getExplicitJokes() once', function() {
      expect(JokeService.getExplicitJokes).toHaveBeenCalled();
      expect(JokeService.getExplicitJokes.calls.count()).toEqual(1);
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
