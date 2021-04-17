"use strict";

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  $(".hamburger, #nav_shadow").click(function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
  });
  $(".m_list_item-link").click(function () {
    $(".hamburger").removeClass("is-active");
    $("body").removeClass("open");
  });
  $(".m_list_item-link, list_item-link").click(function (e) {
    e.preventDefault();
    var top = $($(this).attr("href")).offset().top;
    $("html, body").animate({
      scrollTop: top
    }, 400);
  });
  $("#to_top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 400);
  }); // $("input").styler();
});