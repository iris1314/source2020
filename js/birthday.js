// <!--
function DateSelector(selYear, selMonth, selDay)
{
    this.selYear = selYear;
    this.selMonth = selMonth;
    this.selDay = selDay;
    this.selYear.Group = this;
    this.selMonth.Group = this;
    // 給年份、月份下拉菜單添加處理onchange事件的函數
    if(window.document.all != null) // IE
    {
        this.selYear.attachEvent("onchange", DateSelector.Onchange);
        this.selMonth.attachEvent("onchange", DateSelector.Onchange);
    }
    else // Firefox
    {
        this.selYear.addEventListener("change", DateSelector.Onchange, false);
        this.selMonth.addEventListener("change", DateSelector.Onchange, false);
    }

    if(arguments.length == 4) // 如果傳入參數個數為4，最後一個參數必須為Date對像
        this.InitSelector(arguments[3].getFullYear(), arguments[3].getMonth() + 1, arguments[3].getDate());
    else if(arguments.length == 6) // 如果傳入參數個數為6，最後三個參數必須為初始的年月日數值
        this.InitSelector(arguments[3], arguments[4], arguments[5]);
    else // 默認使用當前日期
    {
        var dt = new Date();
        this.InitSelector(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
    }
}

// 增加一個最大年份的屬性
DateSelector.prototype.MinYear = 1915;

// 增加一個最大年份的屬性
DateSelector.prototype.MaxYear = (new Date()).getFullYear();

// 初始化年份
DateSelector.prototype.InitYearSelect = function()
{
    // 循環添加OPION元素到年份select對像中
    for(var i = this.MaxYear; i >= this.MinYear; i--)
    {
        // 新建一個OPTION對像
        var op = window.document.createElement("OPTION");
        
        // 設置OPTION對象的值
        op.value = parseInt(i);
        
        // 設置OPTION對象的內容
        op.innerHTML = i;
        
        // 添加到年份select對像
        this.selYear.appendChild(op);
    }
}

// 初始化月份
DateSelector.prototype.InitMonthSelect = function()
{
    // 循環添加OPION元素到月份select對像中
    for(var i = 1; i < 13; i++)
    {
        // 新建一個OPTION對像
        var op = window.document.createElement("OPTION");
        
        // 設置OPTION對象的值
        op.value = i;
        
        // 設置OPTION對象的內容
        op.innerHTML = i;
        
        // 添加到月份select對像
        this.selMonth.appendChild(op);
    }
}

// 根據年份與月份獲取當月的天數
DateSelector.DaysInMonth = function(year, month)
{
    var date = new Date(year, month, 0);
    return date.getDate();
}

// 初始化天數
DateSelector.prototype.InitDaySelect = function()
{
    // 使用parseInt函數獲取當前的年份和月份
    var year = parseInt(this.selYear.value);
    var month = parseInt(this.selMonth.value);
    
    // 獲取當月的天數
    var daysInMonth = DateSelector.DaysInMonth(year, month);
    
    // 清空原有的選項
    this.selDay.options.length = 0;
    // 循環添加OPION元素到天數select對像中
    for(var i = 1; i <= daysInMonth ; i++)
    {
        // 新建一個OPTION對像
        var op = window.document.createElement("OPTION");
        
        // 設置OPTION對象的值
        op.value = i;
        
        // 設置OPTION對象的內容
        op.innerHTML = i;
        
        // 添加到天數select對像
        this.selDay.appendChild(op);
    }
    $('.selectpicker').selectpicker('refresh'); //初始化 select套件 的UI(使用者介面)
}

// 處理年份和月份onchange事件的方法，它獲取事件來源對像（即selYear或selMonth）
// 並調用它的Group對像（即DateSelector實例，請見構造函數）提供的InitDaySelect方法重新初始化天數
// 參數e為event對像
DateSelector.Onchange = function(e)
{
    var selector = window.document.all != null ? e.srcElement : e.target;
    selector.Group.InitDaySelect();
}

// 根據參數初始化下拉菜單選項
DateSelector.prototype.InitSelector = function(year, month, day)
{
    // 由於外部是可以調用這個方法，因此我們在這裡也要將selYear和selMonth的選項清空掉
    // 另外因為InitDaySelect方法已經有清空天數下拉菜單，因此這裡就不用重複工作了
    this.selYear.options.length = 0;
    this.selMonth.options.length = 0;
    
    // 初始化年、月
    this.InitYearSelect();
    this.InitMonthSelect();
    
    // 設置年、月初始值
    this.selYear.selectedIndex = this.MaxYear - year;
    //this.selMonth.selectedIndex = month - 1;
    this.selMonth.selectedIndex = 0;
    
    // 初始化天數
    this.InitDaySelect();
    
    // 設置天數初始值
    //this.selDay.selectedIndex = day - 1;
    this.selDay.selectedIndex = 0;
}
// -->