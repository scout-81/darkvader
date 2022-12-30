# Dark Vader

Dark Vader is a web framework for easily implementing dark mode into websites, whether your building a new one, or retrofitting an existing website, Dark Vader does it all. All you do is add our button to your website, add the dark mode link tag at the end for your header, add the JS code at the end of your HTML, and setup your dark mode stylesheet. This gives you full control over what your dark mode experience is like for users.


### Example

A live HTML example is avalable on Github Pages [here](https://scout-81.github.io/darkvader/example.html)


### Setup

First add the link tag to the very end of your header tag. Make sure it's after all of your other stylesheets.

```
<link id="vader-link" rel="stylesheet" href="">
```

You'll then need to edit line 41 of the source code or column 132 on the mini version to link to your stylesheet. Then insert it at the end of your html tag, but not outside.

Next is the button, it's position in your HTML file doesn't matter, however at the very end would probably be best. It can be modified if needed, if the default fixed position in the bottom right corner doesn't go with the flow of your website. Just make sure to keep the id and onclick values.

```
<button id="vader-button" onclick="vader(true)" style="position: fixed; bottom: 1%; right: 5px; font-size: 1.5em;">&#9790;</button>
```

If your hosting a lot of pages you may want to host just the .js file on your webserver and just reference it with a <script scr="link to .js file"></script>

Now you need to make a stylesheet for Dark Vader to switch to when needed. You will want to turn off any dark mode browser extensions when developing it.

The popular dark mode extension "Dark Reader", uses #181a1b as the default background color, so you may want to set your body tag's background-color to that value.


### Troubleshooting

If somethings not working you may want to make sure any inline styles aren't conflicting with your dark mode stylesheet, otherwise check and make sure the files are intact.


###### SHA256 Checksums

```
377677560cc9c192a6d54813232cd6a968f0f3c487cd17dd817626cba66d2197  darkvader.css
beb6649338110479ce77f694a3a757be9b84e4815af52c0fa3b0d3db22b0539f  darkvader-mini.js
a7556581fe3b4d2cf09003f148dc41ce3eafed322c11db57dab51b3d353dbca9  darkvader-source.js
fe4f97de976d72de6e2901b451b86ecf825af07a03de9d4cbde71c38899d970d  example.html
a18a495d18c149bf03060d2ace77e2fa2231b9006a2549a3eb044e7c40337ce9  LICENSE
```
