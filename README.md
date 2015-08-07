# Nice Things SVG Icon Set

I really really like [Chris Behr's](https://twitter.com/chuckle_h0und/ "Chris Behr on Twitter") [Nice Things icon set](http://www.smashingmagazine.com/2013/11/freebie-nice-things-icon-set-png-ai-source/ "Nice Things icon set") on Smashing Magazine.

I wanted to use the icons as SVG icons, so I took the time and converted the icon set to an SVG icon set. This icon set is mainly consisted of a single SVG file, containing each icon's **def**inition. Each icon def is inside a `<symbol>` tag and can be used using the `<use>` tag.

## The Process Used

I opened the file in Illustrator and exported every icon to an SVG file. You can find these files inside the `svg` folder. Please keep in mind that these files are unoptimized, just as they were exported by Illustrator.

Then I used [SVGO](https://github.com/svg/svgo/ "SVGO") to have the SVG files optimized. They can be found inside the `svgo` folder.

In order to create the single SVG file that contains the definitions of all the icons, I used [Grunt SVG store](https://github.com/FWeinb/grunt-svgstore "Grunt SVG store"). This file is named `nice-things.svg`.

## Usage

Every icon definition has a unique id. The id has the name of the corresponding file name prefixed with `icon-`. For instance, the icon `toy-robot` has an id of `icon-toy-robot`, the icon `battery` has an id of `icon-battery`, etc.

As said above, the file with the icons' definitions is `nice-things.svg`. You can either use it inline, or as an external source.

### Inline

In this case, you have to have the code of `nice-things.svg` in your HTML code. Just open `nice-things.svg` with a text editor, copy its contents and paste them inside your HTML file, preferably right after the `<body>` tag.

**Important!** If you choose the inline way, don't forget to add `style="display: none"` as an attribute to the outer `<svg>` tag. Check the `test-inline.html` for a working example.

**Keep in mind!**
The  `nice-things.svg` file is quite large, over 1.5MB. That's because the icons are quite detailed and that comes to a cost. If you paste its contents inside an HTML file you work on, there is a chance your text editor will slow down or even crash. Also, you may find it difficult to keep working on a file with a such a considerable amount of code inside.

If you use a server-side language or any other tool that allows you to include files (static site generators, mixture, codekit, etc), you can just include `nice-things.svg` to make your life easier.

Now, if you want to use, say, the toy-robot icon, use the following code:

```html
<svg>
    <use xlink:href="#icon-toy-robot"></use>
</svg>
```

Needles to say, you can can give the `<svg>` and `<use>` tags your own classes or ids.

### As an external source

As said above, the `nice-things.svg` is quite large. Fortunately, you can use the file as an external source.

In order to do that, just have the `nice-things.svg` lying around and use the following code:

```html
<svg class="icon">
    <use xlink:href="nice-things.svg#icon-toy-robot"></use>
</svg> 
```

That's it! Just make sure you give the correct path in the `xlink:href` attribute. [This article is about using SVG files as external sources](https://css-tricks.com/svg-use-external-source/ "SVG use with External Source"). You should read it anyway, especially if you want IE support.

Check the `test-external.html` for a working example. This will **not** work in Internet Explorer (up to version 11 tested). Please check the above article if you want IE support.

If you open the test-external.html file directly in your browser, the icons appear in Firefox but, for security reasons, not in Chrome or Opera. However, if you use a web server, Chrome and Opera will work as expected.

## Use only the icons needed

If you want the `nice-things.svg` file to include just the icons you need, just copy the files you want from the `svgo` folder to the `svgo_live` folder and run the Grunt task. This task looks inside the `svgo_live` folder and creates `nice-things.svg`. If you don't know what Grunt is, [this is a good place to start](https://24ways.org/2013/grunt-is-not-weird-and-hard/ "Grunt for People Who Think Things Like Grunt are Weird and Hard").

If you want to add another icon later, copy it inside the `svgo_live` folder and run the Grunt task again.

The `Gruntfile.js` and the `package.json` files are included in the repo.

## Folders and Files

**svg:** Folder with all the icons in svg format. Each icon has its own file. These files are **unoptimized**, just as they were exported by Illustrator.

**svgo:** Folder with all the icons in svg format. Each icon has its own file. These files are **optimized**, with the help of [SVGO](https://github.com/svg/svgo/ "SVGO").

**svgo_live:** Please check the *Use only the icons needed* section for understanding the use of this folder.

**test-inline.html:** A test using the inline way.

**test-external.html:** A test using the external source way.

**Gruntfile.js**, **package.json**: Your Grunt stuff.

Enjoy!

*Once again, thank you [Chris Behr](https://twitter.com/chuckle_h0und/ "Chris Behr on Twitter") for this beautiful icon set and thank you [Smashing Magazine](http://www.smashingmagazine.com/2013/11/freebie-nice-things-icon-set-png-ai-source/ "Smashing Magazine - Nice Things icon set") for featuring it!*
