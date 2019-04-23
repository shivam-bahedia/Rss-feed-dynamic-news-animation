var databackup;
var link;
var descript;
var titlebox;
if(navigator.onLine) { 
    var content = document.getElementById('content');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState==4 && xhr.status==200)
    {
        var data = JSON.parse(xhr.responseText);
        databackup = data;
        var itemsContainer = document.createElement('DIV');

        if(data.status == 'ok') {
            // for( var i=0,t = data.items.length ; i < t ; ++i ){
                 item = data.items[Math.floor((Math.random() * 10))];
                var itemContainer = document.createElement('DIV');

                var itemTitleElement = document.createElement('H2');
                var itemLinkElement = document.createElement('A');
                var itemDescriptionElement = document.createElement('P');
                var itemImageElement = document.createElement('img');
                link = item.enclosure.link;
                //alert(link);
                //alert(link.substring(0,link.length-11));
                
                link=link.substring(0,link.length-11)+"630_420f_wn.jpg";
                //alert(link);
                

                
                // var itemEnclosureElement = document.querySelector('body').style.backgroundImage="url("+ link +")";

                itemLinkElement.setAttribute('href', item.link);
                itemImageElement.setAttribute('src', link);
                itemLinkElement.innerText = item.title;
                itemLinkElement.innerText = itemLinkElement.innerText.substring(11);                
                itemTitleElement.appendChild(itemLinkElement);
                descript=itemDescriptionElement.innerText;
                
                
                

                // note : make sure the content is XSS safe before using innerHTML
                itemDescriptionElement.innerHTML = item.description;
                descript=itemDescriptionElement.innerText;
                titlebox=item.title.substring(11);            
                itemContainer.appendChild(itemTitleElement);                    // Title for each news

                descript=descript.substring(0,100)+".....";
                console.log(descript);
                
                itemContainer.appendChild(itemImageElement);
                itemContainer.appendChild(itemDescriptionElement);              // Description for each news
                // itemContainer.appendChild(itemEnclosureElement);             // image for each news

                itemsContainer.appendChild(itemContainer);
                //alert(link);

            // }
          



                var titleElement = document.createElement('H1');
                titleElement.innerText = data.feed.title;
                

                // content.appendChild(titleElement);           // just displays 'Paderborn'
                //content.appendChild(itemsContainer);            // holds the main information
                
            }
            else {
                console.log("I'm the backup!");
            }
        }
    };
    
    xhr.open(
        'GET',
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.westfalen-blatt.de%2Frss%2Ffeed%2Fwb_owl_lokales_kreis_paderborn_paderborn',
        true
    );
    xhr.send();
} else {
    console.log("I'm working");
}

