var Index = function () {

  return {
    //Layer Slider
    initLayerSlider: function () {
      $(document).ready(function () {
        $('#layerslider').layerSlider({
          skinsPath: 'assets/plugins/layer_slider/skins/',
          skin: 'fullwidth',
          thumbnailNavigation: 'hover',
          hoverPrevNext: true,
          responsive: true,
          responsiveUnder: 960,
          sublayerContainer: 960
        });
      });
    }
  };

}();
