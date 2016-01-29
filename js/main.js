$(document).ready(function() {
    var opic = $.ajax({
        url: 'json/main.json',
        type: 'GET',
        dataType: 'JSON'

    });
    opic.success(function(data) {
        var odata = data;

        $('#a1').attr("src", odata.Images[0].img);
        $('#a2').attr("src", odata.Images[1].img);
        $('#b1').attr("src", odata.Images[2].img);
        $('#b2').attr("src", odata.Images[3].img);
        $('#l1').attr("src", odata.Images[4].img);


        for (var i = 0; i < odata.Items.length; i++) {
           $('.segment #heading').eq(i).html(odata.Items[i].heading);
            $('.segment #information').eq(i).html(odata.Items[i].information);
            $('.segment #logo').eq(i).attr("src", odata.Items[i].img);

        }
    });

    /*-------------------------------------Item-------------------------------------


    /*------------------------------------*Item*-------------------------------------*/
    /*------------------------------------ view details--------------------------------------*/
    $('#detail1').click(function() {
        $('#content').html($('.details').eq(0).find('p').text());
        $('#myDetails').modal('show');

    });
    $('#detail2').click(function() {
        $('#content').html($('.details').eq(1).find('p').text());
        $('#myDetails').modal('show');

    });
    $('#detail3').click(function() {
        $('#content').html($('.details').eq(2).find('p').text());
        $('#myDetails').modal('show');

    });
    $('#detail4').click(function() {
        $('#content').html($('.details').eq(3).find('p').text());
        $('#myDetails').modal('show');

    });
    /*-----------------------------------view details------------------*/
    /*---------------------------------edit save delete-----------------*/
    $('#save').on('click', function() {
        $('table').append('<tr id="myrow"><td>' + $('#sno').val() + '</td>' + '<td>' + $('#ename').val() + '</td>' + '<td>' + $('#eid').val() + '</td>' + '<td>' + $('#address').val() + '</td>' + '<td><button class="btn btn-default" id="edit" data-toggle="modal" data-target="#myModal1">Edit</button></td>' + '<td><button class="btn btn-default" id="view"  data-toggle="modal" data-target="#myModal2">View</button></td>' + '<td><button class="btn btn-default" id="delete">Delete</button></td>' + '<td><span class="glyphicon glyphicon-info-sign" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="info"></span></td>' + '</tr>');
    });
    $('#mytable').on('click', '#delete', function() {
        $(this).parent().parent().remove();
    });
    $('#mytable').on('click', '#view', function() {
        var a = $(this).closest('td').parent();
        $('#contentload').html('Sl.No:' + a.find('td').eq(0).text() + '<br>' + 'Employee Name:' + a.find('td').eq(1).text() + '<br>' + 'Address:' + a.find('td').eq(3).text() + '<br>' + 'Employee id:' + a.find('td').eq(2).text());

    });
    var col1, col2, col3, col4;
    $('#mytable').on('click', '#edit', function() {
        $('#myModal').modal('show');
        $('#save').hide();
        $('#update').show();
        var tr = $(this).closest('td').parent();
        col1 = tr.find('td').eq(0);
        col2 = tr.find('td').eq(1);
        col3 = tr.find('td').eq(2);
        col4 = tr.find('td').eq(3);
        $('#sno').val(col1.text());
        $('#ename').val(col2.text());
        $('#address').val(col3.text());
        $('#eid').val(col4.text());
    });
    $('#update').click(function() {
        col1.text($('#sno').val());
        col2.text($('#ename').val());
        col3.text($('#address').val());
        col4.text($('#eid').val());
        $('#myModal').modal('hide');
    });
     $('#create').on('click',function(){
        $('#save').show();
        $('#update').hide();
    });

    $('#info').click(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
        /*--------------------------------------****---------------------------------*/
});
