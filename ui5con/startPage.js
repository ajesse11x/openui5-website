!function(e){function l(d){if(i[d])return i[d].exports;var s=i[d]={i:d,l:!1,exports:{}};return e[d].call(s.exports,s,s.exports,l),s.l=!0,s.exports}var i={};l.m=e,l.c=i,l.i=function(e){return e},l.d=function(e,i,d){l.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:d})},l.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(i,"a",i),i},l.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},l.p="",l(l.s=18)}({10:function(e,l){e.exports=[{slide:"2019/01.jpg"},{slide:"2019/02.jpg"},{slide:"2019/03.jpg"},{slide:"2019/04.jpg"},{slide:"2019/05.jpg"},{slide:"2019/06.jpg"},{slide:"2019/07.jpg"},{slide:"2019/08.jpg"},{slide:"2019/09.jpg"},{slide:"2019/10.jpg"},{slide:"2019/11.jpg"},{slide:"2019/12.jpg"},{slide:"2019/13.jpg"},{slide:"2019/14.jpg"},{slide:"2019/15.jpg"},{slide:"2019/16.jpg"},{slide:"2019/17.jpg"},{slide:"2019/18.jpg"},{slide:"2019/19.jpg"},{slide:"2019/20.jpg"},{slide:"2019/21.jpg"},{slide:"2019/22.jpg"},{slide:"2019/23.jpg"},{slide:"2019/24.jpg"},{slide:"2019/25.jpg"},{slide:"2019/26.jpg"},{slide:"2019/27.jpg"},{slide:"2019/28.jpg"},{slide:"2019/29.jpg"},{slide:"2019/30.jpg"}]},18:function(e,l,i){var d=i(10),s=0;$(document).ready(function(){var e=d.map(function(e){return e.slide});fillSlideShow(e),s=0,showSlide(s)}),window.fillSlideShow=function(e){var l=$("#slide-container"),i=$("#slide-template").html(),d=$("#dots-container"),s=$("#dot-template").html(),n=$("#galleryElement"),t=$("#gallery-item-template").html();e.forEach(function(e,o){l.append(i.replace("{{src}}",e)),d.append(s.replace("{{index}}",o));var p=t.replace("{{index}}",o).replace("{{src}}",e);n.append(p),o++})},window.showPrevSlide=function(){showSlide(s-1)},window.showNextSlide=function(){showSlide(s+1)},window.showSlide=function(e){var l=$(".b-slide"),i=$(".b-slideshow__dot"),d=$(".b-topic.mod_gallery");s=e,s>=l.length&&(s=0),s<0&&(s=l.length-1),l.css({display:"none"}),i.removeClass("mod_selected"),d.removeClass("mod_selected"),$(l[s]).css({display:"block"}),$(i[s]).addClass("mod_selected"),$(d[s]).addClass("mod_selected")}}});