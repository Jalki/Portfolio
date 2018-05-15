$(document).ready(() =>{
    $('div.Home').show();
    $('div.About').hide();
    $('div.Contact').hide();
    $('div.Projects').hide();
    $('div.Blog').hide();
    
    $('#Home').on('click', () =>{
        $('div.Home').show();
        $('div.About').hide();
        $('div.Contact').hide();
        $('div.Projects').hide();
        $('div.Blog').hide();
    })
    
    $('#About').on('click', () =>{
        $('div.Home').hide();
        $('div.About').show();
        $('div.Contact').hide();
        $('div.Projects').hide();
        $('div.Blog').hide();
    })
    
    $('#Contact').on('click', () =>{
        $('div.Home').hide();
        $('div.About').hide();
        $('div.Contact').show();
        $('div.Projects').hide();
        $('div.Blog').hide();
    })
    $('#Projects').on('click', () =>{
        $('div.Home').hide();
        $('div.About').hide();
        $('div.Contact').hide();
        $('div.Projects').show();
        $('div.Blog').hide();
    })
    
    $('#Blog').on('click', () =>{
        $('div.Home').hide();
        $('div.About').hide();
        $('div.Contact').hide();
        $('div.Projects').hide();
        $('div.Blog').show();
    })
})