This fork
---------

This is a fork of to implement some custom changes on the UniversalLanguageSelector extension for 4training.net:
- reduce selectable languages to those we currently have
  (TODO find a way how to define that centrally in LocalSettings.php e.g.?)
- Added our custom language variants
  (TODO is that really necessary and why is $wgExtraLanguageNames in LocalSettings.php not sufficient?)
- Add redirect when user changes interface language
  Example: when he is on Prayer/de and switches from German to Polish, he will also get redirected to Prayer/pl

