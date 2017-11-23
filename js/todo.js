$(document).ready(function () {
    $('#button').click(function () {

        if(createToDoItem()) {
            return true;
        }
    });

    $('input[name=task]').keypress(function(event) {

        if (event.keyCode == 13) {
            if(createToDoItem()) {
                return true;
            }
        }
    });

    $("body").on('change', '#todo > li > .checkbox', function() {

        var search = 0;
        search = ($(this).closest("li").attr('id'));
        if (this.checked) {
            $(this).parent().attr('active', 'false');
            $(this).parent().find('.edit').fadeOut('slow');

            for( var key in total) {
                if(key == search) {
                    result[key].active = $(this).closest('li').attr('active');
                }
            }
            newContent(result)
        } else {
            $(this).parent().attr('active', 'true');
            $(this).parent().find('.edit').fadeIn('slow');


            for( var key in total) {
                if(key == search) {
                    result[key].active = $(this).closest('li').attr('active');
                }
            }
            newContent(result);
        }

        counter()  //main counter()
        //$(this).off();
    });
});

var total = [];
var count_items = 5;
var count_pages = 1;
var id = 0;

$('.toogle').click(function() {
    $('.toogle').removeClass('change');
    $(this).addClass('change');
    newContent(result);
});

function counter(basket) {
    var complete = 0;
    var uncomplete = 0;

    for (var i = 0; i < basket.length; i++) {
        if(basket[i].active == 'true') {
            uncomplete++
        } else {
            complete++
        }

    }

    $('body').find('.uncomplete > span').text(uncomplete);
    $('body').find('.complete > span').text(complete);
}


function createToDoItem() {
    if (!$('input[name=task]').val().trim()) {
        alert('Введите значение');
        return false;
    }

    event.preventDefault();
    total.push({id:id, title: $("input[name=task]").val(), active: 'true' });
    count_pages = Math.ceil((total.length - 1) / count_items);  //length - 1
    //return listPage = 'string'
//console.log(listPage);
    //length - 1  totalobj / totalitems on page

    id++;
    $('input[name=task]').val('');
    //addPage(cntpage);
    showItems()

    return true;
}

function addPage(cntpage,filter) {
    // $('.pages').html('');
    var complete = 0;
    var uncomplete = 0;

    for (var i = 0; i < basket.length; i++) {
        if(basket[i].active == 'true') {
            complete++
        } else {
            uncomplete++
        }

    }
    var listPage  = '';
    var myPages = $('.pages');

    console.log(complete);
    console.log(uncomplete);
    /*if(filter == 'all') {
        cntpage = Math.ceil((result.length - 1) / cntitems);
    } else if (filter == 'checked') {
        cntpage = Math.ceil( uncomplete / cntitems);
    } else if (filter == 'unchecked') {
        cntpage = Math.ceil( complete / cntitems);
    }*/
    console.log(cntpage);
    for (var i = 0; i < cntpage; i++) {
        listPage += "<a href='#' id=" + idpage +">" + idpage + "</a>";
        idpage++;
    }


    myPages.html(listPage);

    //mytodo.html(listitems)

    lastpage = idpage;
    idpage = 0;
    //return lastpage;
    return listPage;
}


