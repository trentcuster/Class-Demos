var url = "https://yoyotricks.com/wp-content/themes/ytResponsiveYTChild/images/store-icons/Civility-yoyo.jpg";

$(function(){

    var Myfactory = {};
    Myfactory.dom = {};

    Myfactory.dom.Text = function (url){
        this.url = url;
        this.insert = function(){
            $(".mydiv").append(url + "<br />");
        };
    };

    Myfactory.dom.Image = function (url){
        this.url = url;
        this.insert = function(){
            $(".mydiv").append("<img src='" + url + "'/><br />");
        };
    };

    Myfactory.dom.Link = function (url){
        this.url = url;
        this.insert = function(){
            $(".mydiv").append("<a href ='" + url +"'> " + url + "</a><br>");
        };
    };

    var a = new Myfactory.dom.Image(url);
    a.insert();

    var b = new Myfactory.dom.Text(url);
    b.insert();

    var c = new Myfactory.dom.Link(url);
    c.insert();

});

