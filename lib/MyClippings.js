define(['underscore'], (_) => {
  var extractMetadata = (metadataLine) => {
    return /.*(subrayado|marcador).* (\d+-?\d+).\|.*el (.*)/.exec(metadataLine);
  }
  var fromStringToClipping = (clipping) => {
    var parts =_(clipping.split('\n'))
      .map((c) => { return c.trim()})
      .filter((c) => { return c.length > 0});
    var metadata = extractMetadata(parts[1]);
    return {
      'book': parts[0],
      'clipping': parts[2],
      'kind': metadata[1],
      'position': metadata[2],
      'date': metadata[3]
    };
  }
  var extractClippings = (myClippings) => {
    return _(myClippings.split('=========='))
            .map((c) => { return c.trim()})
            .filter((c) => { return c.length > 0})
            .map(fromStringToClipping);
  }
  return {
    'extract': extractClippings
  };
});
