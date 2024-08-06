document.addEventListener('DOMContentLoaded', function() {
    const data = {
        "objectDescribe": {
            "activateable": false,
            "createable": true,
            "custom": false,
            "label": "Account",
            "name": "Account",
            "queryable": true
            // Add other fields as needed
        },
        "recentItems": [
            {
                "Id": "0015j000014sJ98AAE",
                "Name": "Burlington Textiles Corp of America"
            },
            {
                "Id": "001J400000JBfyyIAD",
                "Name": "Test 3"
            }
            // Add more items as needed
        ]
    };

    // Populate object describe section
    document.getElementById('label').textContent = data.objectDescribe.label;
    document.getElementById('name').textContent = data.objectDescribe.name;
    document.getElementById('queryable').textContent = data.objectDescribe.queryable;

    // Populate recent items
    const recentItemsList = document.getElementById('recent-items-list');
    data.recentItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.Name} (ID: ${item.Id})`;
        recentItemsList.appendChild(li);
    });
});
