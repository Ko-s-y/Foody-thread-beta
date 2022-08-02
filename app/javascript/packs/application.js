// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// バーガーメニュー　
$(function() {
  $(document).on('click', '.navbar-burger', function() {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });
});

// 検索フォーム表示/非表示関数
$(function() {
  $(document).on('click', '.search-icon', function() {
    $('.search-form-appear').css({
      'display': 'none'
    });
    $('.search-form-disappear').css({
      'display': 'block'
    });
    $('.search-form').css({
      'display': 'block'
    });
  });
});

$(function() {
  $(document).on('click', '.dis-search-icon', function() {
    $('.search-form-disappear').css({
      'display': 'none'
    });
    $('.search-form').css({
      'display': 'none'
    });
    $('.search-form-appear').css({
      'display': 'block'
    });
  });
});

// タブレット,スマホ専用検索フォーム表示/非表示関数
$(function() {
  $(document).on('click', '.tab-sp-search-icon', function() {
    $('.tab-sp-search').css({
      'display': 'block'
    });
  });
});

$(function() {
  $(document).on('click', '.close-tab-sp-search-btn', function() {
    $('.tab-sp-search').css({
      'display': 'none'
    });
  });
});

// ・・・メニューの表示/非表示関数
$(function() {
  $(document).on('click', '.appear-menu-btn', function() {
    $(".post-menu").slideToggle(200);
    $(".appear-menu-btn").css({
      'color': '#3273dc'
    });
    $(".appear-menu-btn").addClass('open')
  });
});

$(function() {
  $(document).on('click', '.open', function() {
    $(".appear-menu-btn").css({
      'color': 'black'
    });
    $(".appear-menu-btn").removeClass('open')
  });
});

// usersページのアクティビティ表示/非表示関数
$(function() {
  $(document).on('click', '.appear-user-data', function() {
    $(".user-data").slideToggle(300);
    let text = $(this).text();
    if (text === "アクティビティの確認") {
        $(this).text("アクティビティを閉じる");
    } else {
      $(this).text("アクティビティの確認");
    }
  });
});