function showItems() {         // var basket =[] - local array
    var listitems = '';
    var basket = total;
    console.log(basket);
    counter(basket)
    addPage(basket)
    //var count = 0;
    //var filter = $('.toogle.change').attr('id');
    //var tempArr = result;
    /*if (filter === 'checked') {
        tempArr = result.filter(function () {
        })
    } else if (filter === 'unchecked') {
        tempArr = result.filter(function () {
        })
    }*/
    //var page = $('.pages > a.active').attr('id');

    //var startIdx = cntitems * myid;
    //var endIdx = startIdx + cntitems;
    //basket = result.slice(startIdx, endIdx);
    //showItems(basket)
   // var startIdx = cntitems * page;
    //var endIdx = startIdx + cntitems;
   // tempArr = tempArr.slice(startIdx, endIdx);


    //console.log(listPage);
    if (basket.length < 1) {
        listitems = '';
        $('#todo').html(listitems)
        return true;
    }

    // tempArr

    for (var i = 0; i < basket.length; i++) {
        if (i == count_items) break;
        listitems += "<li id=" + basket[i].id + " class='list__item clearfix' active=" + basket[i].active + ">" + "<input type='checkbox'  class='checkbox' " + ((basket[i].active == 'false') ? " checked />" : '>') +
            "<a href='#' class='close' aria-hidden='true'>&times;</a>" +
            "<p class='title'>" + basket[i].title + "</p>"+
            "</li>";
    }

    $('#todo').html(listitems)
    /*if (filter == 'all') {




    } else if (filter == 'unchecked') {
        addPage(result, 'unchecked')
        for (var i = 0; i < result.length; i++) {
            if (count == cntitems) break;
            if (result[i].active == 'false') continue;
            listitems += "<li id=" + result[i].id + " class='list__item clearfix' active=" + result[i].active + ">" + "<input type='checkbox'  class='checkbox' >" +
                "<a href='#' class='close' aria-hidden='true'>&times;</a>" +
                "<p class='title'>" + result[i].title + "</p>" +
                "<a href='#' class='edit'>edit</a>" +
                "<input type='text' class='textfield'>" +
                "</li>";
            count++
        }
        //addPage(cntpage for unchecked)
        $('#todo').html(listitems)

    } else if (filter == 'checked') {
        addPage(result, 'checked');
        for (var i = 0; i < result.length; i++) {
            if (count == cntitems) break;
            if (result[i].active == 'true') continue;
            listitems += "<li id=" + result[i].id + " class='list__item clearfix' active=" + result[i].active + ">" + "<input type='checkbox'  class='checkbox' " + " checked />" +
                "<a href='#' class='close' aria-hidden='true'>&times;</a>" +
                "<p class='title'>" + result[i].title + "</p>" +
                "<a href='#' class='edit'>edit</a>" +
                "<input type='text' class='textfield'>" +
                "</li>";
            count++
        }
        //
        $('#todo').html(listitems)

    }*/
}




