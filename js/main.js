function showNotAvailable(){var a=$('<span class="not-available">Sorry, the OctoLinker isn\'t available for your browser.<br/>We currently support </span>').append($(".install-chrome").removeClass("grey-link")).append(", ").append($(".install-firefox").removeClass("grey-link")).append(" and ").append($(".install-opera").removeClass("grey-link")).append(".");$("#install .center").html(a),$(".header-content--small").empty()}function updateInstallButton(a,b){var c=$("#install-button"),d=$("#install-note");c.text("Install for "+a),c.attr("href",b),d.text("Also available for"),$("<span>and </span>").insertBefore($(".header-content--small a:last"))}function initInstallButton(){var a=$.browser.name;"mozilla"===a&&(a="firefox");var b=$(".install-"+a);return b.length?(updateInstallButton(a,b.attr("href")),void b.remove()):void showNotAvailable()}$(function(){"use strict";smoothScroll.init({offset:$("nav").outerHeight()+20}),initInstallButton(),$('[data-toggle="tooltip"]').tooltip()});