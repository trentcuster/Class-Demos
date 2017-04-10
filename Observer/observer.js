
var observer= {
  addSubscriber: function (callback) {
      if(typeof callback === "function"){
          this.subscribers[this.subscribers.length] = callback;
      }
  },
  removeSubscriber: function (callback) {
      for(var i = 0; i < this.subscribers.length; i++) {
          if (this.subscribers[i] === callback) {
              delete this.subscribers[i];
          }
      }
  },
  publish: function (what){
      for (var i = 0; i < this.subscribers.length; i++) {
          if(typeof this.subscribers[i] === "function"){
              this.subscribers[i](what);
          }
      }
  },
  make: function (o){ //this turns an object into a publisher
      for(var i in this){
          if(this.hasOwnProperty(i)){
              o[i] = this[i];
              o.subscribers = [];
          }
      }
  }
};

var blogger = {
    writeBlogPost : function(){
        var content = 'Zelda is Awesome! Buy it!';
        this.publish(content);
    }
}

var youtuber = {
    uploadedVideo: function () {
        var video = "Cats have small brains. Awesome!";
        this.publish(video);
    }
}

observer.make(blogger);
observer.make(youtuber);

var jack = {
    read: function (what) {
        console.log("I just read blogger said " + what);
    }
}

var ethan = {
    videowatched: function (what) {
        console.log("Everything on youtube is true even " + what);
    }
}

blogger.addSubscriber(jack.read);
youtuber.addSubscriber(ethan.videowatched);

blogger.writeBlogPost();
youtuber.uploadedVideo();