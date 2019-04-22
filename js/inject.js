(function() {
  var link = document.createElement('a');
  link.href = 'https://blogcast.host/dashboard?source=extension&forceUrl=true&url=' + encodeURI(window.location.href)
  link.target = '_blank'
  link.click()
})()