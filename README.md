# Beatmaker

I would like to present you my first javascript based project. The beatmaker is a tool for making music with some fun.

## About the project

A vision of the project came to me during a javascript course. The layout of the website comes from my previous project, which supposed to be an music event website. That design was fit perfectly to it!

### Build with

I created this theme using CSS pre-processor:

- SASS

This is a list of frameworks that I build my project using:

- JQuery
- RoundSlider

## UI Design

At the beginning, I prepared an UI project using Adobe XD. I like this stage, because I need to think and be creative.

![Work in Adobe XD](https://github.com/sbkjarmul/Beatmaker/blob/master/img/BeatmakerXD.png)

## Landing page

On the hero section I used something like paralax effect. There are several layers and every single object is moving with his own speed, based on scroll position. I cut them out of one image using Adobe Photoshop. The pictures on my site come from unsplash.com.

```js
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });
});
```

## Beatmaker app
