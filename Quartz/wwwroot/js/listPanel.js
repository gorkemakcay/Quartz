//const { fromUserCoordinate } = require("ol/proj"); // [bu ne? nereden geldi?]

// #region List Panel's createList() Function
function createList() {
    // #region Get All Links From DB & Display On The List Panel As A Button
    $("#shapeArea").children().remove();

    $.ajax({
        type: "GET",
        url: "QuartzLink/GetAllLinksJSON",
        data: { mainLinkId: currentQuartzLink.Id },
        success: function (response) {
            allLinks = jQuery.parseJSON(response);

            // #region Create Link Buttons
            allLinks.forEach(function (link) {
                var linkButton = $("<button id=" + link.Id + " type='button' class='btn text-dark listPanelButtons linkButton'><strong><i class='bi bi-file-image-fill'></i></strong>&nbsp;" + link.TagNo + "</button>");

                $("#shapeArea").append(linkButton);
            })
            // #endregion
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
    // #endregion

    // #region Get All Items From DB & Display On The List Panel As A Button
    $.ajax({
        type: "GET",
        url: "QuartzItem/GetAllItemsJSON",
        data: { linkId: currentQuartzLink.Id },
        success: function (response) {
            allItems = jQuery.parseJSON(response);

            // #region Create Item Buttons
            allItems.forEach(function (item) {
                var itemButton = $("<button id=" + item.Id + " type='button' class='btn text-dark listPanelButtons itemButton'><strong><i class='bi bi-tags-fill'></i></strong>&nbsp;" + item.TagNo + "</button>");

                $("#shapeArea").append(itemButton);
            });
            // #endregion
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
    // #endregion

    // #region Link & Item Button's On Click Functions
    function wait() {
        $(".linkButton").on('click', function () {
            $("#linkModal").modal('show');
            lastClickedLinkButtonId = $(this).attr('id');
            clickedOrCreated = "clicked";

            $.ajax({
                type: "GET",
                url: "QuartzLink/GetLinkDetailJSON",
                data: { linkId: lastClickedLinkButtonId },
                success: function (response) {
                    lastClickedLink = jQuery.parseJSON(response);
                    if (lastClickedLink.CurrentDrawingId != 0) {
                        $("#createdLinkMode").attr("hidden", "");
                        $("#clickedLinkMode").removeAttr("hidden");
                    }
                    else {
                        $("#createdLinkMode").removeAttr("hidden");
                        $("#clickedLinkMode").attr("hidden", "");
                    }
                    addLinkUploadDrawingArea = false;
                    document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
                    document.getElementById("AddLinkUploadDrawingAreaCreatedMode").setAttribute("hidden", "");
                    $("#addLinkSelectDrawing").removeAttr("disabled");

                    loadLinkModal();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        });

        $(".itemButton").on('click', function () {
            $("#itemModal").modal('show');
            lastClickedItemButtonId = $(this).attr('id');
            clickedOrCreated = "clicked";

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetItemDetailJSON",
                data: { itemId: lastClickedItemButtonId },
                success: function (response) {
                    lastClickedItem = jQuery.parseJSON(response);
                    loadInformationPage();
                    $("#itemModalSaveButton").removeAttr("hidden");
                    $("#itemShowLabel").removeAttr("hidden");
                    $("#showlabelSpan").removeAttr("hidden");
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        });
    }
    setTimeout(wait, 200);
    // #endregion
}
// #endregion