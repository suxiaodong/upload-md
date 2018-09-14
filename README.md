# upload-md

基于jquery和bootstrap设计的一个PC端图片上传插件，参照微信上传图片的样子设计

主要功能如下：

1、支持大图预览

2、支持上传、删除

3、支持编辑重现

4、支持最大允许选择图片

使用方法足够简单

//实例化上传插件

var uploadImg=uploadMd.defineImgUpload({

    container:'#imgUpload', //插件所需容器
    
    url:'upload_file.json', //文件上传地址
    
    max:10, //允许选择的最大上传图片数
    
    parameter:{test:'1223',pcs:'sss'}, //图片上传额外参数
    
    previewImg:['./demo.jpg'], //传入预览的图片，适用编辑时展示曾经上传的图片
    
    fileInputName:'file1' //图片文件表单项名称
});

//获取已上传的图片列表

uploadImg.getUrlList();

//判断是否有文件未上传

uploadImg.hasUpload();

//编辑重放（传入指定的图片列表，将显示在插件展示区域）

uploadImg.reset(['image path']);

效果如下：

![image](https://github.com/suxiaodong/upload-md/blob/master/readme1.jpg)

![image](https://github.com/suxiaodong/upload-md/blob/master/readme2.jpg)

![image](https://github.com/suxiaodong/upload-md/blob/master/readme3.jpg)

