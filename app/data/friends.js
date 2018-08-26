// ===============================================================================
// DATA
// Below data will hold all of the pre-collected possible matches.
// ===============================================================================

var friends = [
  {
    "name":"Peter Gibbons",
    "photo":"https://static.tvtropes.org/pmwiki/pub/images/screen_shot_2017_08_02_at_92543_am.png",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Michael Bolton",
    "photo":"https://static.tvtropes.org/pmwiki/pub/images/michael_bolton.jpg",
    "scores":[
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5
      ]
  },
  {
    "name":"Samir Nagheenanajar",
    "photo":"https://static.tvtropes.org/pmwiki/pub/images/screen_shot_2017_08_02_at_93332_am.png",
    "scores":[
        5,
        4,
        3,
        2,
        1,
        5,
        4,
        3,
        2,
        1
      ]
  },
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        1,
        3,
        5,
        2,
        4,
        1,
        3,
        5,
        2,
        4
      ]
  },
  {
    "name":"Bill Lumbergh",
    "photo":"https://static.tvtropes.org/pmwiki/pub/images/screen_shot_2017_08_02_at_93535_am.png",
    "scores":[
        2,
        4,
        1,
        3,
        5,
        2,
        4,
        1,
        3,
        5
      ]
  },
  {
    "name":"Joanna ",
    "photo":"https://static.tvtropes.org/pmwiki/pub/images/screen_shot_2017_08_05_at_15740_pm.png",
    "scores":[
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        5
      ]
  },
  {
    "name":"Milton Waddams",
    "photo":"https://static.tvtropes.org/pmwiki/pub/images/screen_shot_2017_08_05_at_20702_pm.png",
    "scores":[
        5,
        5,
        4,
        4,
        3,
        3,
        2,
        2,
        1,
        1
      ]
  },
  {
    "name":"Lawrence",
    "photo":"https://static.tvtropes.org/pmwiki/pub/images/screen_shot_2017_08_05_at_20930_pm.png",
    "scores":[
        5,
        1,
        4,
        2,
        3,
        5,
        1,
        4,
        2,
        3
      ]
  },
  {
    "name":"Tom Smykowski",
    "photo":"https://static.tvtropes.org/pmwiki/pub/images/screen_shot_2017_08_05_at_21132_pm.png",
    "scores":[
        3,
        2,
        4,
        1,
        5,
        3,
        2,
        4,
        1,
        5
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
