# Love You Palette

A simple palette testing website. See how you colors work together quickly and easily.

## Usage

_You can access the latest version of this tool at [http://palettetest.org/](http://palettetest.org/)._

Palette Test is designed to allow you to visualize how your palette will look on a modern website. The tool is based on a 6 color palette consiting of a primary and accent color as well as black, dark gray, light gray, and white. [Smashing Magazine](https://www.smashingmagazine.com/2016/04/web-developer-guide-color/) has a great article on how to create a color pallete.

Once you are in the site click on the `Edit Palette` button in the navigation bar. Enter your HEX color codes into the popup window and click finished. The site will now show your new color pallete. The URL will be updated with the color palette if you wish to share the new pallete with friends, coworkers, or clients.

## Build This Project

If you wish to run this project on you local machine simply use the commands below. This enters the site into development mode and uses BrowserSync to regenerate the site eachtime you update the code.

```shell
~$ git clone https://github.com/nrdobie/palettetest
~$ cd palettetest
~$ npm install
~$ npm start
```

### For Distribution

If you want to upload this project to be accessible from more than you computer use the command below.

```shell
npm run build
```

This will create a `build/` folder with your production ready code.