/*
$(document).ready(function () {
    // //variables for counter;
    //
    // click or keypress on button

     $('#button').click(function () {

         if(createToDoItem())
            counter()

            console.log(result);
     });

     $('input[name=task]').keypress(function(event) {

        if (event.keyCode == 13) {
            if(createToDoItem())
                counter()               //main counter
            console.log(result);
         }
     });

            // ?





    // $('#unchecked').click(function() {
    //     newContent(result,'unchecked')
    // });
    //
    // $('#all').click(function() {
    //     newContent(result,'all')
    // });

    $('#del').click(function() {
        console.log(result);
            for (var i = 0; i < result.length; i++) {
                if(result[i].active == 'false') {
                    result.splice(i, 1);
                    i--;
                }
            }
        console.log(result);

            newContent(result, 'all')
            counter()
        id = 0;
         });
                                            // если время будет, поменяю на $(elem).click(nfe)
    $("body").on('click', '.pages > a', function () {
        var myid = ($(this).attr('id'));
        //$('.pages a').removeClass('active');
        //$(this).addClass('active');
        //тут резал
        //var page = $('.pages > a.active').attr('id');
        var startIdx = cntitems * page;
        var endIdx = startIdx + cntitems;
        tempArr = tempArr.slice(startIdx, endIdx);
        //console.log(result);
       // console.log(basket);
        // showItems(basket)


        newContent(result)

     });

    // //show all list, only checked or unchecked.
    //
    // //click on checked or unchecked
     $('#on').click(function() {
        for(var i = 0; i < result.length; i++) {
            result[i].active = 'false';
        }
         counter()
         newContent(result, 'all')
     });
    //
         $('#off').click(function() {
         for (var i = 0; i <result.length; i++) {
             result[i].active = 'true';
         }

        counter()
             newContent(result, 'all')
         });

    // //dblclick for edit
     $("ul").on('dblclick','.edit', function() {
        var title = $(this).parent().find('.title');
         var textField = $(this).parent().find('.textfield');
         var Item = $(this).parent();



         textField.addClass('edit');

         var isEdit = $(this).hasClass('edit');
         $(this).text('save');

        $(this).click(function() {
            var id = +$(this).parent().attr('id');
             var text = $(this).parent().find('.textfield').val().trim();

            if (isEdit) {
                 if(!text.trim()) {
                    alert('Введи новое знач');
                     return false;
                }

                textField.removeClass('edit');
            }

             $(this).parent().find('.title').text(text);
            saveItem(result, Item, id)
            $('.textfield').val('');

            $(this).off();

         });

     });

    // //del todoitem
    // $("body").on('click', '#todo .close', function () {
    //     $(this).closest("li").remove();
    //
    //     counter();
    // });
    $('#settings').click(function() {
        //cntitems = $('input[type=number]').val();
        if (cntitems > (result.length)) return false;

        cntpage = Math.ceil((result.length -1 ) / cntitems); // total objects  / items_per_page

        addPage(cntpage)

    });

});

var id = 0;
var result = [];
var filter = 'all';
var cntitems = 5;
var idpage = 0;
var cntpage = 0;
var lastpage = 0;
//var listPage = '';




function saveItem(result,Item, id) {
    var pos = 0;

    for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
        if( result[i].id == id )  {
            pos = result.indexOf(result[i]);
        }
    }

        var obj = ({id: +Item.attr('id'), title: Item.find('.textfield').val(), active:Item.attr('active') });
        result[pos] = obj;
        //return result;
}
            //fix заного рисую линки страниц



function createToDoItem() {
    if (!$('input[name=task]').val().trim()) {
        alert('Введите значение');
        return false;
    }

    event.preventDefault();
    result.push({id:id, title: $("input[name=task]").val(), active: 'true' });
    cntpage = Math.ceil((result.length) / cntitems);  //length - 1
     //return listPage = 'string'
//console.log(listPage);
       //length - 1  totalobj / totalitems on page

    id++;
    $('input[name=task]').val('');
    addPage(cntpage);
    currentContent(cntitems)

    return true;

       /!* console.log(result);
    console.log(result[id]);
       $('#todo').append(
            "<li id=" + result[id].id + " class='list__item clearfix' active='true'>" +
            "<input type='checkbox' class='checkbox'>" +
            "<a href='#' class='close' aria-hidden='true'>&times;</a>" +
            "<p class='title'>" + result[id].title  + "</p>" +
            "<a href='#' class='edit'>edit</a>" +
            "<input type='text' class='textfield'>" +
            "</li>");
        id++;
        $('input[name=task]').val('');
        return true;*!/
}

function currentContent(cntitems) {
   // var listPage =
    //var Mypages = $('.pages');
    //console.log(listPage);
    var basket = [];
    var pos = cntitems;
    var mytodo = $('#todo');
    var listitems  = '';
    console.log(result);
    if(result.length <= cntitems) {
        pos = 0;

        basket = result.slice();
        console.log(basket);
    } else {
        basket = result.slice(-pos);
    }
    //console.log(pos);
   //console.log(result);

    console.log(basket);

     for (var i = 0; i < basket.length; i++) {
         listitems += "<li id=" + basket[i].id + " class='list__item clearfix' active=" + basket[i].active + ">" + "<input type='checkbox' " + "class='checkbox' " + ((basket[i].active == 'false') ? " checked />" : '>') +
             "<a href='#' class='close' aria-hidden='true'>&times;</a>" +
             "<p class='title'>" + basket[i].title + "</p>" +
             "<a href='#' class='edit'>edit</a>" +
             "<input type='text' class='textfield'>" +
             "</li>"
     }
        /!*var total = listitems + listPage;*!/
       // console.log(listitems + listPage);
        //Mypages.html(listPage);
       mytodo.html(listitems)
}
                    //fix
function showItems(basket) {
    $('#todo').html('');
    console.log(basket);
    for(var i = 0; i < basket.length; i++) {
        if (basket[i].active == 'false') {
            $('#todo').append("<li id=" + basket[i].id + " class='list__item clearfix' active=" + basket[i].active + ">" + "<input type='checkbox'  class='checkbox' checked />" +
                "<a href='#' class='close' aria-hidden='true'>&times;</a>" +
                "<p class='title'>" + basket[i].title + "</p>" +
                "<a href='#' class='edit'>edit</a>" +
                "<input type='text' class='textfield'>" +
                "</li>");
        } else {
            $('#todo').append("<li id=" + basket[i].id + " class='list__item clearfix' active=" + basket[i].active + ">" + "<input type='checkbox' class='checkbox'>" +
                "<a href='#' class='close' aria-hidden='true'>&times;</a>" +
                "<p class='title'>" + basket[i].title + "</p>" +
                "<a href='#' class='edit'>edit</a>" +
                "<input type='text' class='textfield'>" +
                "</li>");
        }

    }

    return $('todo');
}
                    //fix


    //currentContent(lastpage)
}*/
