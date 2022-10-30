Page({
  data: {
    Btntext: "Go to Home",
    currentInput: ""
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  handleTap() {
    console.log("Tapped...");
    my.navigateTo({
      url: '/pages/landlord/landlord'
    })
  },
  handleRequest() {
    my.request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      data: {
        from: 'Paytm',
        production: 'JSAPI',
      },
      dataType: 'json',
      success: function (res) {
        // my.alert({ content: 'success' });
        console.log("request succes", res)
      },
      fail: function (res) {
        // my.alert({ content: 'fail' });
         console.log("request fail", res)
      },
      complete: function (res) {
        my.hideLoading();
        // my.alert({ content: 'complete' });
             console.log("complete")
      }
    });

    const task = my.request({ url: 'https://httpbin.org/post' })
    task.abort()
  },
  handleInput(e) {
    this.setData({
      currentInput: e.detail.value
    })
  },
  handlePayment(){
    my.call('buyGoods', {
        tillNumber: '12345',
        amount: '150.0',
        currency: 'KES', // currencyCode to be used - only KES supported for now
        reason: 'Jon Groceries', // optional field
        success: function(res) {            
          my.alert({
           content: JSON.stringify(res),
          });
        },
        fail: function(res) {  
          my.alert({
            content: JSON.stringify(res),
          });
       },
    });
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'Lipa Kodi',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
