jQuery(document).ready(function(e) {
    jQuery('.anchor_nav p').click(function(){ 

        //クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
        jQuery(this).next('ul').slideToggle();

        /*矢印の向きを変更*/
        jQuery(this).toggleClass('open');
    })
});
