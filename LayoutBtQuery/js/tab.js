$(document).ready(function() {
  $('ul.menu li a').click(function(e) {
      e.preventDefault(); 

      var tabId = $(this).attr('href');

      window.location.href = 'index.html?tab=' + tabId.substring(1);
  });

  var tab = getParameterByName('tab');
  if (tab) {
     
      $(tab).addClass('active');
  }
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}