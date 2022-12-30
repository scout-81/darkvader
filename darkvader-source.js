/*
Dark Vader by Trenton Michael
https://github.com/scout-81
trenton@trentonmicheal.xyz

MIT License

Copyright (c) 2022 Trenton Michael

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

let button = document.getElementById("vader-button");
let link = document.getElementById("vader-link");
// Get the Button and Link elements

if (window.matchMedia("(prefers-color-scheme: dark)").matches == true) {
	// Check if the browser is already requesting darkmode via @media
	vader(true);
	// Then request darkmode
}

function vader(mode) {
	if (mode == true) {// If dark mode is requested
		link.href = 'darkvader.css'; // Set the stylesheet for darkmode
		button.setAttribute('onclick', 'vader(false)'); // Reset the button to toggle
		button.innerHTML = '&#9788;'; // Change the icon on the button
	}
	if (mode == false) {// If light mode is requested
		link.href = 'null'; // Disable the stylesheet for darkmode
		button.setAttribute('onclick', 'vader(true)'); // Reset the button to toggle
		button.innerHTML = '&#9790;'; // Change the icon on the button
	}
}