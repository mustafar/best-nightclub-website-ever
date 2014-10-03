var oontz = {
  topBox: null,
  bottomBox: null,
  
  init: function (document, topBox, bottomBox) {
    this.topBox = topBox;
    this.bottomBox = bottomBox;
    var height = $(document).height(),
        width = $(document).width(),
        fontSize = Math.floor(Math.min(height, width) * 0.1);
    
    // setup oontz
    var edgePattingMultiplier = 0.9,
        underlineWidthMultiplier = 0.12;
    this.topBox.style.fontSize = fontSize + 'px';
    this.topBox.style.paddingLeft =
      Math.floor(edgePattingMultiplier * fontSize) + 'px';
    this.topBox.style.marginTop = fontSize + 'px';
    this.topBox.style.borderBottom =
      Math.floor(underlineWidthMultiplier * fontSize) + 'px solid';
    this.bottomBox.style.fontSize = fontSize + 'px';
    this.bottomBox.style.paddingRight =
      Math.floor(edgePattingMultiplier * fontSize) + 'px';
    this.bottomBox.style.marginBottom = fontSize + 'px';
    this.bottomBox.style.borderBottom =
      Math.floor(underlineWidthMultiplier * fontSize) + 'px solid';
    
    // show the oontz
    this.topBox.style.display = 'block';
    this.bottomBox.style.display = 'block';
  },
  
  reOontz: function(duration) {
    var durationSet = duration * 0.9,
        durationReset = 0;//duration - durationSet,
        initPadding = Number($(this.bottomBox).css('padding-right').replace('px', '')),
        animatePadding = 3 * initPadding;
    
    $(this.bottomBox)
      .animate({paddingRight: animatePadding + 'px'}, durationSet)
      .animate({paddingRight: initPadding + 'px'}, durationReset)
  }
}
