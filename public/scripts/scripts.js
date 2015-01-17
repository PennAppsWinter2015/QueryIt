$(function() {
  $("#json").JSONView(JSON.parse($('#json_result').text()));
});