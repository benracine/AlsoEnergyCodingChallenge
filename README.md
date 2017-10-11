![](http://www.alsoenergy.com/wp/wp-content/uploads/FullColor_BlackTag-e1413573042293.png)

# Coding Challenge
- Clone this repo to your local machine
- Use it to create a new repo on GitHub under your own account (please don't use GitHub fork to accomplish this)
- Complete the challenges described below. For the javascript challenges, the main invocation of the solution should be in its place in main.js, but you may add other script files if desired.
- Optionally, complete the Bonus challenge
- Cleanup commit history to have 1 commit per challenge, in order, on the master branch.
- Send us an email with a link to your repo

___
## Challenge 1. HTML and CSS
Using index.html and style.css files, make a page that has a header bar, body with split content (left column menu, right column main content) and footer. Make the split content stack vertically for screens smaller than 600px wide, with content going above the menu. The header and footer background color should be different from that of the content. Colors, Sizing and other styling details are up to you (don't worry about style too much, you don't need to be a designer, just do something reasonable).

* Header: Bar along top. Contains Left justified text "AlsoEnergy Coding Challenge" and also energy logo found in images\also logo.png
* Menu: column on left side (or below content on small screens)
* Content: rest of area to the right of menu (or full width area below the header for small screens)
* Footer: Bar along bottom

___
## Challenge 2. Javascript Basics
In main.js create a function that takes an array argument. The array will contain objects of the form 
{first: "Amanda", last: "Byron", group: "Sales"}.
The function should return an object that organizes each entry by group, and combines the name, making sure to put the last name first if 'nameOrder' is "reverse". The example below shows a possible input to the function, but the function should be able to handle any alpha-numeric group names.


The function should take the array:
```javascript
[
    {first: "Amanda", last: "Byron", group: "Sales"},
    {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
    {first: "Miltiades", last: "Crescens", group: "Sales"},
]
```
And yield a return object of:
```javascript
{ 
    receiving: [{name: "Xia Ye"}]
    sales: [{name: "Amanda Byron"}, {name: "Miltiades Crescens"}],       
}
```
___
## Bonus. Rabbit Genealogy 
 This challenge is not required, we realize it may be too time consuming to fit into one's schedule.
 
 For this challenge, you may use canvas, svg or a different method to draw the required shapes. In a field taking up the entire content area, draw 3 'rabbits' in random locations (the rabbit can be represented by a rectangle). These 3 are the 'first generation' of rabbits.  When the Generate button is clicked, each rabbit from the latest generation will spawn between 0 and 5 offspring, the offspring should be 2/3rds the height and width of their parents. They should be located at a random angle from their parent, but with a distribution of distance such that it is more likely that it is closer to its parent than farther. All rabbits must be entirely within the borders of the field, and not colliding with any other rabbits.

When the user clicks on the field, if the cursor is on a rabbit, draw that rabbit with a white border.  Change the fill color of the selected rabbit's descendents to yellow, and parents to blue.
___
