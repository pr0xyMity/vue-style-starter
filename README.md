<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://raw.githubusercontent.com/konradovsky/Vue_Starter/master/public/img/icons/android-chrome-192x192.png" alt="Vue Starter logo"></a></p>

<p align="center">
  <a href="https://travis-ci.org/konradovsky/Vue_Style_Starter"><img src="https://travis-ci.org/konradovsky/Vue_Style_Starter.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <br>
</p>

<h2 align="center">Vue Style Starter</h2>

Vue Style Starter is a project made for vue designers who appreciate fully prepared and functional work enviroment. This project is based on <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue CLI 3</a>.

I'm using:

<a href="https://en.bem.info/methodology/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/bem.svg" height="60px"></a><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png" height="60px"></a><a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer"><img src="https://cli.vuejs.org/favicon.png" height="60px"></a>

For style code maintenance I've used the 7-1 architecture, it provides a simple and clean strucutre. More info about it can be found on
<a href="https://sass-guidelin.es/#architecture" target="_blank" rel="noopener noreferrer">The 7-1 Pattern</a>. 

For keeping also the template clean and easly readable I've used the <a href="https://en.bem.info/methodology/" target="_blank" rel="noopener noreferrer">BEM (Block Element Modifier) Metodology</a>. It really goes hand in hand with Scss.

### Documentation

The entire project works on css em's and rem's units. The base font size configuration can be found in _variables.scss file. Rem units are used for all measurements then media queries, one rem ( 1rem ) is calculated as 10px. It's not recommended to use static thats why we are using procentage values, which are taken from the web browser.
<a href="https://ibb.co/kYx5Cq"><img src="https://preview.ibb.co/d5QE5A/carbon-2.png" width="450px" border="0"></a>

The responsive part was build in _mixins.scss file. There is a media queries manager that helps with keeping all reactive and clean. We are using em's unit because it is recommended in media queries approach.

<a href="https://ibb.co/kYx5Cq"><img src="https://image.ibb.co/jUz7QA/carbon.png" width="450px" border="0"></a>

Here you can find an exaple how to use prepared media queries manager. This exapmple is already in the project and you can easily prepare your work for being resposive only by using rem's insted of commonly used px.

<a href="https://ibb.co/hvfssq"><img src="https://image.ibb.co/iNY1kA/carbon-1.png" width="350px" border="0"></a><br /><a target='_blank' href='https://aluminumsulfate.net/aluminum'></a>

### License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Konrad (Efix) Barrek
