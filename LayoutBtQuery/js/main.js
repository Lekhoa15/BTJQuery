const tabHeader = document.querySelector('.tabBtn');
const tabContent = document.querySelector('.tabContent');
// let elementName = element.getAttribute('name');
    // let displayTab = tabContent.querySelector(`#${elementName}`);
    const tabElement = document.getElementsByClassName('tab-element')
    const tabElemntLink = document.getElementsByClassName('tab-element_link')
    const tabItem = document.getElementsByClassName('tabItem')
        // let activedElement = tabHeader.querySelector('.active');
        // let activedTab = tabContent.querySelector('.active');
        console.log(tabElement)
    

    for (let i = 0; i < tabElement.length; i++) {
        
        tabElement[i].addEventListener('click', () => {
            for (let j = 0; j < tabElement.length; j++) {
                if (j !== i){
                    tabElemntLink[j].classList.remove('active')
                    tabItem[j].classList.remove('active')
                }

            }
            tabElemntLink[i].classList.add('active')
            tabItem[i].classList.add('active')
            
        })
    }
  
    // if (activedElement) {
    //     activedElement.classList.remove('active');
    // }

    // if (activedTab) {
    //     activedTab.classList.remove('active');
    // }

    // if (element) {
    //     element.classList.add('active');
    // }

    // if (displayTab) {
    //     displayTab.classList.add('active');
    // }
    $(document).ready(function(){
        var sidebar = $(".sideBar");
        var sidebarOffset = sidebar.offset().top;
    
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
    
            
            if (scrollTop > sidebarOffset) {
                sidebar.addClass('fixed');
            } else {
                sidebar.removeClass('fixed');
            }
        });
    });
   
    
    $(document).ready(function(){
        
        $('.compname').on('input', function() {
            var inputValue = $(this).val().trim(); 
            var box2 = $('.box2');
            var boxTitle = box2.find('h3');
            var boxContent = box2.find('.boxContent');
    
         
            if (inputValue.toLowerCase() === 'close') {
                box2.hide();
            } else {
                
                boxTitle.text(inputValue);
                boxContent.html('Số ký tự: ' + inputValue.length + '<br>Số từ: ' + inputValue.split(/\s+/).filter(function(str) {
                    return str !== '';
                }).length);
                box2.show();
            }
        });
    });
    $(document).ready(function(){
      
        $('input[type="checkbox"]').change(function() {
            
            if ($(this).prop('checked')) {
              
                $('input[type="checkbox"]').not(this).prop('checked', false);
            }
        });
    });
    $(document).ready(function() {
        $("#submitButton").click(function(event) {
            var url1 = $("#url1").val();
            var url2 = $("#url2").val();
            var sendDvd = $("#sendDvd");
    
            if ((url1 || url2) && sendDvd.prop("checked")) {
                alert("You cannot select 'DVDを郵送します' when URL 1 or URL 2 is filled.");
                event.preventDefault(); 
            }
        });
    
        // Kiểm tra khi  nhập vào ô input URL
        $("#url1, #url2").on("input", function() {
            var url1 = $("#url1").val();
            var url2 = $("#url2").val();
            var sendDvd = $("#sendDvd");
    
            if (url1 || url2) {
                sendDvd.prop("disabled", true); // Vô hiệu hóa checkbox
            } else {
                sendDvd.prop("disabled", false); // Kích hoạt lại checkbox
            }
        });
    });
   
    $(document).ready(function(){
        // Xử lý sự kiện khi người dùng chọn một tập tin ảnh
        $("#imageInput").change(function(){
            var file = $(this)[0].files[0]; // Lấy tập tin ảnh đầu tiên được chọn
            var reader = new FileReader();
            reader.onload = function(e) {
                // Hiển thị ảnh được chọn trong phần thông tin đã nhập
                var imageUrl = e.target.result;
                var imageTag = '<img src="' + imageUrl + '" alt="Ảnh đã chọn">';
                $("#selectedImage").html(imageTag);
            }
            // Đọc dữ liệu của tập tin ảnh
            reader.readAsDataURL(file);
        });
    
        // Xử lý sự kiện khi người dùng nhấn nút submit
        $("#submitButton").click(function(){
            // Lấy thông tin đã nhập từ form
            var formData = {
                BoxText: $(".compname").val(),
                バンド名: $(".listlink").val(),
                Tỉnhthành :$(".listlink1").val(),
                代表者: $("input[name='postalCode1']").val(),
                郵便番号: $("input[name='postalCode2']").val(),
                住所: $("input[name='address']").val(),
                紹介文: $("textarea[name='prText']").val(),
                URL1: $("input[name='url1']").val(),
                URL2: $("input[name='url2']").val(),
                DVDS: $("input[name='dvd[]']:checked").map(function(){ return this.value; }).get()
            };
    
            // Hiển thị thông báo xác nhận với các thông tin vừa nhập
            var message = "<table>";
            $.each(formData, function(key, value){
                if (key === 'dvds') {
                    message += "<tr><td><strong>DVDs</strong>:</td><td>" + value.join(', ') + "</td></tr>";
                } else {
                    message += "<tr><td><strong>" + key + "</strong>:</td><td>" + value + "</td></tr>";
                }
            });
            // Thêm ảnh vào thông báo
            var selectedImage = $("#selectedImage").html();
            if (selectedImage) {
                message += "<tr><td colspan='2'>" + selectedImage + "</td></tr>";
            }
            message += "</table>";
    
            $("#confirmationMessage").html(message);
            $("#confirmationMessage").dialog("open");
        });
    });
    
    $(document).ready(function(){
        // Ẩn thông báo xác nhận ban đầu
        $("#confirmationMessage" ).dialog({
            autoOpen: false,
            modal: true,
            buttons: {
                "Đồng ý": function() {
              
                    $(this).dialog("close");
                    // Thực hiện các hành động khi người dùng đồng ý
                },
                "Hủy": function() {
                    
                    $(this).dialog("close");
                    // Thực hiện các hành động khi người dùng hủy
                }
            }
            
        });

    });