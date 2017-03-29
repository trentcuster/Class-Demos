function logger(){
    if(logger.single_instance){
        logger.single_instance = this;
    }
    return logger.single_instance;
}

var a = new logger();
var b = new logger();

