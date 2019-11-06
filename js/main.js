const searchBar = document.forms['search-img'].querySelector('input');

$('#search-img').keyup(function() {
    const $search = event.target.value.toLowerCase();
    $('.chocolat-parent a').each(function() {
        var $titleText = $(this).attr("title").toLowerCase();
        if($titleText.search($search) > -1) {
            $(this).parent().show();
        } else {
             $(this).parent().hide();
        }
    })
});

$(document).ready(function(){
    $('.chocolat-parent').Chocolat();
});

