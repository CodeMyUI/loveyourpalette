# Love Your Palette

A simple palette testing tool.

See this tool in action at http://loveyourpalette.com.

## Build This LYP

If you wish to run this project on you local machine simply use the commands below. This enters the site into development mode and uses BrowserSync to refresh the site each time you update the code.

```shell
git clone https://github.com/nrdobie/loveyourpalette
cd palettetest
npm install
npm start
```

### For Distribution

If you want to upload this project to be accessible from more than you computer use the command below.

```shell
npm run build
```

This will create a `.dist/` folder with your production ready code.

## Customize LYP

Love Your Palette is a small React/Redux application. You can change the entire UI to your liking and still update the palette through the URL. The only parts that are needed is the router, Redux, the style generator, and the colors CSS file. Everything else is just presentational, so feel free to rip apart the code and make it your own.

### colors.css

This is where the magic happens. The colors.css file is processed by a very very light weight CSS prepocessor that only handles variables. It was kept light so that it could run quickly in the browser to show color changes almost instantly. LYP uses the new CSS 4 variable syntax, `var(XXX)`, to swap out variable colors. Below is a list of the variables available.

* `--color-primary`
* `--color-primary-readable`
* `--color-accent`
* `--color-accent-readable`
* `--color-dark-gray`
* `--color-dark-gray-readable`
* `--color-light-gray`
* `--color-light-gray-readable`
* `--color-white`
* `--color-white-readable`

The readable variables contain either the `--color-white` or `--color-dark-gray` value that gives the greatest contrast to the color.

## Contributing

All ideas are welcomed! If you have a suggestion for a new feature add it to the [issues tracker](https://github.com/nrdobie/loveyourpalette/issues) or program it yourself and create a pull request.
