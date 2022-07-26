function createList() {
    var currentFeatureCount = source.getFeatures().length;
    //select.getFeatures().push(ggg[6]);
    console.log(currentFeatureCount);

    $.ajax({
        type: "GET",
        url: "QuartzLink/GetAllLinksJSON",
        data: { mainLinkId: currentQuartzLink.Id },
        success: function (response) {
            allLinks = jQuery.parseJSON(response);

            // #region Create Link Buttons
            allLinks.forEach(function (link) {
                var linkButton = document.createElement('button');
                linkButton.setAttribute('id', link.Id);
                linkButton.setAttribute('type', 'button');
                linkButton.setAttribute('data-bs-toggle', 'modal');
                linkButton.setAttribute('class', 'btn text-white listPanelButtons linkButton');
                linkButton.textContent = link.TagNo;
                linkButton.setAttribute('data-bs-target', '#linkModal');
                var shapeArea = document.getElementById('shapeArea');
                shapeArea.appendChild(linkButton);
            })
            // #endregion

        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetAllItemsJSON",
        data: { linkId: currentQuartzLink.Id },
        success: function (response) {
            allItems = jQuery.parseJSON(response);

            // #region Create Item Buttons
            allItems.forEach(function (item) {
                var itemButton = document.createElement('button');
                itemButton.setAttribute('id', item.Id);
                itemButton.setAttribute('type', 'button');
                itemButton.setAttribute('data-bs-toggle', 'modal');
                itemButton.setAttribute('class', 'btn text-white listPanelButtons itemButton');
                itemButton.textContent = item.TagNo;
                itemButton.setAttribute('data-bs-target', '#itemModal');
                var shapeArea = document.getElementById('shapeArea');
                shapeArea.appendChild(itemButton);
            });
            // #endregion

        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });

    function waitCreateList2() {
        $(".linkButton").on('click', function () {
            lastClickedLinkButtonId = $(this).attr('id');
            clickedOrCreated = "clicked";
            loadLinkModal();
        });

        $(".itemButton").on('click', function () {
            lastClickedItemButtonId = $(this).attr('id');
            clickedOrCreated = "clicked";
            loadInformationPage();
        });
    }
    setTimeout(waitCreateList2, 100);
}