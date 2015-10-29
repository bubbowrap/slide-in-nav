Slide In Navigation v.1
===========

**A lightweight piece of jQuery to convert a navigation into a mobile/tablet navigation.**

**SlideInNav only works for one menu per page.**

This isn't for making dropdown menus on desktop. In fact, it doesn't show up on desktop at all. Use <a title="Superfish Drop down menus" href="http://plugins.jquery.com/superfish/">Superfish</a> in conjunction with this one. Basically, it makes a menu slide in from the left. No options for the right yet. <a href="#">Check out the demo</a>.

**INSTRUCTIONS FOR USE**

Uh ok, pretty straight forward. Three easy steps bros:

1. Add class slideInNav to the nav ul (where you'd add sf-menu).
2. then add <div id="slide-menu"> right after the closing tag of your navigation (should be </nav>, if not what are you doing it's 2015).
3. Finally, before the closing </body> tag and above the javascript, add </div> to close the slide-menu div.

in your HTML e.g.

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
    <script src="js/slideInNav.js"></script>

Then add the CSS for this after all of your other CSS in the &lt;head&gt; section.

	<link rel="stylesheet" href="css/slideInNav.css" media="all" />

I plan to come back to this and make it way easier to implement once I get some free time; I made this little script well before I got 'okay' at javascript/jQuery.
